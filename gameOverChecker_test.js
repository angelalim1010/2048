// Tests for nextMoveComputer.js
class NextMoveComputerTest extends Test{
   constructor(){
      super();
   }

   // Test for NextMoveComputerTest.isNextMovePossible().
   isNextMovePossible(){
      let grid = new GridData();
      let nextMoveComputer = new NextMoveComputer(grid);
      this.assertTrue(nextMoveComputer.isNextMovePossible());

      // Test case for when there are empty cells
      grid.setData([
         [2, 0, 2, 2],
         [0, 4, 2, 2],
         [8, 4, 2, 0],
         [0, 0, 0, 0]
      ]);
      nextMoveComputer = new NextMoveComputer(grid);
      this.assertTrue(nextMoveComputer.isNextMovePossible());

      // Test case for when the grid is full but there are possible moves
      grid.setData([
         [2, 2, 4, 8],
         [4, 8, 2, 4],
         [4, 2, 4, 2],
         [8, 4, 2, 2]
      ]);
      nextMoveComputer = new NextMoveComputer(grid);
      this.assertTrue(nextMoveComputer.isNextMovePossible());

      // Test case 2 for when the grid is full but there are possible moves
      grid.setData([
         [2, 8, 4, 8],
         [8, 4, 2, 4],
         [2, 8, 4, 2],
         [8, 4, 8, 2]
      ]);
      nextMoveComputer = new NextMoveComputer(grid);
      this.assertTrue(nextMoveComputer.isNextMovePossible());

      // Test case for when there are no possible moves
      grid.setData([
         [2, 8, 4, 8],
         [8, 4, 2, 4],
         [2, 8, 4, 2],
         [8, 4, 8, 4]
      ]);
      nextMoveComputer = new NextMoveComputer(grid);
      this.assertTrue(!nextMoveComputer.isNextMovePossible());

   }
}

new NextMoveComputerTest().runAll();
