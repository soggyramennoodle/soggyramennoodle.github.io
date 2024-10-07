// Perlin Noise Project
//Adeeb Rahman
//10.6.2024


let rectTime = 5;
let rectInterval = 0.01; 
let rectWidth = 1;

let highestY = 0; 
let rectX = 0;
let avgHeight = 0;


function setup() {
  createCanvas(800, 800);
  frameRate(15);
}

function draw() {
  background(220);
  generateTerrain();
  
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
  fill(255, 0, 0)
  rect(rectX, height -highestY, 3, -20);
}
