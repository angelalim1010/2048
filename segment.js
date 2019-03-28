// Represents an array of 4 integers
class Segment {

  constructor() {
    this.segment = [0, 0, 0, 0];
  }

  // _setSegment: sets this.segment to newSegment
  // !! For testing purposes ONLY !!
  // WARNING! This exposes segment to the outside world
  _setSegment(newSegment) { this.segment = newSegment; }

  // _getSegment: returns this.segment
  // WARNING! This exposes segment to the outside world
  _getSegment() { return this.segment; }

  // getCellValue: returns the value at cellIndex of this.segment
  getCellValue(cellIndex) { return this.segment[cellIndex]; }

  // toString: returns string version of this.data (in array format)
  toString() {
    var segmentString = "[" + this.segment.join(", ") + "]";
    return segmentString;
  }

  // equals: returns whether toString() of current Segment and comparable Segment are equal
  equals(otherSegment) {
    return this.toString() == otherSegment.toString();
  }

  // returns a segment shifted to the left
  compactLeft() {
    let newData = [];

    // load all non-zero numbers into newData
    // console.log(this.segment);
    newData = this.segment.filter(num => num != 0);

    // combine adjacent numbers if they are equal
    for (let col = 0; col < newData.length - 1; col++) {
      if (newData[col] == newData[col + 1]) {
        newData[col] = 2 * newData[col];
        newData.splice(col + 1, 1);
      }
    }

    // add zeros at the end if necessary
    if (newData.length < this.segment.length) {
      let zeroArray = Array(this.segment.length - newData.length).fill(0);
      newData = newData.concat(zeroArray);
    }

    let newSegment = new Segment();
    newSegment._setSegment(newData);
    return newSegment;
  }

  // returns a segment REVERSED
  reverse() {
    let newSegment = new Segment();
    newSegment._setSegment(this.segment.reverse());
    return newSegment;
  }

}
// End gridData.js
