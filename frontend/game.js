class Game {
    constructor() {
        this.gridContainer = document.getElementById('grid-container');
        this.scoresContainer = document.getElementById('scores-container');
        this.highscoreContainer = document.getElementById('highscore-container');

        this.legendDisplay = new LegendDisplay();
        this.gridData = new GridData();
        this.inputHandler = new InputHandler(this._onMove.bind(this));
        this.gridDataInitializer = new GridDataInitializer(this.gridData);
        this.highscoreDisplay = new HighscoreDisplay();

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
        let highscoreDisplay = new HighscoreDisplay(this.score);
        this.highscoreContainer.innerHTML = highscoreDisplay.toHTML();
    }

    // Called when the user wants to move in a given direction.
    _onMove(direction) {
        console.log('User wants to move in direction ' + direction.getName());
        let gameOverChecker = new GameOverChecker(this.gridData);
        let nextGridComputer = new NextGridComputer(direction, this.gridData);
        let nextGrid = nextGridComputer.getNextGrid();
        if(!gameOverChecker.isNextMovePossible()){
            this.inputHandler.stopEventListener();
            this.legendDisplay.setGameOverMessage();
        }
        if(this.gridData.equals(nextGrid)){
            console.log("This move isn't possible.");
            this.legendDisplay.setMoveNotPossibleMessage();
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
