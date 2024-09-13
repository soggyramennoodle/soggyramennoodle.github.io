// Drawing Challenge
// Adeeb Rahman
// 9.13.2024
//
// user input with shapes demo

let rX = 50;
let rY = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //moving rectangle
  fill(150, 0, 100);
  rect(rX, rY, 150, 100);

  checkKeyPress();

  if (rY > height){
    rY = 0;
  }

}

function checkKeyPress() {
  if (keyIsDown(DOWN_ARROW)) {
    rY += 10;
  }

  if (keyIsDown(UP_ARROW)) {
    rY -= 10;
  }

  if (keyIsDown(LEFT_ARROW)) {
    rX -= 10;;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rX += 10;
  }
}
