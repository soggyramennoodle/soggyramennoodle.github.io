// Drawing with Nested Loops
// Adeeb Rahman
// 10.9.2024

////////////////global variables////////////////
let gridSpacing = 25;

function setup() {
  createCanvas(800, 800);
  loopReview();
}

function loopReview() {
  //nested loop practice (x,y)
  for (let x = 0; x < 4; x++) { //x: 0, 1, 2, 3
    for (let y = 0; y < 4; y ++) { //y: 0, 1, 2, 3
      print(x, y);
    }
  }
}

//loopReview() prints (0, 0), (0, 1), (0, 2), (0, 3), then (1, 0), (1, 1), ...
//loopReview(): for every x value, y will go through its loop, then x will +1, and y will go through the loop again, and so on.

function draw() {
  background(220);
  renderGrid();
}

function renderGrid() {
  //use nested loops to create a grid of shapes
  for (let x = 0; x < width; x = x + gridSpacing) {
    for (let y = 0; y < height; y = y + gridSpacing) {
      let d = circleDistance(x , y, mouseX, mouseY);

      if (d>150) { //set fill color depending on mouse proximity
        fill(0);
      }
      else {
        fill(200, 50, 120);
      }
      circle(x, y, gridSpacing);

      fill(200); //display distance of each circle in relation to the mouse
      textAlign(CENTER);
      textSize(gridSpacing - 12);
      text(d, x, y);
    }
  }
}

function circleDistance(x1, y1, x2, y2) {
  //takes two points and uses pythagorean theorem to calculate distance between them
  let a = abs(x2-x1);
  let b = abs(y2-y1);
  let c = sqrt(pow(a, 2) + pow(b, 2));
  return round(c);
}
