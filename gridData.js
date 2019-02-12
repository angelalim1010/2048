// Represents the data of the 2048 grid
class GridData {

    constructor() {
        // data - 4x4 2d array; prepopulate with 0's by default
        this.data = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
    }

    // Mutators
    setData(newData) { this.data = newData; }

    // Accessors
    getData() { return this.data; }

    // toString: returns string version of this.data (in array format)
    toString() {
        var res = "";
        for (let i = 0; i < this.data.length; i++) {
            res += "[";
            for (let j = 0; j < this.data[i].length; j++) {
                res += this.data[i][j].toString() + ", ";
            }
            res = res.substring(0, res.length-2);
            res += "],";
        }
        res = res.substring(0, res.length-1);
        return res;
    }

    // equals: returns whether toString() of current GridData and comparable GridData are equal
    equals(otherGridData) {
        return toString() == otherGridData.toString();
    }


}
// End gridData.js
