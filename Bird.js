class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");
    this.smokeimg=loadImage("smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x>10 && this.body.position>200){
var Position=[this.body.position.x,this.body.position.y];
this.trajectory.push(Position);

    }

    for (var i=0; i<this.trajectory.length;i++) {
image(this.smokeimg,this.trajectory[i][0],this.trajectory[i][1]);


    }
    

  }
}
