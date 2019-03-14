
class Segment {

    constructor(fourNumbers) {
        if(fourNumbers === undefined) {
          fourNumbers = [0, 0, 0, 0];
        }
        this.segment = fourNumbers;
    }

    getData() { return this.segment; }

    // toString: returns string version of this.data (in array format)
    toString() {
        var res = "[" + this.segment[0];
        for(let i = 1; i < this.segment.length; i++){
          res += ", " + this.segment[i];
        }
        res += "]";
        return res;
    }

    // equals: returns whether toString() of current GridData and comparable GridData are equal
    equals(otherGridData) {
        return this.toString() == otherGridData.toString();
    }

    // returns a segment shifted to the left
    compactLeft() {
        let newData = [];
        let nextNumber = undefined;

        for(let col = 0; col < this.segment.length; col++){
          if(this.segment[col] != 0) newData.push(this.segment[col]);
        }

        for(let col = 0; col < newData.length - 1; col++){
          if(newData[col] == newData[col + 1]){
            newData[col] = 2 * newData[col];
            newData.splice(col + 1, 1);
          }
        }

        if(newData.length < this.segment.length){
          for(let col = newData.length; col < this.segment.length; col++){
            newData.push(0);
          }
        }

        let newSegment = new Segment(newData);
        return newSegment;
    }

    // returns a segment REVERSED
    reverse() {
        let newSegment = new Segment(this.segment.reverse());
        return newSegment;
    }

}
// End gridData.js
