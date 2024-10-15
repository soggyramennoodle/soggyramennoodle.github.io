// Objects Demo 2 (compare objects to each other)
// Adeeb Rahman
// 10.15.2024

//random movement like floating


let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = 0; i < points.length; i++) {
    points[i].display();
    points[i].move();
  }
}

function mouseClicked() {
  points.push(new MiniPoint(mouseX, mouseY));
}

class MiniPoint {
  ///////////constructor//////////////
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c = color(random(0, 255), random(0, 255), random(0, 255));
    this.s = 20;
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.offset = 0.01;
    this.maxSpeed = 5;
  }
  //////////class functions/////////////////
  display() {
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.s);
  }

  move() {
    let xSpeed = map(noise(this.noiseX), 0, 1, -this.maxSpeed, this.maxSpeed);
    let ySpeed = map(noise(this.noiseY), 0, 1, -this.maxSpeed, this.maxSpeed);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noiseX += this.offset;
    this.noiseY += this.offset;
  }
}
