// Perlin Noise Demo
// Adeeb Rahman
// 9.27.2024
//

//noise() vs random()

let circleTime = 5; 
let circleInterval = 0.03; //amount to push clock forward
let rectTime = 5;
let rectInterval = 1;

function setup() {
  createCanvas(800, 800);
  frameRate(15);
}

function draw() {
  background(220);
  line(width/2, 0, width/2, height);

  //random()
  randomCircle();

  //noise() //allows for a little more control to change values
  noiseCircle();

  staircase();
}

function noiseCircle() {
  //draw circle with noise() for random values
  let cSize = noise(circleTime); //ALWAYS outputs values from 0-1
  cSize = map(cSize, 0, 1, 10, 255); //need to map values to apply to entire range
  fill(cSize, cSize/2, 255-cSize);
  circle(width*3/4, height/2, cSize);
  text(round(cSize), width*3/4, height/2);
  circleTime += circleInterval; //changes circleTime to cause change in values
}

function staircase() {
  //loop to draw rectangles for terrain
  let rectWidth = 20;
  for (let x = 0; x<=width; x += rectWidth) {
    noFill();
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0, 1, 50, 500);
    rect(x, height, rectWidth, -rectHeight);
    rectTime += rectInterval;
  }
}


function randomCircle() {
  //draw circle, using random 
  //values for diameter (later, color)

  let cSize = random(10, 255);
  fill(cSize, cSize/4, 255-cSize);
  circle(width/4, height/2, cSize);
  textAlign(CENTER, CENTER);
  textSize(15);
  text(round(cSize), width/4, height/2);
}
