function setup() {
  createCanvas(400, 400);
  frameRate(30);
  background(500);
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  strokeWeight(random(10));
  stroke(random(255), random(255), random(255));
  point(x, y);
}
