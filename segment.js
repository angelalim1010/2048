// Represents a segment of four numbers
class Segment {

    constructor(segment) {

        // segment - an array of 4 integers; prepopulate with 0's by default
        if(segment === undefined) {
          segment = [0, 0, 0, 0];
        }
        this.segment = segment;
    }

    getData() { return this.segment; }

    // toString: returns string version of this.data (in array format)
    toString() {
        var segmentString = "[" + this.segment.join(", ") + "]";
        return segmentString;
    }

    // equals: returns whether toString() of current GridData and comparable GridData are equal
    equals(otherGridData) {
        return this.toString() == otherGridData.toString();
    }

    // returns a segment shifted to the left
    compactLeft() {
        let newData = [];

        // load all non-zero numbers into newData
        newData = this.segment.filter(num => num != 0);

        // combine adjacent numbers if they are equal
        for(let col = 0; col < newData.length - 1; col++){
          if(newData[col] == newData[col + 1]){
            newData[col] = 2 * newData[col];
            newData.splice(col + 1, 1);
          }
        }

        // add zeros at the end if necessary
        if(newData.length < this.segment.length){
          let zeroArray = Array(this.segment.length - newData.length).fill(0);
          newData = newData.concat(zeroArray);
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