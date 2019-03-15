//class that listens to keyboard inputs
class InputHandler {
    //parameter is the callback function to take in string
    //callback is a function that takes in a string -> void
    constructor(callback) {
      this.callback = callback;
      const direction = new Direction();
      const keyDown = this._keyDown.bind(this);
      window.addEventListener('keydown', keyDown);
    }

    _keyDown(event){
      console.log('triggered');
     const keyCode = event.key;
     console.log(this.callback)
    // this.callback(keyCode);
      // for(int i = 0; i < direction.getAll().length; i++ ){
      //     if (keycode == i.getAssociatedKeycode){
                    // this.callback(i.getAssociatedDirection)
                }
      // }


    }
}
