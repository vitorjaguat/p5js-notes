function setup() {
  createCanvas(400, 400);
  frameRate(30);
  // background(255);
}

//rect(x, y, w, h, [tl], [tr], [br], [bl])
//tl, tr, br, bl are borderRadius values

function draw() {
  let x = mouseX;
  let y = mouseY;
  background(160);
  rect(30, 30, x - 30, y - 30);
}
