//class that listens to keyboard inputs
class InputHandler {
    //parameter is the callback function to take in string
    //callback is a function that takes in a string -> void
    constructor(callback) {
      this.callback = callback;
      //this.direction = new Direction();
      const keyDown = this._keyDown.bind(this);
      window.addEventListener('keydown', keyDown);
    }

    _keyDown(event){
      console.log('triggered');
     const keyCode = event.key;
     console.log(this.callback)
    // this.callback(keyCode);
      // switch(keyCode){
      //   case "ArrowUp":
      //     this.callback(new Move("UP"));
      //     console.log("the up arrow was pressed");
      //     break;
      //   case "ArrowDown":
      //     this.callback("DOWN");
      //     console.log("the down arrow was pressed");
      //     break;
      //   case "ArrowRight":
      //     this.callback("RIGHT");
      //     console.log("the right arrow was pressed");
      //   break;
      //   case "ArrowLeft":
      //     this.callback("LEFT");
      //     console.log("the left arrow was pressed");
      //   break;
      // };


    }
}
