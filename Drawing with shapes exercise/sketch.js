// Drawing with shapes
// Adeeb Rahman
// 9.13.2024
//

//let headSize = 0

let diameter = 100
let rectLength;
let centerX;
let centerY;
let eyeSize;
let mouthSizeHorizontal;

let headSize = diameter

function setup() {
  createCanvas(windowWidth, windowHeight); 
  rectLength = diameter; 
  centerX = width/2; 
  centerY = height/2;
  eyeSize = diameter/10;
  mouthSizeHorizontal = diameter/50;
}

function draw() {
  background(220);

  //head
  fill(0, 150, 100);
  circle(centerX, centerY, diameter);
  noStroke();

  //body
  rect(centerX - diameter/2, centerY, diameter, rectLength);

  //eyes
  fill(0);
  circle(centerX - 30, centerY - 10, eyeSize);
  circle(centerX + 30, centerY - 10, eyeSize);

  //mouth
  rect(centerX - diameter/4, centerY + diameter/8, diameter/2, mouthSizeHorizontal, 10);
  
  //leg whitespace
  fill(220);
  noStroke();
  rect(centerX-(3/8*diameter), centerY + diameter/2, rectLength-25);

}
