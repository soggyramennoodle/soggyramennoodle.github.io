// 2D Array Demo
// Adeeb Rahman
// 10.28.2024
//

let grid = [[0, 255, 0, 255, 0],
            [255, 0, 255, 0, 255],
            [0, 255, 0, 255, 0]];

const NUM_ROWS = 3;
const NUM_COLS = 5;

let rectWidth, rectHeight;

function setup() {
  createCanvas(500, 300);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
}

function draw() {
  noStroke();
  background(220);
  renderGrid();
 
}

function renderGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(grid[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function getArrayX() {
  return int(mouseX/rectWidth);
}

function getArrayY() {
  return int(mouseY/rectHeight);
}

function mousePressed() {
  let x = getArrayX();
  let y = getArrayY();
  
  // Check if the clicked square is within bounds
  if (x >= 0 && x < NUM_COLS && y >= 0 && y < NUM_ROWS) {
    // Flip the color of the clicked square
    if (grid[y][x] === 0) {
      grid[y][x] = 255;
    } 
    else {
      grid[y][x] = 0;
    }
    
   
    flipNeighbor(y - 1, x); 
    flipNeighbor(y + 1, x);
    flipNeighbor(y, x - 1); 
    flipNeighbor(y, x + 1); 
  }
}

// Helper function to flip color of a specific cell if it's in bounds
function flipNeighbor(y, x) {
  // Check bounds to avoid errors
  if (y >= 0 && y < NUM_ROWS && x >= 0 && x < NUM_COLS) {
    if (grid[y][x] === 0) {
      grid[y][x] = 255;
    } else {
      grid[y][x] = 0;
    }
  }
}


