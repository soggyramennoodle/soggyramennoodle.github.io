// Interactive Scene
// Adeeb Rahaman
// 9.16.2024
//
// An interactive scene controlled with user input.

let currentBack = 0; //handles background
let characterX;
let characterY;
let characterColorR;
let characterColorG;
let characterColorB;
let backgroundR;
let backgroundG;
let backgroundB;


function setup() {
  createCanvas(700, 500);
  characterX = width/2;
  characterY = height/2;
  characterColorR = 255;
  characterColorG = 255;
  characterColorB = 255;
  backgroundR = 136;
  backgroundG = 206;
  backgroundB = 235;

}

function draw() {

  if (keyIsDown(17)) { //changes background with ctrl
    currentBack++;
  }

  if (currentBack > 4) {
    currentBack = 0;
  }
  
  
  backgroundChange();
  characterMovement();
  drawBackground();
  drawCharacter();
  textSize(26);
  text('adeeb', 610, 480);
  colorChange();
  
  }


function drawBackground() { //draws everything but character
  
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

function drawCharacter() { //draws character

  //body
  strokeWeight(0.4);
  fill(characterColorR, characterColorB, characterColorB);
  rect(characterX, characterY, 75);
  
  //eyes
  fill(0);
  circle(characterX + 15 , characterY + 20, 15); //L
  circle(characterX + 60, characterY + 20, 15); //R
  strokeWeight(3);
  line(characterX + 15, characterY + 50 , characterX  + 60, characterY + 50);

}

function characterMovement() { //handles character movement
  
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

function colorChange() { //character color change
  if (keyIsDown(77)) { //m
    characterColorR = random(0, 255);
    characterColorG = random(0, 255);
    characterColorB = random(0, 255);
  }
  if (keyIsDown(78)) { //n
    characterColorR = charactercolorG = characterColorB = 255;
  }
}

function backgroundChange() { //background color change
  if (currentBack === 0) {
    background(136, 206, 235);
  }
  else if (currentBack === 1) {
    backgroundR = random(0, 255);
    backgroundG = random(0, 255);
    backgroundB = random(0, 255);
    randomSeed(67);
    background(backgroundR, backgroundG, backgroundB);
  }

  else if (currentBack === 2) {
    backgroundR = random(0, 255);
    backgroundG = random(0, 255);
    backgroundB = random(0, 255);
    randomSeed(9);
    background(backgroundR, backgroundG, backgroundB);
  }

  else if (currentBack === 3) {
    backgroundR = random(0, 255);
    backgroundG = random(0, 255);
    backgroundB = random(0, 255);
    randomSeed(7);
    background(backgroundR, backgroundG, backgroundB);
  }
}




