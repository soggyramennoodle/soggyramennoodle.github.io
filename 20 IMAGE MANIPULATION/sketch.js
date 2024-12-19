// Image Manipulation 
// Adeeb Rahman
// 12.11.2024
//

let pilot; //p.5 image

function preload() {
  pilot = loadImage('assets/aviator.png');
}

function setup() {
  createCanvas(pilot.width, pilot.height);
}

function drawCharacter(x, y, avg) {
  fill(0, 255, 0);
  if (avg > 200) {
    text("#", x, y);
  }
  else if (avg > 140) {
    text("0", x, y);
  }
  else if (avg > 90) {
    text('1', x, y);
  }
  else if (avg > 40) {
    text('.', x, y);
  }
}

function draw() {
  image(pilot, 0,0);
  loadPixels(); //allows us to access pixels on Canvas, by creating a pixels array
  background(0);

  for (let x = 0; x < width; x += 10) {
    for (y = 0; y < height; y +=10) {
      let location = (x + y*pilot.width)*4; // allows for x, y pixel positions, like coordinates
      let avg = avgPixel(location);
      drawCharacter(x, y, avg);
    }
  }



  // for (let i = 0; i < pixels.length; i += 4) {}
  //   // // darken filter
  //   // let boost = map(mouseX, 0, width, -200, 200);
  //   // let r = min(pixels[i] -boost, 50);
  //   // let g = min(pixels[i+1] -boost, 50);
  //   // let b = min(pixels[i+2] -boost, 50);
  //   // setPixelColor(i, r, g, b);

  //   // // lighten filter
  //   // let boost = map(mouseX, 0, width, 0, 200);
  //   // let r = min(pixels[i] + boost, 255);
  //   // let g = min(pixels[i+1] + boost, 255);
  //   // let b = min(pixels[i+2] + boost, 255);
  //   // setPixelColor(i, r, g, b);
    
  //   // //greyscale filter
  //   // let a = avgPixel(i);
  //   // setPixelColor(i, a, a, a);
  // }
}

function setPixelColor(pos, r, g, b) {
  //set a pixel (starting at pos) to a new RGB value

  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;


}

function avgPixel(pos) {
  //get average intensity at pos in pixel
  let sum = pixels[pos] + pixels[pos + 1] + pixels[pos + 2];
  return sum/3
}