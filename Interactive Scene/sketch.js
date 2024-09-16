// Interactive Scene
// Adeeb Rahaman
// 9.16.2024
//
// An interactive scene controlled with user input.

let currentBack = 10; //handles background


function setup() {
  createCanvas(700, 500);
}

function draw() {
  if (currentBack === 0) {
    background(220);
  }
  else {
    background(0);
  }
  drawBackground();
}


function drawBackground() {

  //sky
  fill(135, 206, 235);
  rect(0, 0, width*height); 
  
  //ground
  fill(100, 200, 125);
  rect(0, height*2/3, width, height/3);
  strokeWeight(0.5);

  //trees
  fill(1, 68, 33);
  triangle(200, height/3, 150, height*2/3, 250, height*2/3);
  triangle(200, height/3, 150, height*2/3, 250, height*2/3);
  
}