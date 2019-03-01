class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridDisplay = document.getElementById('grid-container');
        this.inputHandler = new InputHandler();
    }

    // Starts a new game from the beginning
    play() {
        // render 2048 Grid as a table inside the 'grid-container' element
        this.gridDisplay.innerHTML = this.gridData.renderGrid();
        this.inputHandler;
    }

}