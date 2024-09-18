// Interactive Scene
// Adeeb Rahaman
// 9.16.2024
//
// An interactive scene controlled with user input.

let currentBack = 0; //handles background
let characterX;
let characterY;
let characterColor;


function setup() {
  createCanvas(700, 500);
  characterX = width/2;
  characterY = height/2;
  characterColor = 255
}

function draw() {
  if (currentBack === 0) {
    background(136, 206, 235);
  }
  else {
    background(0);
  }
  characterMovement();
  drawBackground();
  drawCharacter();
  textSize(26);
  text('adeeb', 610, 480);
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
  fill(characterColor);
  rect(characterX, characterY, 75);
  
  //eyes
  fill(0);
  circle(characterX + 15 , characterY + 20, 15); //L
  circle(characterX + 60, characterY + 20, 15); //R
  strokeWeight(3);
  line(characterX + 15, characterY + 50 , characterX  + 60, characterY + 50);

}

function characterMovement() {
  
  //character controls
  if (keyIsDown(DOWN_ARROW)) {
    characterY += 10;
  }

  if (keyIsDown(UP_ARROW)) {
    characterY -= 10;
  }

  if (keyIsDown(LEFT_ARROW)) {
    characterX -= 10;;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    characterX += 10;
}

  //sets boundaries for character on screen
  if (characterY +75 > height*2/3) {
    characterY = height*2/3 - 75;
  }
  if (characterX + 75 > width) {
    characterX = width-75;
  }
  if (characterY < 0) {
    characterY = 0;
  }
  if (characterX < 0) {
    characterX = 0;
  }
}