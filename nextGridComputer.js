// Computes the next grid based on old data
class NextGridComputer{
    constructor(move, grid){
        this.move = move;
        this.grid = grid;
    }

    /**
     * Returns the next grid after a move.
     * @return {GridData} nextGrid - the next grid.
     */
    getNextGrid(){
        var nextGrid = this.grid.copy();
        if(this.move.getDirection() == "UP") this._shiftUp(nextGrid.getData());
        else if(this.move.getDirection() == "DOWN") this._shiftDown(nextGrid.getData());
        else if(this.move.getDirection() == "LEFT") this._shiftLeft(nextGrid.getData());
        else if(this.move.getDirection() == "RIGHT") this._shiftRight(nextGrid.getData());
        return nextGrid;
    }

    // Spawns a new number at a random place on board
    // _getNewNumber(board){
    //   var randRow = Math.floor((Math.random() * board.length) + 1);
    //   var randCol = Math.floor((Math.random() * board[0].length) + 1);
    //
    //   var randNum = 2 * Math.floor((Math.random() * 2) + 1);
    //
    //   while(board[randRow][randCol] != 0){
    //     randRow = Math.floor((Math.random() * board.length) + 1);
    //     randCol = Math.floor((Math.random() * board[0].length) + 1);
    //   }
    //
    //   board[randRow][randCol] = randNum;
    // }

    // Shifts board data up
    _shiftUp(board){
        var i = undefined;
        for(var col = 0; col < board[0].length; col++){
            for(var row = 0; row < board.length - 1; row++){
                if(board[row][col] != 0){
                    i = row + 1;
                    while(i < board.length){
                        if(board[row][col] == board[i][col]){
                            board[row][col] = 2 * board[row][col];
                            board[i][col] = 0;
                            break;
                        }else if(board[i][col] != 0) break;
                        else i++;
                    }
                    i = undefined;
                }
            }

            for(var row = 1; row < board.length; row++){
                if(board[row][col] != 0 && board[row-1][col] == 0){
                    i = row;
                    while(i > 0 && board[i-1][col] == 0){
                        board[i-1][col] = board[i][col];
                        board[i][col] = 0;
                        i--;
                    }
                    i = undefined;
                }
            }
        }
    }

    // Shifts board data down
    _shiftDown(board){
        var i = undefined;
        for(var col = 0; col < board[0].length; col++){
            for(var row = board.length - 1; row > 0; row--){
                if(board[row][col] != 0){
                    i = row - 1;
                    while(i >= 0){
                        if(board[row][col] == board[i][col]){
                            board[row][col] = 2 * board[row][col];
                            board[i][col] = 0;
                            break;
                        }else if(board[i][col] != 0) break;
                        else i--;
                    }
                    i = undefined;
                }
            }

            for(var row = board.length - 2; row >= 0; row--){
                if(board[row][col] != 0 && board[row+1][col] == 0){
                    i = row;
                    while(i < board.length - 1 && board[i+1][col] == 0){
                        board[i+1][col] = board[i][col];
                        board[i][col] = 0;
                        i++;
                    }
                    i = undefined;
                }
            }
        }
    }

    // Shifts board data left
    _shiftLeft(board){
        var i = undefined;
        for(var row = 0; row < board.length; row++){
            for(var col = 0; col < board[row].length - 1; col++){
                if(board[row][col] != 0){
                    i = col + 1;
                    while(i < board[row].length){
                        if(board[row][col] == board[row][i]){
                            board[row][col] = 2 * board[row][col];
                            board[row][i] = 0;
                            break;
                        }else if(board[i][col] != 0) break;
                        else i++;
                    }
                    i = undefined;
                }
            }
            for(var col = 1; col < board[row].length; col++){
                if(board[row][col] != 0 && board[row][col-1] == 0){
                    i = col;
                    while(col >= 0 && board[row][i-1] == 0){
                        board[row][i-1] = board[row][i];
                        board[row][i] = 0;
                        i--;
                    }
                    i = undefined;
                }
            }
        }
    }

    // Handles shifting board right
    _shiftRight(board){
        var i = undefined;
        for(var row = 0; row < board.length; row++){
            for(var col = board[row].length - 1; col > 0; col--){
                if(board[row][col] != 0){
                    i = col - 1;
                    while(i >= 0){
                        if(board[row][col] == board[row][i]){
                            board[row][col] = 2 * board[row][col];
                            board[row][i] = 0;
                            break;
                        }else if(board[row][i] != 0) break;
                        else i--;
                    }
                    i = undefined;
                }
            }

            for(var col = board[row].length - 2; col >= 0; col--){
                if(board[row][col] != 0 && board[row][col+1] == 0){
                    i = col;
                    while(col < board[row].length && board[row][i+1] == 0){
                        board[row][i+1] = board[row][i];
                        board[row][i] = 0;
                        i++;
                    }
                    i = undefined;
                }
            }
        }
    }
}
