// Recaman Sequence
// AdeebRahman
// 11.1.2024
//
//rules:
//starts at 0
//every step taken, will be 1 bigger than the last
//if it is possible to step backwards, do so, otherwise go forwards
//backwards steps only allowed if resulting location is positive and we've never been to that number

//start: 0, 1, 3, 6, 2, 7, 13, 20, 12, 21
//how it works: take last number of list, and subtract step number; if negative or already in list, add step number instead.

let stepAmount = 1;
let currentValue = 0;
let largest = 0;
let scaleAmount = 0;
let arcList = [];
let sequence = [];


function setup() {
  createCanvas(windowWidth, 600);
  stroke(255);
  noFill();
}

function draw() {
  background(0);
  translate(0, height/2);
  addToSequence();
  scaleAmount = lerp(scaleAmount, width/largest, 0.05);
  scale(scaleAmount);
  renderArcs();
}

function renderArcs() {
  for (let r of arcList) {
    r.display();
  }
}

function addToSequence() {
  let backwards = currentValue - stepAmount; //look one behind current value
  if (backwards > 0 && !sequence.includes(backwards)) {
    arcList.push(new rArc(currentValue, backwards, sequence.length%2));
    sequence.push(backwards);
    currentValue = backwards;
    stepAmount = stepAmount + 1;
  }
  else {
    let forwards = currentValue + stepAmount;
    arcList.push(new rArc(currentValue, forwards, sequence.length%2));
    sequence.push(forwards);
    currentValue = forwards;
    stepAmount++;
    if (currentValue > largest) {
      largest = currentValue;
    }
  }
}


class rArc {
  constructor(start, end, direction) {
    this.start = start;
    this.end = end;
    this.direction = direction;
  }
  display() {
    let diameter = abs(this.start - this.end);
    let x = (this.start + this.end) / 2;
    strokeWeight(0.5);
    if (this.direction === 0) {
      arc(x, 0, diameter, diameter, 0, PI);
    }
    else {
      arc(x, 0, diameter, diameter, PI, 0);
    }
  }
}
