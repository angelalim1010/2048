class MoveTest extends Test{
    constructor(){
        super();
    }

    getDirection(){
        const move = new Move("UP");
        this.assertEquals("UP", move.getDirection());
    }

    getNextBoard(){
        var oldBoard = new GridData();
        var board = [
            [2, 0, 2, 2],
            [0, 4, 2, 2],
            [8, 4, 2, 0],
            [0, 0, 0, 0]
        ]
        oldBoard.setData(board);

        var newBoard = new Move("UP");
        const boardUp = newBoard.getNextBoard(oldBoard.getData());
        const expectedBoard = [
            [2, 8, 4, 4],
            [8, 0, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        this.assertEquals(expectedBoard, boardUp);
    }
}

new MoveTest().runAll();