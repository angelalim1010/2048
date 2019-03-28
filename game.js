class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridContainer = document.getElementById('grid-container');
        this.inputHandler = new InputHandler(this._onMove.bind(this));
        this.newCellComputer = new NewCellComputer(this.gridData);
        this.gameOverChecker = new GameOverChecker(this.gridData);
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
        if(this.gameOverChecker.isNextMovePossible()){
            let nextGridComputer = new NextGridComputer(direction, this.gridData);
            let nextGrid = nextGridComputer.getNextGrid();

            if(this.gridData.equals(nextGrid)){
                return;
            }
            else{
                this.gridData = nextGrid;
                let newCell = this.newCellComputer.getNewCell();
                this.gridData.setCell(newCell.getX(), newCell.getY(), this.newCellComputer.getNewValue());
                this._draw();
                console.log(this.gridData.toString());

            }
        }
        else{
            alert("Game over. Please refresh the game");
        }
    }
}
