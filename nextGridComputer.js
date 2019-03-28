// Computes the next grid based on old data
class NextGridComputer {
  constructor(direction, grid) {
    this.direction = direction;
    this.grid = grid;
  }

  /**
   * Returns the next grid after a direction.
   * @return {GridData} nextGrid - the next grid.
   */
  getNextGrid() {
    let nextGrid = this.grid.copy();
    let directionName = this.direction.getName();

    switch(directionName){
      case "UP":
        for (let col = 0; col < nextGrid.getSize(); col++) {
          let newColumn = new Segment();
          newColumn._setSegment(nextGrid.getColumn(col));
          // console.log(newColumn);
          // console.log(newColumn._getSegment());
          nextGrid.setColumn(col, newColumn.compactLeft());
        }
        return nextGrid;

      case "DOWN":
        for (let col = 0; col < nextGrid.getSize(); col++) {
          let newColumn = new Segment();
          newColumn._setSegment(nextGrid.getColumn(col));
          nextGrid.setColumn(col, newColumn.reverse().compactLeft().reverse());
        }
        return nextGrid;

      case "LEFT":
        for (let row = 0; row < nextGrid.getSize(); row++) {
          let newRow = new Segment();
          newRow._setSegment(nextGrid.getRow(row));
          nextGrid.setRow(row, newRow.compactLeft());
        }
        return nextGrid;

      case "RIGHT":
        for (let row = 0; row < nextGrid.getSize(); row++) {
          let newRow = new Segment();
          newRow._setSegment(nextGrid.getRow(row));
          nextGrid.setRow(row, newRow.reverse().compactLeft().reverse());
        }
        return nextGrid;

    }

  }

}
