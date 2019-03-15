//class that listens to keyboard inputs
class InputHandler {
  //parameter is the callback function to take in string
  //callback is a function that takes in a string -> void
  constructor(callback) {
    this.callback = callback;
    console.log(Direction.getAll());
    const keyDown = this._keyDown.bind(this);
    window.addEventListener('keydown', keyDown);
  }

  _keyDown(event) {
    const keyCode = event.key;
    let allDirections = Direction.getAll();
    for (var i = 0; i < allDirections.length; i++ ) {
      let direction = allDirections[i];
      if (this.keycode == direction.getAssociatedKeycode()) {
        this.callback(direction);
      }
    }
  }
}
