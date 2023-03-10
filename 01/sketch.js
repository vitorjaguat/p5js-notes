function setup() {
  // put setup code here
  createCanvas(400, 200);

  frameRate(30);
}

let y = 0;

function draw() {
  background(180);
  y -= 0.5;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

// let x = 1;

// function draw() {
//   // put drawing code here
//   stroke(0);
//   line(30, 30, 170, 30);
//   stroke(126);
//   line(170, 30, 170, 170);
//   stroke(255);
//   line(170, 170, 30, 170);
//   line(30, 170, 30, 30);
//   strokeWeight(x);
//   if (x < 40) {
//     x++;
//   }
// }
