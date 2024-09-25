// State Variables
// Adeeb Rahman
// 9.25.2024
//
// 

//global vairables
let currentColor = 0; // 0, 1, 2
let myColor;
let circleSize = 50;
let growing = false; //2-state variable (t/f)

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(200, 120, 210);
}

function draw() {
  background(220);
  //circle code - fill using switch statement
  switch(currentColor) { //branches based off current color value
    case 0:
      fill(255, 0, 0);
      break;

    case 1:
      fill(myColor);
      break;
    
    case 2:
      fill(0, 0, 255);
      break;

  }


  if (frameCount % 30 === 0) { //true once every 10 frames
    currentColor += 1;
    if (currentColor>2) {
      currentColor = 0;
    }
  }

  //circle - modify size
  if (growing) circleSize += 2;
    else circleSize -= 2;
  

  //circle code - making circle
  circle(width/2, height/2, circleSize);
}

function keyPressed() {
  if (key === "a") {
    growing = !growing;
    }
  }
