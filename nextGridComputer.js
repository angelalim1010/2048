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
        if(this.move.getDirection() == "UP"){
          for(let col = 0; col < nextGrid.getData()[0].length; col++){
            let newColumn = new Segment(nextGrid.getColumn(col));
            nextGrid.setColumn(col, newColumn.compactLeft().getData());
          }
        }else if(this.move.getDirection() == "DOWN"){
          for(let col = 0; col < nextGrid.getData()[0].length; col++){
            let newColumn = new Segment(nextGrid.getColumn(col)).reverse();
            nextGrid.setColumn(col, newColumn.compactLeft().reverse().getData());
          }
        }else if(this.move.getDirection() == "LEFT"){
          for(let row = 0; row < nextGrid.getData().length; row++){
            let newRow = new Segment(nextGrid.getRow(row));
            nextGrid.setRow(row, newRow.compactLeft().getData());
          }
        }else if(this.move.getDirection() == "RIGHT"){
          for(let row = 0; row < nextGrid.getData().length; row++){
            let newRow = new Segment(nextGrid.getRow(row)).reverse();
            nextGrid.setRow(row, newRow.compactLeft().reverse().getData());
          }
        }
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
}
