//curvePoint(a, b, c, d, t)
//a,d: control points da curva
//b,c: start e end da curva
//t varia entre 0 e 1
//curveTangent(a, b, c, d, t)
//a,d: control points da curva
//b,c: start e end da curva
//t varia entre 0 e 1

let steps = 4;
let punto = 0;
function setup() {
  createCanvas(400, 600);
  // frameRate(30)
  background(160);
}

function draw() {
  noFill();
  curve(5, 26, 73, 24, 73, 61, 15, 65);
}

function mousePressed() {
  let t = punto / steps;
  let x = curvePoint(5, 73, 73, 15, t);
  let y = curvePoint(26, 24, 61, 65, t);
  ellipse(x, y, 5, 5);

  let tx = curveTangent(5, 73, 73, 15, t);
  let ty = curveTangent(26, 24, 61, 65, t);
  let a = atan2(ty, tx);
  // a -= PI / 2.0;
  line(x, y, cos(a) * 20 + x, sin(a) * 20 + y);
  line(x, y, cos(a) * -20 + x, sin(a) * -20 + y);
  if (punto < steps) {
    punto++;
  }
}
