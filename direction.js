class Direction{
    constructor(name, keyCode) {
        this.name = name;
        this.keyCode = keyCode;
    }

    static Direction UP = new Direction("UP", "ArrowUp");
    static Direction DOWN = new Direction("DOWN", "ArrowDown");
    static Direction LEFT = new Direction("LEFT", "ArrowLeft");
    static Direction RIGHT = new Direction("RIGHT", "ArrowRight");

    static getAll() {
        return [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]
    }
    
    getAssociatedKeycode() {
        return this.keyCode
    }
    
    getName() {
        return this.name;
    }
}
