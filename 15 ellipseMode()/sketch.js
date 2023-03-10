let color1, color2, color3, color4;

function setup() {
  createCanvas(100, 200);
  frameRate(30);
  background(230);
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
  color3 = color(random(255), random(255), random(255));
  color4 = color(random(255), random(255), random(255));
}

//ellipseMode(CENTER): default; interpreta os dois primeiros parâmetros (x,y) de ellipse() como o centro da figura, e o terceiro e quarto parâmetros como width e height
//ellipseMode(RADIUS): também usa os dois primeiros parâmetros como o ponto central, mas usa o terceiro e o quarto parâmetros como a METADE da width e a METADE da height
//ellipseMode(CORNER): interpreta os dois primeiros parâmetros como a esquina superior esquerda da figura, e o terceiro e quarto parâmetros como a width e a height
//ellipseMode(CORNERS): interpreta os dois primeiros parâmetros como a localização de uma aresta do retângulo que "contém" a elipse, e os parâmetros terceiro e quarto como a localização da aresta oposta

function draw() {
  fill(color1);
  ellipseMode(RADIUS);
  ellipse(50, 50, 30, 20);
  fill(color2);
  ellipseMode(CENTER);
  ellipse(50, 50, 30, 20);
  fill(color3);
  ellipseMode(CORNER);
  ellipse(50, 150, 30, 20);
  fill(color4);
  ellipseMode(CORNERS);
  ellipse(50, 150, 30, 120);
}
