// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectTime = 5;
let rectInterval = 0.1;


function setup() {
  createCanvas(800, 800);
  frameRate(15);
  // keyPressed();
}

function draw() {
  background(220);
  keyPressed();
}

function generateTerrain() {
  let rectWidth = 20;
  for (let x = 0; x <= width; x += rectWidth) {
    noFill();
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0, 1, 50, 700)
    rect(x, height, rectWidth, -rectHeight);
    rectTime += rectInterval;
  }
}

function keyPressed() {
  if (key === 'a') {
    generateTerrain();
  }
}
