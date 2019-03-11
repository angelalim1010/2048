// Tests for nextGridComputer.js
class NextGridComputerTest extends Test{
    constructor(){
        super();
    }

    // Test for NextGridComputer.getNextGrid().
    getNextGrid(){
        // Creates a test grid
        var grid = new GridData();
        grid.setData([
            [2, 0, 2, 2],
            [0, 4, 2, 2],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ])

        // Test case UP
        var nextGridComputer = new NextGridComputer(new Move("UP"), grid);
        var gridUp = nextGridComputer.getNextGrid();
        var expectedGrid = [
            [2, 8, 4, 4],
            [8, 0, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        for(var r = 0; r < expectedGrid.length; r++){
            for(var c = 0; c < expectedGrid[r].length; c++){
              if(expectedGrid[r][c] != 0)
                this.assertEquals(expectedGrid[r][c], gridUp.getData()[r][c]);
            }
        }

        // Test case DOWN
        nextGridComputer = new NextGridComputer(new Move("DOWN"), grid);
        var gridDown = nextGridComputer.getNextGrid();
        expectedGrid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 0, 2, 0],
            [8, 8, 4, 4]
        ]
        for(var r = 0; r < expectedGrid.length; r++){
            for(var c = 0; c < expectedGrid[r].length; c++){
              if(expectedGrid[r][c] != 0)
                this.assertEquals(expectedGrid[r][c], gridDown.getData()[r][c]);
            }
        }

        // Test case LEFT
        nextGridComputer = new NextGridComputer(new Move("LEFT"), grid);
        var gridLeft = nextGridComputer.getNextGrid();
        expectedGrid = [
            [4, 2, 0, 0],
            [4, 4, 0, 0],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ]
        for(var r = 0; r < expectedGrid.length; r++){
            for(var c = 0; c < expectedGrid[r].length; c++){
              if(expectedGrid[r][c] != 0)
                this.assertEquals(expectedGrid[r][c], gridLeft.getData()[r][c]);
            }
        }

        // Test case RIGHT
        nextGridComputer = new NextGridComputer(new Move("RIGHT"), grid);
        var gridRight = nextGridComputer.getNextGrid();
        expectedGrid = [
            [0, 0, 2, 4],
            [0, 0, 4, 4],
            [0, 8, 4, 2],
            [0, 0, 0, 0]
        ]
        for(var r = 0; r < expectedGrid.length; r++){
            for(var c = 0; c < expectedGrid[r].length; c++){
              if(expectedGrid[r][c] != 0)
                this.assertEquals(expectedGrid[r][c], gridRight.getData()[r][c]);
            }
        }
    }
}

new NextGridComputerTest().runAll();
