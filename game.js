class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridDataDisplay = new GridDataDisplay(this.gridData);
        this.gridDisplayHTML = document.getElementById('grid-container');
    }

    // Starts a new game from the beginning
    play() {
        // render 2048 Grid as a table inside the 'grid-container' element
        this.gridDisplayHTML.innerHTML = this.gridDataDisplay.toString();
    }

}