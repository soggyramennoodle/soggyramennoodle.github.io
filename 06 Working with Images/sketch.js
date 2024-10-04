// Working with images
// Adeeb Rahman
// 10.4.2024
//

let lionL, lionR;
let facingRight = true;
let pinImages = []; //empty array
let currentFrame = 0;

function preload() {
  //runs before setup (best for loading assets before program starts)

  lionL = loadImage('assets/lion-left.png');
  lionR = loadImage('assets/lion-right.png');
  for (i = 0; i<9; i++) {
    pinImages.push(loadImage('assets/pin-0' + i + '.png'));
  }
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(220);
  imageMode(CENTER);

  //pinwheel code
  image(pinImages[currentFrame], width/2, height/2);
  currentFrame++;
  if (currentFrame > 8) {
    currentFrame = 0;
  }


  updateDirection();
  if (facingRight) {
    image(lionR, mouseX, mouseY);
  }
  else {
    image(lionL, mouseX, mouseY);
  }
}

function updateDirection() {
  //look at mouse movement and update facing right
  if (mouseX > pmouseX) {
    facingRight = true;
  }
  else if (mouseX < pmouseX) {
    facingRight = false;
  }
}