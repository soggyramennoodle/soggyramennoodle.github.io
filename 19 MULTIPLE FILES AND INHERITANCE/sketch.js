// Multiple Files and Inheritance
// Adeeb Rahman
// 12.6.2024
//
//you can only have one setup in the folder, so in sketch.js ONLY.

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new LineObject(random(width), random(height)));
    objects.push(new CircleObject(random(width), random(height)));
  }
}

function draw() {
  background(220);
  for (let o of objects) {
    o.move();
    o.display();
  }
}


