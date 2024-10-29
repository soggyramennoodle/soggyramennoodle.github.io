//Puzzle Game
//Adeeb Rahman
//10.29.2024



let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let grid = [[0,0,0,255,0],
                [0,0,0,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(500, 300);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  checkWin();
}



function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if (keyIsDown(SHIFT)) {
    flip(currentCol, currentRow);
  }
  else{
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (grid[row][col] === 0) {
        grid[row][col] = 255;
      } 
      else {
        grid[row][col] = 0;
      } 
    }
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(grid[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function checkWin() {
  let referenceSquare = grid[0][0];
  let winState = false;
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      if (grid[y][x] === referenceSquare) {
        winState = true;
      }
    }
  }
  if (winState === true) {
    fill(255, 0, 0);
    print("you win");
    textSize(40);
    textAlign(CENTER, CENTER);
    text("You Win", width/2, height/-2);
    noLoop();
  }
}


