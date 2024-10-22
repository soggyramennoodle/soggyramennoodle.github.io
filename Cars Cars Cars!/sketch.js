// Cars Cars Cars
// Adeeb Rahman
// 10.18.2024

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad() {
  fill(0);
  rect(0, height/4, width, height/2);
  fill(255, 255, 0);

  let lineDistance = 40;
  for (let i = 0; i < width; i++) {
    rect(0 + i*lineDistance, height/2, 20, 3);
  }
}

class Vehicle {
  ///////constructor////////
  constructor(y, type, direction) {
    this.type = type; //0 is car, 1 is truck
    this.color = (random(255), random(255), random(255)); //will be randomized above
    this.direction = direction; //0 is westbound, 1 is eastbound

    //if eastbound, then start at left, otherwise start at right
    if (this.direction === 1) {
      this.x = 0;
    }
    else {
      this.x = width;
    }

    this.y = y; 
    this.xSpeed = random(5, 20);

    //if going westbound, turn xSpeed negative to go from eastbound to west
    if (this.direction === 0) {
      this.xSpeed *= -1;
    }
  }

  display() {
    fill(this.color);
    ///car
    if (this.type === 0) {
      rect(this.x, this.y, 60, 25);
    }
    ///truck
    else if (this.type === 1) {
      rect(this.x, this.y, 50, 35);
    }
  }

  move() {
    //keep vehicles in frame
    this.x += this.xSpeed;
    if (this.x > width) {
      this.x -= width;
    }
    if (this.x < 0) {
      this.x += width;
    }
  }

  speedUp() {
    //if car going east, then add random value to speed
    if (this.direction === 1) {
      this.xSpeed += random(0, 15);
    }
    //if car going west, then add random value to speed (negative)
    else if (this.direction === 0) {
      this.xSpeed -= random(0, 15);
    }
  }

  speedDown() {
    //if car going east, then add negative to speed to slow down
    if (this.direction === 1) {
      this.xSpeed -= random(0, 15);
      if (this.xSpeed <= 0) {
        this.xSpeed = 5;
      }
    } 
    //if car going west, then add negative to slow down
    if (this.direction === 1) {
      this.xSpeed += random(0, 15);
      if (this.xSpeed >= 0) {
        this.xSpeed = -5;
      }
  }
  }