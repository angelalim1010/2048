// Computes the next grid based on old data
class NextGridComputer{
    constructor(move, grid){
        this.move = move;
        this.grid = grid;
    }

    /**
     * Returns the next grid after a move.
     * @return {GridData} nextGrid - the next grid.
     */
    getNextGrid(){
        var nextGrid = this.grid.copy();
        if(this.move.getDirection() == "UP") this._shiftUp(nextGrid);
        else if(this.move.getDirection() == "DOWN") this._shiftDown(nextGrid);
        else if(this.move.getDirection() == "LEFT") this._shiftLeft(nextGrid);
        else if(this.move.getDirection() == "RIGHT") this._shiftRight(nextGrid);
        return nextGrid;
    }

    // Spawns a new number at a random place on board
    // _getNewNumber(board){
    //   var randRow = Math.floor((Math.random() * board.length) + 1);
    //   var randCol = Math.floor((Math.random() * board[0].length) + 1);
    //
    //   var randNum = 2 * Math.floor((Math.random() * 2) + 1);
    //
    //   while(board[randRow][randCol] != 0){
    //     randRow = Math.floor((Math.random() * board.length) + 1);
    //     randCol = Math.floor((Math.random() * board[0].length) + 1);
    //   }
    //
    //   board[randRow][randCol] = randNum;
    // }

    // Shifts board data up
    _shiftUp(grid){
        for(let col = 0; col < grid.getData()[0].length; col++){
          let newColumn = new Segment(grid.getColumn(col));
          grid.setColumn(col, newColumn.compactLeft().getData());
        }
    }

    // Shifts board data down
    _shiftDown(grid){
      for(let col = 0; col < grid.getData()[0].length; col++){
        let newColumn = new Segment(grid.getColumn(col)).reverse();
        grid.setColumn(col, newColumn.compactLeft().reverse().getData());
      }
    }

    // Shifts board data left
    _shiftLeft(grid){
      for(let row = 0; row < grid.getData().length; row++){
        let newRow = new Segment(grid.getRow(row));
        grid.setRow(row, newRow.compactLeft().getData());
      }
    }

    // Handles shifting board right
    _shiftRight(grid){
      for(let row = 0; row < grid.getData().length; row++){
        let newRow = new Segment(grid.getRow(row)).reverse();
        grid.setRow(row, newRow.compactLeft().reverse().getData());
      }
    }
}
