class Direction{
    constructor(direction, keyCode) {
        //if (direction === undefined) { direction = ""; }
        this.direction = direction;
        //if (keyCode === undefined) { keyCode = ""; }
        this.keyCode = keyCode;
    }

    static UP = new Direction("UP", "ArrowUp");
    static DOWN = new Direction("DOWN", "ArrowDown");
    static LEFT = new Direction("LEFT", "ArrowLeft");
    static RIGHT = new Direction("RIGHT", "ArrowRight");
    static getAll(){
        return [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]
    }
    getAssociatedKeycode(){
        return this.keyCode
    }
    getAssociatedDirection(){
        return this.direction;
    }
}
