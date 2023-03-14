function setup() {
  createCanvas(windowWidth, windowHeight);
  background(160);
  frameRate(30);
}

function draw() {}

function mouseMoved() {
  let puntas = floor(random(5, 10));
  flor(puntas);
  return false; // prevent default behavior
}

function flor(puntas) {
  let angulo = TWO_PI / puntas;
  let radioInterno = random(5, 10);
  let radioExterno = random(12, 25);
  let xx = random(20, width - 20);
  let yy = random(20, height - 20);
  let inicioX = xx + cos(0) * radioInterno;
  let inicioY = yy + sin(0) * radioExterno;
  fill(color(random(255), random(255), random(255)));
  noStroke();
  beginShape();
  vertex(inicioX, inicioY);
  for (let i = 0; i < puntas; i++) {
    let cx1 = xx + cos(angulo * i) * radioExterno;
    let cy1 = yy + sin(angulo * i) * radioExterno;
    let x2 = xx + cos(angulo * (i + 1)) * radioInterno;
    let y2 = yy + sin(angulo * (i + 1)) * radioInterno;
    let cx2 = xx + cos(angulo * (i + 1)) * radioExterno;
    let cy2 = yy + sin(angulo * (i + 1)) * radioExterno;
    bezierVertex(cx1, cy1, cx2, cy2, x2, y2);
  }
  endShape(CLOSE);
}
