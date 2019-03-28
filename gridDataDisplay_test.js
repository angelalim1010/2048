// Tests for GridDataDisplay.js
class GridDataDisplayTest extends Test {

    constructor() {
        super();
    }

    // Test for gridDataDisplay.toHTML()
    toHTML() {
        // Test 1
        var gridData = new GridData();
        var gridDataDisplay = new GridDataDisplay(gridData);
        var actualString = gridDataDisplay.toHTML();
        var expectedString = "<div class='grid'><div class='row'><div>0</div><div>0</div><div>0</div><div>0</div></div><div class='row'><div>0</div><div>0</div><div>0</div><div>0</div></div><div class='row'><div>0</div><div>0</div><div>0</div><div>0</div></div><div class='row'><div>0</div><div>0</div><div>0</div><div>0</div></div></div>";
        this.assertEquals(expectedString, actualString);

        // Test 2
        gridData._setData([
            [2,4,8,16],
            [0,0,0,0],
            [0,0,0,0],
            [16,8,4,2]
        ]);
        actualString = gridDataDisplay.toHTML();
        expectedString = "<div class='grid'><div class='row'><div>2</div><div>4</div><div>8</div><div>16</div></div><div class='row'><div>0</div><div>0</div><div>0</div><div>0</div></div><div class='row'><div>0</div><div>0</div><div>0</div><div>0</div></div><div class='row'><div>16</div><div>8</div><div>4</div><div>2</div></div></div>";
        this.assertEquals(expectedString, actualString);
    }
}

new GridDataDisplayTest().runAll();