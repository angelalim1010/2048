// Represents the data of the 2048 grid
class GridData {

    // ############################## Constructor ##############################
    constructor() {
        // this.data - 4x4 2d array; prepopulate with 0's by default
        this.data = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }

    // ############################## Set Functions ##############################

    // setData: sets this.data to newData
    setData(newData) {
        for (let row = 0; row < newData.length; row++) {
            this.data[row] = newData[row].slice();
        }
    }

    // setRow: sets a row of this.data to newRow
    setRow(row, newRow) { this.data[row] = newRow; }

    // setColumn: sets a column of this.data to newColumn
    setColumn(col, newColumn) {
        for (let row = 0; row < this.data.length; row++) {
            this.data[row][col] = newColumn[row];
        }
    }

    // setCell: sets a cell of this.data to newValue
    // Question - how should Cell be integrated into gridData?
    // Should this.data be a whole array of Cell objects? 
    // I remember the idea was to implement it like this.position in BallZ, but how should we do that?
    setCell(cell, newValue) { this.data[row][col] = newValue; }

    // ############################## Get Functions ##############################

    // getSize: returns the size of the board
    // ** Currently assuming the board will always be a n*n square **
    getSize() {
        return this.data.length;
    }

    // getRow: returns a row of this.data
    getRow(row) {
        return this.data[row];
    }

    // getColumn: returns a column of this.data
    getColumn(col) {
        let newCol = [];
        for (let row = 0; row < this.data.length; row++) {
            newCol.push(this.data[row][col]);
        }
        return newCol;
    }

    // getCell: returns the value of the cell at row, col of this.data
    getCell(row, col) {
        let cell = new Cell(this.data[row][col], row, col);
        return cell;
    }


    // ############################## Misc. Helper Functions ##############################

    // toString: returns string version of this.data (in array format)
    toString() {
        var res = "[";
        for (let row = 0; row < this.data.length; row++) {
            res += "[";
            for (let col = 0; col < this.data[row].length; col++) {
                res += this.data[row][col].toString() + ",";
            }
            res = res.substring(0, res.length - 1);
            res += "],";
        }
        res = res.substring(0, res.length - 1);
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

    // isFull: returns true if there are no empty cells, false otherwise
    isFull() {
       for(let row = 0; row < this.getSize(); row++){
          if(this.getRow(row).includes(0)) return false;
       }
       return true;
    }

}
// End gridData.js
