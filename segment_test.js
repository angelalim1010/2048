
class SegmentTest extends Test{

    constructor(){
        super();
    }

    toString(){
        let grid = new GridData();
        grid.setData([
            [2, 0, 2, 2],
            [0, 4, 2, 2],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ]);
        let firstRow = new Segment(grid.getRow(0));
        let secondRow = new Segment(grid.getRow(1));
        let thirdRow = new Segment(grid.getRow(2));
        let fourthRow = new Segment(grid.getRow(3));

        this.assertEquals("[2, 0, 2, 2]", firstRow.toString());
        this.assertEquals("[0, 4, 2, 2]", secondRow.toString());
        this.assertEquals("[8, 4, 2, 0]", thirdRow.toString());
        this.assertEquals("[0, 0, 0, 0]", fourthRow.toString());

        let firstColumn = new Segment(grid.getColumn(0));
        let secondColumn = new Segment(grid.getColumn(1));
        let thirdColumn = new Segment(grid.getColumn(2));
        let fourthColumn = new Segment(grid.getColumn(3));

        this.assertEquals("[2, 0, 8, 0]", firstColumn.toString());
        this.assertEquals("[0, 4, 4, 0]", secondColumn.toString());
        this.assertEquals("[2, 2, 2, 0]", thirdColumn.toString());
        this.assertEquals("[2, 2, 0, 0]", fourthColumn.toString());

    }

    equals(){
      let grid = new GridData();
      let expectedGrid = new GridData();
      grid.setData([
          [2, 0, 2, 2],
          [0, 4, 2, 2],
          [8, 4, 2, 0],
          [0, 0, 0, 0]
      ]);
      expectedGrid.setData([
          [2, 0, 2, 2],
          [0, 4, 2, 2],
          [8, 4, 2, 0],
          [0, 0, 0, 0]
      ]);

      let firstRow = new Segment(grid.getRow(0));
      let secondRow = new Segment(grid.getRow(1));
      let thirdRow = new Segment(grid.getRow(2));
      let fourthRow = new Segment(grid.getRow(3));

      let firstExpectedRow = new Segment(expectedGrid.getRow(0));
      let secondExpectedRow = new Segment(expectedGrid.getRow(1));
      let thirdExpectedRow = new Segment(expectedGrid.getRow(2));
      let fourthExpectedRow = new Segment(expectedGrid.getRow(3));

      this.assertTrue(firstExpectedRow.equals(firstRow));
      this.assertTrue(secondExpectedRow.equals(secondRow));
      this.assertTrue(thirdExpectedRow.equals(thirdRow));
      this.assertTrue(fourthExpectedRow.equals(fourthRow));

    }

    compactLeft(){
      let grid = new GridData();
      grid.setData([
          [2, 0, 2, 2],
          [0, 4, 2, 2],
          [8, 4, 2, 0],
          [0, 0, 0, 0]
      ]);

      let firstRow = new Segment(grid.getRow(0));
      let expectedFirstRow = new Segment([4, 2, 0, 0]);

      console.log(firstRow.compactLeft().toString());
      console.log(expectedFirstRow.toString());
      this.assertTrue(expectedFirstRow.equals(firstRow.compactLeft()));
    }
}

new SegmentTest().runAll();
