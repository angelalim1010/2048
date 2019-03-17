class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridDataDisplay = new GridDataDisplay(this.gridData);
        this.gridContainer = document.getElementById('grid-container');
        this.inputHandler = new InputHandler(this._onMove.bind(this));
    }

    // Starts a new game from the beginning.
    play() {
        this._draw();
    }

    // Draws the grid.
    _draw() {
        this.gridContainer.innerHTML = this.gridDataDisplay.toHTML();
    }

    // Called when the user wants to move in a given direction.
    _onMove(direction) {
        console.log('User wants to move in direction ' + direction.getName());
    }
}
