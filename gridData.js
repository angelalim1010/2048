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
    setData(newData) { return this.data = newData; }

    // Accessors
    getData() { return this.data; }

    getCopy(){
        var newBoard = [];
        for(var row = 0; row < this.data.length; row++){
            newBoard.push([]);
            for(var col = 0; col < this.data[row].length; col++){
                newBoard[row].push(this.data[row][col]);
            }
        }
        return newBoard;
    }

}
// End gridData.js
