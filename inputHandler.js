// Listens to keyboard events.
class InputHandler {
  
  // Parameter is a function that takes in a Direction and returns void.
  // This function will get called when a key corresponding to a direction is pressed.
  constructor(callback) {
    this.callback = callback;
    const keyDown = this._keyDown.bind(this);
    window.addEventListener('keydown', keyDown);
  }

  // Gets called whenever any key is pressed.
  _keyDown(event) {
    const keyCode = event.key;
    let allDirections = Direction.getAll();
    for (var i = 0; i < allDirections.length; i++ ) {
      let direction = allDirections[i];
      if (keyCode == direction.getAssociatedKeycode()) {
        this.callback(direction);
      }
    }
  }
}
