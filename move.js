// Represents a move of the game
class Move {

    constructor(direction) {
        // direction - string; initializes with empty string by default
        // valid directions: "UP", "DOWN", "LEFT", "RIGHT"
        this.direction = direction;
    }

    // Mutators
    setDirection(newDirection) {
        this.direction = newDirection;
        console.log("Direction is set to " + this.direction);
        return this.direction;
    }

    // Accessors
    getDirection() { return this.direction; }

}
// End Move.js