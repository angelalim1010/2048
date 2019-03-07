class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridDisplay = document.getElementById('grid-container');
        this.move = new Move();
        console.log(this.move)
        this.inputHandler = new InputHandler(this.move.setDirection);
        console.log(this.inputHandler)
    }

    // Starts a new game from the beginning
    play() {
        // render 2048 Grid as a table inside the 'grid-container' element
        this.gridDisplay.innerHTML = this.gridData.renderGrid();
        this.inputHandler;
    }

}
