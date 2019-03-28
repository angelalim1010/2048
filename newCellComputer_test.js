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
         this.assertEquals(0, grid.getCell(newCell.getX(), newCell.getY()));
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
            this.assertEquals(expectedCell, grid.getCell(newCell.getX(), newCell.getY()));
            this.assertEquals(0, grid.getCell(newCell.getX(), newCell.getY()));
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

   // Test for NewCellComputer.getNewNumber().
   getNewNumber(){
      let grid = new GridData();
      let newCellComputer = new NewCellComputer(grid);
      for(let i = 0; i < 10; i++){
         this.assertTrue([2,4].includes(newCellComputer.getNewNumber()));
      }
   }
}

new NewCellComputerTest().runAll();
