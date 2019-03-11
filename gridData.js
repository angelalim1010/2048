// Represents the data of the 2048 grid
class GridData {

    constructor(data) {
        // data - 4x4 2d array; prepopulate with 0's by default
        if (data === undefined) {
            data = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ]
        }
        this.data = data;
    }

    // setData: sets this.data to newData
    setData(newData) {
        for (let row = 0; row < newData.length; row++) {
            for ( let col = 0; col < newData[row].length; col++) {
                this.data[row][col] = newData[row][col];
            }
        }
    }

    // getData: returns this.data
    getData() { return this.data; }

    // toString: returns string version of this.data (in array format)
    toString() {
        var res = "[";
        for (let row = 0; row < this.data.length; row++) {
            res += "[";
            for (let col = 0; col < this.data[row].length; col++) {
                res += this.data[row][col].toString() + ",";
            }
            res = res.substring(0, res.length-1);
            res += "],";
        }
        res = res.substring(0, res.length-1);
        res += "]";
        return res;
    }

    // equals: returns whether toString() of current GridData and comparable GridData are equal
    equals(otherGridData) {
        return this.toString() == otherGridData.toString();
    }

    // copy: returns a copy of this.data (4x4 2d array)
    copy() {
        var copy = new GridData();
        copy.setData(this.data);
        return copy;
    }

}
// End gridData.js
