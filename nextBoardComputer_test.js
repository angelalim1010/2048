// Tests for nextBoardComputer.js
class NextBoardComputerTest extends Test{
    constructor(){
        super();
    }

    // Test for NextBoardComputer.getNextBoard().
    getNextBoard(){
        // Creates a test board
        var board = new GridData();
        board.setData([
            [2, 0, 2, 2],
            [0, 4, 2, 2],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ])

        // Test case UP
        var nextBoardComputer = new NextBoardComputer(new Move("UP"), board);
        const boardUp = nextBoardComputer.getNextBoard();
        var expectedBoard = [
            [2, 8, 4, 4],
            [8, 0, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        for(var r = 0; r < expectedBoard.length; r++){
            for(var c = 0; c < expectedBoard[r].length; c++){
              if(expectedBoard[r][c] != 0)
                this.assertEquals(expectedBoard[r][c], boardUp.getData()[r][c]);
            }
        }

        // Test case DOWN
        nextBoardComputer = new NextBoardComputer(new Move("DOWN"), board);
        const boardDown = nextBoardComputer.getNextBoard();
        expectedBoard = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 0, 2, 0],
            [8, 8, 4, 4]
        ]
        for(var r = 0; r < expectedBoard.length; r++){
            for(var c = 0; c < expectedBoard[r].length; c++){
              if(expectedBoard[r][c] != 0)
                this.assertEquals(expectedBoard[r][c], boardDown.getData()[r][c]);
            }
        }

        // Test case LEFT
        nextBoardComputer = new NextBoardComputer(new Move("LEFT"), board);
        const boardLeft = nextBoardComputer.getNextBoard();
        expectedBoard = [
            [4, 2, 0, 0],
            [4, 4, 0, 0],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ]
        for(var r = 0; r < expectedBoard.length; r++){
            for(var c = 0; c < expectedBoard[r].length; c++){
              if(expectedBoard[r][c] != 0)
                this.assertEquals(expectedBoard[r][c], boardLeft.getData()[r][c]);
            }
        }

        // Test case RIGHT
        nextBoardComputer = new NextBoardComputer(new Move("RIGHT"), board);
        const boardRight = nextBoardComputer.getNextBoard();
        expectedBoard = [
            [0, 0, 2, 4],
            [0, 0, 4, 4],
            [0, 8, 4, 2],
            [0, 0, 0, 0]
        ]
        for(var r = 0; r < expectedBoard.length; r++){
            for(var c = 0; c < expectedBoard[r].length; c++){
              if(expectedBoard[r][c] != 0)
                this.assertEquals(expectedBoard[r][c], boardRight.getData()[r][c]);
            }
        }
    }
}

new NextBoardComputerTest().runAll();
