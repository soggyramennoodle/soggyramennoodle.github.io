// Cars Cars Cars
// Adeeb Rahman
// 10.18.2024

///////////////notes while coding:///////////
//right now, vehicle is getting faster and faster, and not slowing. 
//you need to add a cap to this.xSpeed!!
//might need to tweak xSpeed values to be smaller
/////////////////////////////////////////////////////

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create 20 cars in eastbound
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(height/4 + 20, height/2 - 40), int(random(0, 2)), 1));
  }

  //create 20 cars in westbound
  for (let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(random(height/2 + 20, height*3/4 - 40), int(random(0,2)), 0));
  }
  //the constant values were added to prevent overlap with middle or off-road vehicles
}

function draw() {
  background(220);
  drawRoad();

  //for every vehicle going east, apply .action()
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
  }

  //for every vehicle going west, apply .action()
  for (let i = 0; i < westbound.length; i++) {
    westbound[i].action();
  }
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

/////////////////////////////CLASS//////////////////////////////////

class Vehicle {

  ///////constructor////////
  constructor(y, type, direction) {

    //0 is a car, 1 is a truck
    this.type = type;
    this.color = color((random(255), random(255), random(255)));

    //0 is westbound, 1 is eastbound
    this.direction = direction;

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

  //.action() contains all functions for vehicles to do things
  action() {
    this.move();
    if (random(0, 1) < 0.01) {
      this.speedUp();
    }
    if (random(1) < 0.01) {
      this.speedDown();
    }
    if (random(1) < 0.01) {
      this.changeColor();
    }
    this.display();
  }

  //for vehicle appearance
  display() {
    fill(this.color);
    ///car
    if (this.type === 0) {
      ellipse(this.x, this.y, 60, 25);
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
    if (this.direction === 0) {
      this.xSpeed += random(0, 15);
      if (this.xSpeed >= 0) {
        this.xSpeed = -5;
      }
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }
}