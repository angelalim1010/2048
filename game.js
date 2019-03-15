class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridDataDisplay = new GridDataDisplay(this.gridData);
        this.gridDisplayHTML = document.getElementById('grid-container');
        this.direction = new Direction();
        this.move = new Move();
        this.inputHandler = new InputHandler(this.move.setDirection);
    }

    // Starts a new game from the beginning
    play() {
        // render 2048 Grid as a table inside the 'grid-container' element
        this.gridDisplayHTML.innerHTML = this.gridDataDisplay.toString();
        this.inputHandler;
        //console.log(this.direction.getAll().length)

    }


}
