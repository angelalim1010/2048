//class that listens to keyboard inputs
class InputHandler {
    //parameter is the callback function to take in move object
    constructor(callback) {
      this.callback = callback;
      const keyDown = this._keyDown.bind(this);
      window.addEventListener('keydown', keyDown);
    }

    _keyDown(event){
      console.log('triggered');
     const keyCode = event.key;
      switch(keyCode){
        case "ArrowUp":
        //will set the direction of move to up
          this.callback("UP");
          console.log("the up arrow was pressed");
          break;
        case "ArrowDown":
        //will set the direction of move to down
          this.callback("DOWN");
          console.log("the down arrow was pressed");
          break;
        case "ArrowRight":
        //will set the direction of move to right
          this.callback("LEFT");
          console.log("the right arrow was pressed");
        break;
        case "ArrowLeft":
        //will set the direction of move to left
          this.callback("RIGHT");
          console.log("the left arrow was pressed");
        break;
      };
    }
}
