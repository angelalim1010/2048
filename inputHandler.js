//class that listens to keyboard inputs
class InputHandler{
    constructor(){
      const keyDown = this._keyDown.bind(this);
      window.addEventListener('keydown', keyDown);

    }


    _keyDown(event){
      const keyCode = event.key;

      switch(keyCode){
        case "ArrowUp":
          this.move = new Move("UP");
          console.log("the up arrow was pressed");
          break;
        case "ArrowDown":
          this.move = new Move("DOWN");
          console.log("the down arrow was pressed");
          break;
        case "ArrowRight":
          this.move = new Move("RIGHT");
          console.log("the right arrow was pressed");
        break;
        case "ArrowLeft":
          this.move = new Move("LEFT");
          console.log("the left arrow was pressed");
        break;
      };
    }
}
