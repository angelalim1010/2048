class InputHandler{
      constructor(move){
        this.move = Move();
        document.addEventListener('keydown', event => {
        switch(event.key){
          case "ArrowUp":
            this.move.setDirection("UP";)
            console.log(this.move);
          break;
          case "ArrowDown":
            this.move.setDirection("DOWN";)
            console.log(this.move);
          break;
          case "ArrowRight":
            this.move.setDirection("RIGHT";)
            console.log(this.move);
          break;
          case "ArrowLeft":
            this.move.setDirection("LEFT";)
            console.log(this.move);
          break;
        };
      })
    }
}
