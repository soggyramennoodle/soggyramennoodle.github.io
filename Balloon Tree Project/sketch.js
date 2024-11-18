// Balloon Tree Project
// Adeeb Rahman
// 11.13.2024
//

let scale = 15;
let seed;
let userLeafDepth = 5; //depth for tree's leaves tracked here


function setup() {
  createCanvas(500, 500);
  background(220);
  seed = 50;
}

function draw() {
  background(220);
  randomSeed(seed);
  drawTree(width/2, height*0.9, 90, 6);
}


function drawLine( x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}


function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get shorter based on depth
    strokeWeight(map(depth, 1, 5, 1, 3.5)); //maps stroke to make it bigger near trunk
    drawLine(x1, y1, x2, y2, depth);
    stroke(50); //color

    //draw balloons
    if (depth < userLeafDepth) {
      drawLeaf(x2, y2, depth); //if depth is less than 5, draw leaves. this is changed later on.
    }

    //control branch angle based on mouse
    let branchAngle = map(mouseX, 0, width, 10, 60); //maps branch angles to mouse for changing angles

    //draw tree branches
    drawTree(x2, y2, angle - branchAngle, depth-1);
    drawTree(x2, y2, angle, depth-1);
    drawTree(x2, y2, angle + branchAngle, depth-1); //draws 3 branches
  }
}

function drawLeaf(x, y, depth) {
  let minSize = map(depth, 1, 5, 5, 50); //minimum size of leaves
  let maxSize = map(depth, 1, 5, 15, 60); //maximum size of leaves
  let size = random(minSize, maxSize); //chooses random size of those above
  fill(random(255), random(255), random(255));
  circle(x, y, size);
}

function keyPressed() {
  if (key === 'z') {
    if (userLeafDepth > 0) {
      userLeafDepth -= 1; //reduces depth by one, so leaves aren't drawn past a certain point
    }
  }
  else if (key === 'x') {
    if (userLeafDepth < 5) {
      userLeafDepth += 1; //increases depth, so leaves are drawn, until depth of 5, to keep requirements?
    }
  }
}