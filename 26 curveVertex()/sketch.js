//curveVertex()
// Tiene 2 params que establecen la coordenada xy: la coordenada 'y' del vértice
// La 1a e la última curveVertex() dentro de beginShape() y endShape() actúan como PUNTOS DE CONTROL, estableciendo la curvatura para el princípio y el final de la línea
// :a curvatura para cada segmento de la curva se calcula a partir de cada par de puntos en consideración de puntos antes y después
// Por lo tanto, debe haber al menos 4 funciones curveVertex() dentro de beginShape() y endShape() para dibujar un segmento

let puntos_array = new Array();
let puntos = 0;

function setup() {
  createCanvas(400, 600);
  // frameRate(30);
  background(230);
}

function draw() {
  fill(color(random(255), random(255), random(255)));
}

function mousePressed() {
  if (puntos < 10) {
    x = mouseX;
    y = mouseY;
    puntos_array.push(x, y);
    puntos++;
    circle(x, y, 5);
    if (puntos === 10) {
      beginShape();
      for (i = 0; i < puntos_array.length; i += 2) {
        curveVertex(puntos_array[i], puntos_array[i + 1]);
        circle(puntos_array[i], puntos_array[i + 1], 5);
      }
      endShape();
    }
  } else {
    puntos_array = [];
    puntos = 0;
    background(230);
  }
}
