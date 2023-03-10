var y = 0;
var dy = -1;
function setup() {
  createCanvas(200, 200);
  frameRate(30);
}

function draw() {
  background(160);
  strokeWeight(3);
  y += dy;
  if (y < 0) {
    y = height;
  } else if (y > height) {
    y = 0;
  }
  line(0, y, width - 120, y);
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
  dy *= -1;
}
