class Direction{
    constructor(direction, key) {
        if (direction === undefined) { direction = ""; }
        this.direction = direction;
        if (key === undefined) { key = ""; }
        this.key = key;
    }
    static UP = new Direction("UP", "ArrowUp");
    static DOWN = new Direction("DOWN", "ArrowDown")
    static LEFT = new Direction("LEFT", "ArrowLeft")
    static RIGHT = new Direction("RIGHT", "ArrowRight")
    getAll(){
        return [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]
    }
}
