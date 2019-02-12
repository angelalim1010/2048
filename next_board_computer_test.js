class NextBoardComputerTest extends Test{
    constructor(){
        super();
    }

    getNextBoard(){
        const up = new Move("UP");
        this.assertEquals("UP", up.getDirection());

        const down = new Move("DOWN");
        this.assertEquals("DOWN", down.getDirection());

        const left = new Move("LEFT");
        this.assertEquals("LEFT", left.getDirection());

        const right = new Move("RIGHT");
        this.assertEquals("RIGHT", right.getDirection());
    }
}

new NextBoardComputerTest().runAll();