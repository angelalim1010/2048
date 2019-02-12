// Represents a move of the game
class Move {

    constructor() {
        // direction - string; initializes with empty string by default
        // valid directions: "UP", "DOWN", "LEFT", "RIGHT"
        this.direction = "";
    }

    // Mutators
    setDirection(newDirection) { return this.direction = newDirection; }

    // Accessors
    getDirection() { return this.direction; }

}
// End Move.js