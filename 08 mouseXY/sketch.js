var y = 0;
var dy = -5;
function setup() {
  createCanvas(400, 400);
  frameRate(30);
  background(50);
}

function draw() {
  var x = mouseX;
  var y = mouseY;
  // background(160);

  // var r = random(200);
  // stroke(r);
  // line(x, y, x + 20, y - 40);
  // line(x + 10, y, x + 30, y - 40);
  // line(x + 20, y, x + 40, y - 40);

  line(x, 0, x, height);
}
