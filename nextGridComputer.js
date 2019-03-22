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
    let direction = this.direction.getName();

    switch(direction){
      case "UP":
        for (let col = 0; col < nextGrid.getSize(); col++) {
          let newColumn = new Segment();
          newColumn.setSegment(nextGrid.getColumn(col));
          nextGrid.setColumn(col, newColumn.compactLeft().getData());
        }
        return nextGrid;

      case "DOWN":
        for (let col = 0; col < nextGrid.getSize(); col++) {
          let newColumn = new Segment();
          newColumn.setSegment(nextGrid.getColumn(col));
          nextGrid.setColumn(col, newColumn.reverse().compactLeft().reverse().getData());
        }
        return nextGrid;

      case "LEFT":
        for (let row = 0; row < nextGrid.getSize(); row++) {
          let newRow = new Segment();
          newRow.setSegment(nextGrid.getRow(row));
          nextGrid.setRow(row, newRow.compactLeft().getData());
        }
        return nextGrid;

      case "RIGHT":
        for (let row = 0; row < nextGrid.getSize(); row++) {
          let newRow = new Segment();
          newRow.setSegment(nextGrid.getRow(row));
          nextGrid.setRow(row, newRow.reverse().compactLeft().reverse().getData());
        }
        return nextGrid;

    }

  }

}
