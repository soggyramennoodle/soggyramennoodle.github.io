// Nested Loops Drawing Challenge
// Adeeb Rahman
// 10.9.2024
//

diameter = 30;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  drawCircles();
  circle(mouseX, mouseY, 15);
}

function drawCircles() {
  for (let x = 0; x < width; x = x + 2*diameter) {
    circle(x , 0, diameter);
    line(x, 0, mouseX, mouseY);
  }
  for (let y = 0; y < height; y = y + 2*diameter) {
    circle(0, y, diameter);
    line(0, y, mouseX, mouseY);
  }
  for (let x = 0; x < width; x += 2*diameter) {
    circle(x, height, diameter);
    line(x, height, mouseX, mouseY);
  }
  for (let y = 0; y < height; y += 2*diameter) {
    circle(width, y, diameter);
    line(width, y, mouseX, mouseY);
  }
}

function renderLines() {

}
