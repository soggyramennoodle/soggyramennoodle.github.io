// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawBasicGrid(190); //20px per square

  //transformation one: TRANSLATION
  // push(); //makes a copy of current coord system, and uses that as active system
  // translate(120,120); //moves origin to point from (0,0), rather than transforming the shape itself
  // drawBasicGrid(100);
  // rectangleRed(40,20);
  // pop(); //reverts to previous coord system
  // rectangleBlue(40, 40);
  //add push()  pop()

+


  //transformation two: SCALE
  // push();
  // // rectMode(CORNER);
  // // rectangleRed(40, 0);
  
  // // //SCALE FACTORS
  // // //1 - no change  | <1, smaller  | >1, larger |
  // // let scaleFactor = 2.5;
  // // translate(100, 0);
  // // scale(scaleFactor);
  // // drawBasicGrid(100);
  // // rectangleBlue(0, 0);
  // rectMode(CENTER);
  // translate(40, 40);
  // let scaleFactor = map(mouseX, 0, mouseY, 0,4);
  // scale(scaleFactor);
  // drawBasicGrid(150);
  // rectangleRed(40, 40);

  // pop();



  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  //can use angleMode(DEGREES) if we want
  angleMode(DEGREES);
  // push()
  // rectangleRed(20, 20);
  // translate(200, 200);
  // drawBasicGrid(100);
  // rotate(frameCount%360);
  // // drawBasicGrid(100);
  // face(0, 0);
  // pop()


  //Combinations of Transformations
  // push();
  // // translate(100, 100);
  // scale(1);
  // rotate(45);
  // face(0, 0);
  // pop();


  //DRAWING CHALLENGE
  push();
  translate(200, 200);
  circle(0, 0, 150);
  rotate(frameCount);
  let numSpokes = map(mouseX, 0, width, 0,360)
  numSpokes = floor(numSpokes);
  for (let i = 0; i < numSpokes; i++) {
    line(0, 0, 75, 0);
    rotate(360/numSpokes);
    print(numSpokes, 360/numSpokes);
  }
  
  

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}