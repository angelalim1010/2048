class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridContainer = document.getElementById('grid-container');
        this.inputHandler = new InputHandler(this._onMove.bind(this));
        this.gridDataInitializer = new GridDataInitializer(this.gridData);
        this.legendDisplay = document.getElementById('legend');

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
        let nextGridComputer = new NextGridComputer(direction, this.gridData);
        let nextGrid = nextGridComputer.getNextGrid();
        //let legendDisplay =
        if(!gameOverChecker.isNextMovePossible()){
        //    alert("Game over. Please refresh the browser");
        //    document.getElementById('gameOver').style.display = 'block';
            this.legendDisplay.innerHTML = 'Game over<br/>Refresh browser to play again';

            return;
        }
        if(this.gridData.equals(nextGrid)){
            console.log("This move isn't possible.");
            this.legendDisplay.innerHTML =
        'This move is not possible<b><br/>Try another move';
            return;

        }

        this.gridData = nextGrid;
        this.legendDisplay.innerHTML = '';
        let newCellComputer = new NewCellComputer(this.gridData);
        let newCell = newCellComputer.getNewCell();
        this.gridData.setCell(newCell, newCellComputer.getNewValue());
        this._draw();
    }
}
