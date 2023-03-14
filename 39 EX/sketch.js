function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  noStroke();
}

function draw() {
  x = mouseX;
  y = mouseY;
  ix = width - mouseX; //valor inverso
  iy = width - mouseY; //valor inverso
  background(126);
  fill(255, 150);
  ellipse(x, height / 2, y, y);
  fill(0, 159);
  ellipse(ix, height / 2, iy, iy);
}
