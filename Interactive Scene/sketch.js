// Interactive Scene
// Adeeb Rahaman
// 9.16.2024
//
// An interactive scene controlled with user input.

let currentBack = 0; //handles background
let movementConstant = 0;


function setup() {
  createCanvas(700, 500);
}

function draw() {
  if (currentBack === 0) {
    background(136, 206, 235);
  }
  else {
    background(0);
  }
  drawBackground();
  drawCharacter();
}


function drawBackground() {
  
  //ground
  fill(100, 200, 125);
  strokeWeight(0.5);
  rect(0, height*2/3, width, height/3);

  //trees
  fill(1, 68, 33);
  strokeWeight(1.5);
  triangle(200, height/3, 150, height*2/3, 250, height*2/3);
  triangle(100, height/3, 50, height*2/3, 150, height*2/3);
  triangle(150, height/3, 100, height*2/3, 200, height*2/3);

  //sun
  fill(249, 215, 28);
  strokeWeight(0.7);
  circle(width*3/4, height/4, 100);
  
}

function drawCharacter() {

  //body
  strokeWeight(0.4);
  fill(255);
  rect(width/2, height/2, 75);
  
  //eyes
  fill(0);
  circle(width/2 + 15 , height/2 + 20, 15); //L
  circle(width/2 + 60, height/2 + 20, 15); //R
  strokeWeight(3);
  line(width/2 + 15, height/2 + 50 , width/2 + 60, height/2 + 50);
}