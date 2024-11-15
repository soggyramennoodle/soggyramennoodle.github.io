// Balloon Tree Project
// Adeeb Rahman
// 11.13.2024
//

let scale = 15;


function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
  
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
    drawLine(x1, y1, x2, y2, depth);
    
    //draw balloons
    noStroke();
    if (depth < 5) {
      drawLeaf(x2, y2, random(depth*random(6,10)));
    }

    //draw tree branches
    stroke(50);
    drawTree(x2, y2, angle-30, depth-1);
    drawTree(x2, y2, angle+0, depth-1);
    drawTree(x2, y2, angle+30, depth-1);
  }
}

function drawLeaf(x, y, depth) {
  
  fill(random(255), random(255), random(255));
  circle(x, y, depth);
}
