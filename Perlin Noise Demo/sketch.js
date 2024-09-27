// Perlin Noise Demo
// Adeeb Rahman
// 9.27.2024
//

//noise() vs random()

function setup() {
  createCanvas(800, 800);
  frameRate(2);
}

function draw() {
  background(220);
  line(width/2, 0, width/2, height);

  //random()
  randomCircle();

  //noise()
  
}

function randomCircle() {
  //draw circle, using random 
  //values for diameter (later, color)

  let cSize = random(10, 100);
  circle(width/4, height/2, cSize);
  textAlign(CENTER, CENTER);
  textSize(15);
  text(round(cSize), width/4, height/2);
}
