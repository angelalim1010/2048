class MoveBoard{

    constructor(direction, board){
        this.direction = direction;
        this.board = board;
    }

    getNextBoard(){
        var nextBoard = this._copyBoard(this.board);
        if(this.direction == "UP") this._shiftUp(nextBoard);
        else if(this.direction == "DOWN") this._shiftDown(nextBoard);
        else if(this.direction == "LEFT") this._shiftLeft(nextBoard);
        else if(this.direction == "RIGHT") this._shiftRight(nextBoard);
        return nextBoard;
    }

    _copyBoard(board){
        var newBoard = [];
        for(var row = 0; row < board.length; row++){
            newBoard.push([]);
            for(var col = 0; col < board[row].length; col++){
                newBoard[row].push(board[row][col]);
            }
        }
        return newBoard;
    }

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

    _shiftLeft(board){
        var i = undefined;
        for(var row = 0; row < board.length; row++){
            for(var col = 0; col < board[row].length - 1; col++){
                if(board[row][col] != 0){
                    i = col + 1;
                    while(i < board[row].length){
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

    _shiftRight(board){
        var i = undefined;
        for(var row = 0; row < board.length; row++){
            for(var col = board[row].length - 1; col > 0; col--){
                if(board[row][col] != 0){
                    i = col - 1;
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