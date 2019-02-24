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

    // Mutators
    setData(newData) { this.data = newData; }

    // Accessors
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
        copy.setData(this.getData())
        return copy;
    }

    // renderGrid: returns this.data in a HTML table format
    renderGrid() {
        var res = "<table class='grid'>";
        for (let row = 0; row < this.data.length; row++) {
            res += "<tr>";
            for (let col = 0; col < this.data[row].length; col++) {
                res += "<th>" + this.data[row][col].toString() + "</th>";
            }
            res = res.substring(0, res.length-1);
            res += "</tr>";
        }
        res = res.substring(0, res.length-1);
        res += "</table>";
        return res;
    }

}
// End gridData.js
