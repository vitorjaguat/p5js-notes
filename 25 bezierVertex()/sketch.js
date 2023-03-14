//bezierVertex()
//Cada llamada a la función bezierVertex() define la posición de dos puntos de control y un punto ancla de una curva Bezier, añadiendo un nuevo segmento a la línea o figura.
//La primera vez que bezierVertex() es usada dentro de una llamada a beginShape(), debe ser antecedida por una llamada a la función vertex() para definir el primer punto ancla.
//Esta función debe ser usada enre beginShape() y endShape() y solo cuando NO se ha especificado el parámetro MODE a beginShape()

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
  if (puntos < 7) {
    x = mouseX;
    y = mouseY;
    puntos_array.push(x, y);
    puntos++;
    circle(x, y, 5);
    if (puntos === 7) {
      beginShape();
      vertex(puntos_array[0], puntos_array[1]); //1st anchor point
      bezierVertex(
        puntos_array[2],
        puntos_array[3], // 1st control point
        puntos_array[4],
        puntos_array[5], //2nd control point
        puntos_array[6],
        puntos_array[7] //2nd anchor point
      );
      bezierVertex(
        puntos_array[8],
        puntos_array[9], // 1st control point
        puntos_array[10],
        puntos_array[11], //2nd control point
        puntos_array[12],
        puntos_array[13] //2nd anchor point
      );
      endShape();
    }
  } else {
    puntos_array = [];
    puntos = 0;
    background(230);
  }
}
