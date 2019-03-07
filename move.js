// Represents a move of the game
class Move {

    constructor() {
        // direction - string; initializes with empty string by default
        //if (direction === undefined) { direction = ""; }
        // valid directions: "UP", "DOWN", "LEFT", "RIGHT"
        this.direction = new Direction("UP", "ArrowUp");
        console.log(this.direction)
    }

    // Mutators
    setDirection(newDirection) {
        console.log(this.direction)
        for(var i = 0; i < this.direction.getAll().length; i++){
            // if (keyCode == this.direction.getAll()){
            //     this.callback(direction);
            // }
            console.log(this.direction.getAll())
        }
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
        return this.toString() == otherMove.toString();
    }

}
// End Move.js
