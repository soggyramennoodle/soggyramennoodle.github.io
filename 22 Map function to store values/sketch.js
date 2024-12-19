// Text Files and Map
// Adeeb Rahman
// 12.19.2024
// split(),    spread syntax

let grid, img, rows, cols, colorMap, textFile;

function preload() {
  textFile = loadStrings('assets/info.txt');
  img = loadStrings('assets/colorImage.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // processText();
  rows = img.length; cols = img[0].length;

  //now make 2d array
  grid = [];
  for (let i = 0; i < rows; i++) {
    grid.push([...img[i]]);
  }

  //now make map for colors
  colorMap = new Map([
    ['b', 'black'],
    ['w', 'white'],
    ['r', 'sienna'],
    ['l', 'peru'],
    ['p', color(150, 150, 255)],
  ]);
}

function draw() {
  background(220);
  renderGrid();
}

function processText() { //split()   and spread syntax

  print('SPLIT INTO WORDS');
  let splitWords = textFile[0].split(' ')
  print(splitWords);

  print('SPLIT INTO CHARACTERS');
  let splitLetters = textFile[1].split('');
  print(splitLetters);

  print('SPREAD into CHARACTERS');
  let spreadLetters =  [...textFile[2]];                            //uses [...] to dump into ...???
  print(spreadLetters);
  
}

function renderGrid() {
  //calculate grid size
  let rectWidth = width/cols;
  let rectHeight = height/rows;
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}