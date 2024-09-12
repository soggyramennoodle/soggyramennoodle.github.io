// User Interactions/Events
// Adeeb Rahman
// 9.12.2024
//
// 

let s = 15;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  print(mouseX, mouseY);

  fill(0);
  textSize(s);
  text(mouseX + ', ' + mouseY, mouseX, mouseY);

  fill(255, 0, 50);
  //circle(width*1/2, height*1/2, 100);

  
  fill(0, 255, 0);

  x = x+10;
  if (x>width) x = 0;

  rect(x, height/2, 60);

  fill(255, 0, 50);
  circle(width*1/2, height*1/2, 100);
}


