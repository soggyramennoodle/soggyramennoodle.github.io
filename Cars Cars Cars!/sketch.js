// Cars Cars Cars
// Adeeb Rahman
// 10.18.2024


//global variables
let eastbound = [];
let westbound = [];
let myLight;
let redFrames;
let trafficLightColor = "green";



function setup() {
  createCanvas(windowWidth, windowHeight);
  //create 20 cars in eastbound
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(height/2 + 20, height*3/4 - 40), int(random(0, 2)), 1));
  }
  //create 20 cars in westbound
  for (let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(random(height/4 + 20, height/2 - 40), int(random(0,2)), 0));
  }
  myLight = new Light(width/2, height/4/2);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  background(220);
  drawRoad();
  myLight.display();
  controlLight();

  //stop vehicles on red
  for (let i = 0; i < eastbound.length; i++) {
    if (trafficLightColor === "red") {
      eastbound[i].xSpeed = 0;
    }
    else {
      eastbound[i].action();
    }
  }

  for (let i = 0; i < westbound.length; i++) {
    if (trafficLightColor === "red") {
      westbound[i].xSpeed = 0;
    }
    else {
      westbound[i].action();
    }
  }
  

  //for every vehicle going east, apply .action()
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
  }
    
  //for every vehicle going west, apply .action()
  for (let i = 0; i < westbound.length; i++) {
    westbound[i].action();
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawRoad() {
  fill(0);
  rect(0, height/4, width, height/2);
  fill(255, 255, 0);

  let lineDistance = 40;
  for (let i = 0; i < width; i++) {
    rect(0 + i*lineDistance, height/2, 20, 3);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
  //adds car to westbound when shift click
  if (keyIsPressed && keyCode === SHIFT) {
    westbound.push(new Vehicle(random(height/4 + 20, height/2 - 40), int(random(0,2)), 0));
  }
  //adds car when just click
  else {
    eastbound.push(new Vehicle(random(height/2 + 20, height*3/4 - 40), int(random(0, 2)), 1));
  }
}

function controlLight() {
  //count 120 frames when red
  if (trafficLightColor === "red") {
    redFrames++;
    if (redFrames >= 120) {
      trafficLightColor = "green";
      redFrames = 0;
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    trafficLightColor = "red";
    redFrames = 0;
  }
}

/////////////////////////////CLASS//////////////////////////////////

class Light {
  //////////constructor//////////
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(255, 255, 0);
    rect(this.x, this.y, 60, 90);
    
    if (trafficLightColor === "green") {
      fill(30, 255, 0);
      circle(this.x + 30, this.y + 45, 40);
    }

    if (trafficLightColor === "red") {
      fill(255, 30, 0);
      circle(this.x + 30, this.y + 45, 40);
    }
  }

  lightSwitch() {
    //if light is green, switch to red
    if (trafficLightColor === "green") {
      trafficLightColor = "red";
    }
    //if light is red, switch to green
    if (trafficLightColor === "red") {
      trafficLightColor = "green";
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

class Vehicle {
  ///////constructor////////
  constructor(y, type, direction) {
    this.y = y; 
    this.xSpeed = random(3, 20);
    this.type = type; //0 is car, 1 is truck
    this.color = color((random(255), random(255), random(255)));

    //0 is westbound, 1 is eastbound. if eastbound, then start at left, otherwise start at right
    this.direction = direction;
    if (this.direction === 1) {
      this.x = 0;
    }
    else {
      this.x = width;
    }

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
    //keep vehicles in frame and control movement
    this.x += this.xSpeed;
    if (this.x > width) {
      this.x -= width;
    }
    if (this.x < 0) {
      this.x += width;
    }
  }

  speedUp() {
    //if car going east, then add random value to speed (positive)
    if (this.direction === 1) {
      this.xSpeed += random(0, 3);
      if (this.xSpeed > 15) {
        this.xSpeed = 15;
      }
    }
    //if car going west, then add random value to speed (negative)
    else if (this.direction === 0) {
      this.xSpeed -= random(0, 3);
      if (this.xSpeed < -15) {
        this.xSpeed = -15;
      }
    }
  }

  speedDown() {
    //if car going east, then add negative to speed to slow down
    if (this.direction === 1) {
      this.xSpeed -= random(0, 15);
      if (this.xSpeed <= 0) {
        this.xSpeed = 4;
      }
    } 
    //if car going west, then add negative to slow down
    if (this.direction === 0) {
      this.xSpeed += random(0, 15);
      if (this.xSpeed >= 0) {
        this.xSpeed = -4;
      }
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }
}