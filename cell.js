// Represents a cell on the grid, with (0,0) being the top-left corner

// ** Note: Currently not using this class in the game (gridData), but we may want to discuss whether to integrate it or not **
class Cell {

    constructor(value, x, y) {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    getX() { return this.x; }

    getY() { return this.y; }

    getValue() { return this.value; }

    setValue(value) { this.value = value; }

    // copy: returns a copy of this cell
    copy() {
        return new Cell(this.x, this.y);
    }

    // toString: returns a human-readable string version of the cell
    toString() {
        return `[${this.x}, ${this.y}]`;
    }

}
// End cell.js
