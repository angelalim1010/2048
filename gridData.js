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
        for (let row = 0; row < this.data.length; row++) {
            res += "[";
            for (let col = 0; col < this.data[col].length; col++) {
                res += this.data[row][col].toString() + ", ";
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
    
    // getCopy: returns a copy of this.data (4x4 2d array)
    getCopy() {
        var copy = [];
        for(var row = 0; row < this.data.length; row++){
            copy.push([]);
            for(var col = 0; col < this.data[row].length; col++){
                copy[row].push(this.data[row][col]);
            }
        }
        return copy;
    }

}
// End gridData.js
