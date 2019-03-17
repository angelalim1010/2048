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
    var nextGrid = this.grid.copy();
    if (this.direction.getName() == "UP") {
      for (let col = 0; col < nextGrid.getSize(); col++) {
        let newColumn = new Segment();
        newColumn.setSegment(nextGrid.getColumn(col));
        nextGrid.setColumn(col, newColumn.compactLeft().getData());
      }
    }
    else if (this.direction.getName() == "DOWN") {
      for (let col = 0; col < nextGrid.getSize(); col++) {
        let newColumn = new Segment();
        newColumn.setSegment(nextGrid.getColumn(col));
        nextGrid.setColumn(col, newColumn.reverse().compactLeft().reverse().getData());
      }
    }
    else if (this.direction.getName() == "LEFT") {
      for (let row = 0; row < nextGrid.getSize(); row++) {
        let newRow = new Segment();
        newRow.setSegment(nextGrid.getRow(row));
        nextGrid.setRow(row, newRow.compactLeft().getData());
      }
    }
    else if (this.direction.getName() == "RIGHT") {
      for (let row = 0; row < nextGrid.getSize(); row++) {
        let newRow = new Segment();
        newRow.setSegment(nextGrid.getRow(row));
        nextGrid.setRow(row, newRow.reverse().compactLeft().reverse().getData());
      }
    }
    return nextGrid;
  }

}
