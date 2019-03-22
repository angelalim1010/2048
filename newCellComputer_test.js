// Tests for newCellComputer.js
class NewCellComputerTest extends Test{

   constructor(){
      super();
   }

   //Test for NewCellComputer.getNewCell().
   getNewCell(){
      let grid = new GridData();
      let newCellComputer = new NewCellComputer(grid);
      let newCell = newCellComputer.getNewCell();

      for(let i = 0; i < 5; i++){
         newCell = newCellComputer.getNewCell();
         this.assertEquals(0, newCell.getValue());
      }

      grid.setData([
         [2, 0, 2, 2],
         [0, 4, 2, 2],
         [8, 4, 2, 0],
         [0, 0, 0, 0]
      ]);

      newCellComputer = new NewCellComputer(grid);

      for(let i = 0; i < 5; i++){
         newCell = newCellComputer.getNewCell();
         if(newCell){
            let expectedCell = grid.getCell(newCell.getX(), newCell.getY());
            this.assertEquals(expectedCell.getValue(), newCell.getValue());
            this.assertEquals(0, newCell.getValue());
         }
      }

      grid.setData([
         [2, 2, 2, 2],
         [4, 4, 2, 2],
         [8, 4, 2, 4],
         [8, 4, 4, 2]
      ]);

      newCellComputer = new NewCellComputer(grid);

      for(let i = 0; i < 5; i++){
         newCell = newCellComputer.getNewCell();
         this.assertEquals(null, newCell);
      }
   }
}

new NewCellComputerTest().runAll();
