function setup() {
  createCanvas(400, 400);
  frameRate(30);
  background(230);
}

//square(x, y, s, [tl], [tr], [br], [bl])
//fill()

function draw() {
  fill(color(random(255), random(255), random(255)));
  noStroke();
  square(random(width), random(height), random(width) / 4);
}
