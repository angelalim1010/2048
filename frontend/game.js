class Game {
    constructor() {
        this.gridData = new GridData();
        this.gridContainer = document.getElementById('grid-container');
        this.scoresContainer = document.getElementById('scores-container');
        this.inputHandler = new InputHandler(this._onMove.bind(this));
        this.gridDataInitializer = new GridDataInitializer(this.gridData);
        this.legendDisplay = document.getElementById('legend');
        this.score = 0;

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
        let scoreBoardDisplay = new ScoreBoardDisplay(this.score);
        this.scoresContainer.innerHTML = scoreBoardDisplay.toHTML();
    }

    // Called when the user wants to move in a given direction.
    _onMove(direction) {
        console.log('User wants to move in direction ' + direction.getName());
        let gameOverChecker = new GameOverChecker(this.gridData);
        let nextGridComputer = new NextGridComputer(direction, this.gridData);
        let nextGrid = nextGridComputer.getNextGrid();
        if(!gameOverChecker.isNextMovePossible()){
        //    alert("Game over. Please refresh the browser");
            this.inputHandler.stopEventListener();
            this.legendDisplay.innerHTML = 'Game over<br/>Refresh browser to play again';
            return;
        }
        if(this.gridData.equals(nextGrid)){
            console.log("This move isn't possible.");
            this.legendDisplay.innerHTML =
        'This move is not possible<b><br/>Try another move';
            return;
        }

        let newScoreComputer = new NewScoreComputer(this.gridData, nextGrid);
        console.log(this.gridData.toString());
        console.log("old score: "+this.score);
        this.score += newScoreComputer.getNewScore();
        this.gridData = nextGrid;
        console.log(this.gridData.toString());
        console.log("new score: "+this.score);
        this.legendDisplay.innerHTML = '';
        let newCellComputer = new NewCellComputer(this.gridData);
        let newCell = newCellComputer.getNewCell();
        this.gridData.setCell(newCell, newCellComputer.getNewValue());
        this._draw();
    }
}
