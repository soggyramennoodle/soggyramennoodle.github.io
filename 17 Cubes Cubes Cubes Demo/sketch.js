// Cubes Cubes Cubes - 3d basics + css centering
// Adeeb Rahman
// 11.18.2024
//

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotateY(frameCount);
  
  for (let i = 0; i < 360; i+=45) {
    push();
    rotateY(i);
    boxes(50);
    pop();
  }
  
}

function boxes(size) {
  let armAngle = map(angle, mouseX, width, 0, -25);
  if (size > 3) {
    rotateZ(armAngle);
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.8);
  }
  
}
