//mouseDragged() es llamada cada vez que el ratón se mueve y un botón del ratón está siendo presionado

let forma = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(160);
  frameRate(30);
}

function draw() {}

function mousePressed() {
  // background(160);
  forma = !forma;
}

function mouseDragged() {
  if (forma) {
    let puntas = floor(random(5, 10));
    flor(puntas);
  } else {
    let puntas = floor(random(5, 10));
    estrella(puntas);
  }
  return false; // prevent default behavior
}

function flor(puntas) {
  let xx = mouseX; //random(20, width - 20);
  let yy = mouseY; //random(20, height - 20);
  // fill(color(random(255), random(255), random(255)));
  fill(random(255));
  let angulo = TWO_PI / puntas;
  let radioInterno = random(10, 20);
  let radioExterno = random(25, 50);
  let inicioX = xx + cos(0) * radioInterno;
  let inicioY = yy + sin(0) * radioExterno;
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
