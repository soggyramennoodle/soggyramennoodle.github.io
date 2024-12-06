

/////child class 2: circle object///////

class CircleObject extends AnimatedObject {
  constructor(x, y) {
    super(x, y); //already does this.x, this.y based off parent class
    this.size = random(20, 40); //override parent class size
  }

  //no move, since in parent class already

  display() {
    strokeWeight(2);
      
    let d = dist(mouseX, mouseY, this.x, this.y);

    if (d < this.size/2) {
      fill(255, 0, 0);
    }
    else {
      fill(255);
    }

    circle(this.x, this.y, this.size);
  }
}