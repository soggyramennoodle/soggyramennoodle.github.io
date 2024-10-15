// Create Your First Class Challenge
// Adeeb Rahman
// 10.15.2024
//

let racer1;
let racer2;
let racer3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  racer1 = new Racer(height/3, color(random(0, 255), random(0, 255), random(0, 255)));
  racer2 = new Racer(height*2/3, color(random(0, 255), random(0, 255), random(0, 255)));
  racer3 = new Racer(height*3/4, color(random(0, 255), random(0, 255), random(0, 255)));
}

function draw() {
  background(0);
  racer1.move();
  racer1.display();

  racer2.move();
  racer2.display();

  racer3.move();
  racer3.display();
}

class Racer {
  ///////////////constructor/////////////////
  constructor(yPosition, color) {
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = random(3, 15);
    this.color = color;
  }
  ///////////class methods/////////////
  move() {
    this.xPosition += this.xSpeed;
    if (this.xPosition > width) {
      this.xPosition = 0;
    }
  }
  display() {
    fill(this.color);
    noStroke();
    circle(this.xPosition, this.yPosition, 20);
  }
}


