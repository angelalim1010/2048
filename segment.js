
class Segment {

    constructor(fourNumbers) {
        if(fourNumbers === undefined) {
          fourNumbers = [0, 0, 0, 0];
        }
        this.segment = fourNumbers;
    }

    setData(newData) {
        this.segment = newData;
    }

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
        let newSegment = new Segment();
        let newData = [];
        let nextNumber = undefined;
        for(let col = 0; col < this.segment.length; col++){
          if(this.segment[col] != 0){
            nextNumber = col + 1;
            while(nextNumber < this.segment.length){
                if(this.segment[col] == this.segment[nextNumber]){
                    newData.push(2 * this.segment[col]);
                    col = nextNumber;
                    break;
                }else if(this.segment[nextNumber] != 0){
                    newData.push(this.segment[col]);
                    break;
                }else nextNumber++;
            }
          }
        }

        if(newData.length < this.segment.length){
          for(let col = newData.length; col < this.segment.length; col++){
            newData.push(0);
          }
        }
        newSegment.setData(newData);
        return newSegment;
    }

    // returns a segment REVERSED
    reverse() {

    }

}
// End gridData.js
