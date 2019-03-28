class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridContainer = document.getElementById('grid-container');
        this.inputHandler = new InputHandler(this._onMove.bind(this));
        this.gridDataInitializer = new GridDataInitializer(this.gridData);
    }

    // Starts a new game from the beginning.
    play() {
        this.gridDataInitializer.createInitialGrid();
        this._draw();
    }

    // Draws the grid.
    _draw() {
        let gridDataDisplay = new GridDataDisplay(this.gridData);
        this.gridContainer.innerHTML = gridDataDisplay.toHTML();
    }

    // Called when the user wants to move in a given direction.
    _onMove(direction) {
        console.log('User wants to move in direction ' + direction.getName());
        let gameOverChecker = new GameOverChecker(this.gridData);
        if(gameOverChecker.isNextMovePossible()){
            let nextGridComputer = new NextGridComputer(direction, this.gridData);
            let nextGrid = nextGridComputer.getNextGrid();
            if(!this.gridData.equals(nextGrid)){
                this.gridData = nextGrid;
                let newCellComputer = new NewCellComputer(this.gridData);
                let newCell = newCellComputer.getNewCell();
                this.gridData.setCell(newCell, newCellComputer.getNewValue());
                this._draw();
<<<<<<< HEAD
                console.log(this.gridData.toString());
=======
>>>>>>> 2de65fd563f3046dea12ed44b8c6b7702af7b789
            }
        }
        else{
            alert("Game over. Please refresh the game");
        }
    }
}
