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
  constructor(y, type, direction, color) {
    this.type = type; //0 is car, 1 is truck
    this.color = color; //will be randomized above
    this.direction = direction; //0 is westbound, 1 is eastbound

    if (this.direction === 1) { //if eastbound, then start at left, otherwise start at right
      this.x = 0;
    }
    else {
      this.x = width;
    }

    this.y = y; 
    this.xSpeed = random(2, 5);

    if (this.direction === 0) { //if going westbound, turn xSpeed negative to go from eastbound to west
      this.xSpeed *= -1;
    }
  }

  update() {
    
  }

  move() {

  }

  display() {
    fill(this.color);
    
  }
}
