let estrellas = 1000;
let num = 0;

function setup() {
  createCanvas(400, 400);
  background(160);
  frameRate(30);
}

function draw() {
  if (num < estrellas) {
    let puntas = floor(random(4, 10));
    estrella(puntas);
    num++;
  }
}

function estrella(puntas) {
  let vertices = puntas * 2;
  let angulo = TWO_PI / vertices;
  let radioInterno = random(5, 10);
  let radioExterno = random(12, 25);
  let xx = random(20, width - 20);
  let yy = random(20, height - 20);
  fill(color(random(255), random(255), random(255)));
  noStroke();
  beginShape();
  for (let i = 0; i < vertices; i++) {
    let x, y;
    if (i % 2 == 0) {
      x = cos(angulo * i) * radioExterno;
      y = sin(angulo * i) * radioExterno;
    } else {
      x = cos(angulo * i) * radioInterno;
      y = sin(angulo * i) * radioInterno;
    }
    vertex(x + xx, y + yy);
  }
  endShape(CLOSE);
}
