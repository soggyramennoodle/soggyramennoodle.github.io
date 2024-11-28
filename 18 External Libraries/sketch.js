// External Libraries + CSS Centering
// Adeeb Rahman
// 11.22.2024
//

let music, bounceSound;
let started = false;
let pos; let vel;
let totalBounces = 0;


function preload() {
  music = loadSound('assets/background.mp3');
  bounceSound = loadSound('assets/bounceSound.wav');
}

function setup() {
  createCanvas(700, 500);
  textSize(30);
  textAlign(CENTER);

  pos = createVector(width/2, height/2);
  vel = createVector(5, 3); //(speed of x, speed of y)


  if (localStorage.getItem('bounce') === null) {
    localStorage.setItem('bounce', 0);
  }
  else {
    totalBounces = int(localStorage.getItem('bounce'));
  }
}


function draw() {
  background(200);
  if (started === false) {
    text("Click to Begin", width/2, height/2);
    if (mouseIsPressed) {
      started = true;
      music.setVolume(0.1);
      music.loop();
    }
  }
  else {
    text(totalBounces, width/2, height/2);
    updateBall();
  }
}


function updateBall() {
  pos.add(vel);
  bounceSound.setVolume(100);
  if (pos.x < 0 || pos.x > width) {
    totalBounces ++;
    bounceSound.play();
    localStorage.setItem('bounce', totalBounces);
    vel.x *= -1;
  }
  if (pos.y < 0 || pos.y > height) {
    totalBounces ++;
    bounceSound.play();
    localStorage.setItem('bounce', totalBounces);
    vel.y *= -1;
  }
  circle(pos.x, pos.y, 20);
}