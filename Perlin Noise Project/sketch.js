// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectTime = 5;
let rectInterval = 0.01;
let rectWidth = 2; //width of rectangle

let highestY = 0;
let rectX = 0;



function setup() {
  createCanvas(800, 800);
  frameRate(15);
  background(220);
  generateTerrain();
}

function draw() {
  rectTime = 5; //keeps drawing uniform and stable
}

function generateTerrain() {

  for (let x = 0; x <= width; x += rectWidth) {
    noFill();
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0, 1, 50, 700)
    rect(x, height, rectWidth, -rectHeight);
    rectTime += rectInterval; //generates terrain

    if (highestY < rectHeight) {
      highestY = abs(rectHeight);
      rectX = x; //finds highest point on mountain
    }

  }

  drawFlag(); 
}

function keyPressed() { //changes terrain size based on input
  if (keyCode === RIGHT_ARROW) {
    rectWidth += 0.2;
    background(220);
    generateTerrain();

    if (rectWidth < 1) {
      rectWidth = 1;
    }
  }

  if (keyCode === LEFT_ARROW) {
    rectWidth -= 0.2;
    background(220);
    generateTerrain();

    if (rectWidth < 1) {
      rectWidth = 1;
    }
  }
}

function drawFlag() { //draws flag
  fill(255, 0, 0);
  rectMode
  rect(rectX, height - highestY, 7, 20);
  
}
