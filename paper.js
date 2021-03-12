class Paper extends BaseClass{
    constructor(x,y)
    super(x,y,40,40)
    this.body = loadImage("paper.png")

    display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}