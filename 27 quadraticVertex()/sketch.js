//quadraticVertex()
//espcififica las coordenadas de vértices para curvas Bezier quadraticas
// cada llamada a quadraticVertex() define la posición de uno de los puntos de control y ancla de una curva Bezier, añadiendo un nuevo segmento a la línea o figura
// la primera vez que quadraticVertex() es usada dentro de una llamada a beginShape(), debe ser precedida por una llamada a vertex() para definir el primer PUNTO ANCLA

function setup() {
  createCanvas(400, 600);
  // frameRate(30);
  background(230);
}

function draw() {
  // fill(color(random(255), random(255), random(255)));
  noFill();
  strokeWeight(2);
  beginShape();
  vertex(20, 20); //1st anchor point
  quadraticVertex(80, 20, 50, 50); //1st control point, 2nd anchor point
  quadraticVertex(20, 80, 80, 80); // 2nd control point, 3rd anchor point
  quadraticVertex(70, 70, 80, 60);
  circle(20, 20, 5);
  circle(80, 20, 5);
  circle(50, 50, 5);
  circle(20, 80, 5);
  circle(80, 80, 5);
  circle(80, 60);
  endShape();
}
