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
    }

    // Accessors
    getDirection() { return this.direction; }

    // toString: returns string version of this.direction
    // (this.direction is already a string, so does same thing as getDirection as of right now)
    toString() {
        return this.direction.toString();
    }

    // equals: returns whether toString() of current Move and comparable Move are equal
    equals(otherMove) {
        return toString() == otherMove.toString();
    }

}
// End Move.js