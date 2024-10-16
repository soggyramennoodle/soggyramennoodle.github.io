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
    points[i].connectPoints(points);
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

  connectPoints(pointArray) {
    stroke(this.c);
    for (let i = 0; i < pointArray.length; i++) {
      if (this !== pointArray[i]) {
        if (dist(this.x, this.y, pointArray[i].getX(), pointArray[i].getY()) < 300) {
          line(this.x, this.y, pointArray[i].getX(), pointArray[i].getY());
        }
      }
    }
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  move() {
    let xSpeed = map(noise(this.noiseX), 0, 1, -this.maxSpeed, this.maxSpeed);
    let ySpeed = map(noise(this.noiseY), 0, 1, -this.maxSpeed, this.maxSpeed);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noiseX += this.offset;
    this.noiseY += this.offset;

    //makes dots stay in frame, continues from other side like a loopback
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }
  }
}
