
class NewCellComputer {

  constructor(grid) {
    this.grid = grid;
  }

  // Returns a cell where a new number will spawn
  getNewCell() {
    let emptyCells = [];

    // Get all cells that have the value zero
    for(let row = 0; row < this.grid.getSize(); row++){
      for(let col = 0; col < this.grid.getSize(); col++){
         let cell = this.grid.getCell(row, col);
         if(cell.getValue() == 0)
            emptyCells.push(cell);
      }
    }

    // Generates a random number between 0 and (total number of empty cells - 1)
    let randNum = Math.floor(Math.random() * emptyCells.length);

    return emptyCells[randNum];
  }


}
