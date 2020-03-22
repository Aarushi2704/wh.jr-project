class Hexagon extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/hexagon.png");
    
    this.trajectory = [];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    
    if(this.body.position.x > 200 && this.body.velocity.x > 10){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
  }
}
