// Drawing with Loops
// Adeeb Rahman
// 9.19.2024
//
// 


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  myBackground();
  myForeground();
  
  //this is where the screen draws the frame
}

function myBackground() {
  //loops to create gradient background
  background(220);
  let rectHeight = 1;
  for(let y = height; y >= 0; y -=rectHeight) {
    let value = map(y, 0, height, 0, 255);
    fill(value, 0, 255- value);
    noStroke();
    rect(0, y, width, rectHeight);
  }
}

function myForeground() {
  //loops to create shapes using FOR/WHILE loops
  for (let x = 40; x < width - 40; x +=40) {
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x, height/2);
  }

  //create stars x100
  let starCount = 0;
  randomSeed(4);
  while(starCount<100) {
    fill(255, 0, 0);
    let x = random(0, width); let y = random(0, height);
    circle(x, y, 10);
    starCount+=1;
  }
}