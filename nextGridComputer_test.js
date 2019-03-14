// Tests for nextGridComputer.js
class NextGridComputerTest extends Test{
    constructor(){
        super();
    }

    // Test for NextGridComputer.getNextGrid().
    getNextGrid(){
        // Creates a test grid
        let grid = new GridData();
        grid.setData([
            [2, 0, 2, 2],
            [0, 4, 2, 2],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ]);

        let expectedGrid = new GridData();

        // Test case UP
        var nextGridComputer = new NextGridComputer(new Move("UP"), grid);
        const gridUp = nextGridComputer.getNextGrid();
        expectedGrid.setData([
            [2, 8, 4, 4],
            [8, 0, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
        this.assertTrue(gridUp.equals(expectedGrid));

        // Test case DOWN
        nextGridComputer = new NextGridComputer(new Move("DOWN"), grid);
        const gridDown = nextGridComputer.getNextGrid();
        expectedGrid.setData([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 0, 2, 0],
            [8, 8, 4, 4]
        ]);
        this.assertTrue(gridDown.equals(expectedGrid));

        // Test case LEFT
        nextGridComputer = new NextGridComputer(new Move("LEFT"), grid);
        const gridLeft = nextGridComputer.getNextGrid();
        expectedGrid.setData([
            [4, 2, 0, 0],
            [4, 4, 0, 0],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ]);
        this.assertTrue(gridLeft.equals(expectedGrid));

        // Test case RIGHT
        nextGridComputer = new NextGridComputer(new Move("RIGHT"), grid);
        const gridRight = nextGridComputer.getNextGrid();
        expectedGrid.setData([
            [0, 0, 2, 4],
            [0, 0, 4, 4],
            [0, 8, 4, 2],
            [0, 0, 0, 0]
        ]);
        this.assertTrue(gridRight.equals(expectedGrid));
    }
}

new NextGridComputerTest().runAll();
