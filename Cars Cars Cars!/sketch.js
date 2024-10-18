// Cars Cars Cars
// Adeeb Rahman
// 10.18.2024



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
  fill(255);

  let lineDistance = 40;
  for (let i = 0; i < width; i++) {
    rect(0 + i*lineDistance, height/2, 20, 3);
  }
}

class Vehicle {
  ///////constructor////////
  constructor(x, y, type, color, direction, xSpeed) {
    this.x = x;
    this.y = y;
    this.color = (random(255), random(255), random(255));
    this.type = type;
    this.direction = direction;
    this.xSpeed = 0;
  }
}
