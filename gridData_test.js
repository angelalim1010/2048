// Tests for GridData.js
class GridDataTest extends Test {

    constructor() {
        super();
    }

    // Test for gridData.toString()
    toString() {
        // Test 1
        var grid = new GridData();
        var actualString = grid.toString();
        var expectedString = "[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]";
        this.assertEquals(expectedString, actualString);

        // Test 2
        grid.setData( [[2,4,8,16],[0,0,0,0],[0,0,0,0],[16,8,4,2]] );
        actualString = grid.toString();
        expectedString = "[[2,4,8,16],[0,0,0,0],[0,0,0,0],[16,8,4,2]]";
        this.assertEquals(expectedString, actualString);
    }

    // Test for gridData.equals()
    equals() {
        // Test 1
        var grid = new GridData();
        var expectedGrid = new GridData();
        expectedGrid.setData([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]);
        this.assertTrue(expectedGrid.equals(grid));

        // Test 2
        grid.setData( [[2,4,8,16],[0,0,0,0],[0,0,0,0],[16,8,4,2]] );
        expectedGrid.setData( [[2,4,8,16],[0,0,0,0],[0,0,0,0],[16,8,4,2]] );
        this.assertTrue(expectedGrid.equals(grid));
    }

    // Test for gridData.copy()
    copy() {
        // Test 1
        var grid = new GridData();
        var expectedGrid = grid.copy();
        this.assertTrue(grid.equals(expectedGrid));

        // Test 2
        grid.setData( [[2,4,8,16],[0,0,0,0],[0,0,0,0],[16,8,4,2]] );
        expectedGrid = grid.copy();
        this.assertTrue(grid.equals(expectedGrid));
    }
}

new GridDataTest().runAll();