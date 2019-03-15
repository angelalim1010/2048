//class that listens to keyboard inputs
class InputHandler {
    //parameter is the callback function to take in string
    //callback is a function that takes in a string -> void
    constructor(callback) {
      this.callback = callback;
     // this.direction = new Direction();
      console.log(this.direction.getAll());
      const keyDown = this._keyDown.bind(this);
      window.addEventListener('keydown', keyDown);
    }

    _keyDown(event){
        const keyCode = event.key;
        for(var i = 0; i < Direction.getAll().length; i++ ){
           if (this.keycode == i.getAssociatedKeycode){
                     this.callback(i.getAssociatedDirection)
                }
        }
    }
}
