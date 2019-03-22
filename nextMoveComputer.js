// Computes if there are possible moves
class NextMoveComputer {
   constructor(grid){
      this.grid = grid;
   }

   // Returns true if there are possible moves, false otherwise.
   // There are possible moves if the grid is not full or there are identical adjacent cells
   isNextMovePossible(){
      if(!this.grid.isFull()) return true;

      // Checks if there are identical adjacent cells in each row
      for(let row = 0; row < this.grid.getSize(); row++){
         let gridRow = this.grid.getRow(row);
         for(let col = 0; col < gridRow.length - 1; col++){
            if(gridRow[col] == gridRow[col+1]) return true;
         }
      }

      // Checks if there are identical adjacent cells in each columns
      for(let col = 0; col < this.grid.getSize(); col++){
         let gridColumn = this.grid.getColumn(col);
         for(let row = 0; row < gridColumn.length - 1; row++){
            if(gridColumn[row] == gridColumn[row+1]) return true;
         }
      }

      return false;
   }
}
