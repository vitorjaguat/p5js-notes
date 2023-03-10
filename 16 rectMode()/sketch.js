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

//rectMode(CORNER): default; interpreta os dois primeiros params de rect() como a esquina superior esquerda, e o terceiro e quarto params como a width e height
//rectMode(CORNERS): interpreta os dois primeiros params de rect() como a esquina superior esquerda, e o terceiro e quarto params como a esquina oposta
//rectMode(CENTER): interpreta os dois primeiros params de rect() como o centro do retângulo, e o terceiros e quarto params são a width e height
//rectMode(RADIUS): tbm usa os dois primeiros params como o centro, mas usa o terceiro e quarto params como a METADE da width e a METADE da height

//ellipseMode(CENTER): default; interpreta os dois primeiros parâmetros (x,y) de ellipse() como o centro da figura, e o terceiro e quarto parâmetros como width e height
//ellipseMode(RADIUS): também usa os dois primeiros parâmetros como o ponto central, mas usa o terceiro e o quarto parâmetros como a METADE da width e a METADE da height
//ellipseMode(CORNER): interpreta os dois primeiros parâmetros como a esquina superior esquerda da figura, e o terceiro e quarto parâmetros como a width e a height
//ellipseMode(CORNERS): interpreta os dois primeiros parâmetros como a localização de uma aresta do retângulo que "contém" a elipse, e os parâmetros terceiro e quarto como a localização da aresta oposta

function draw() {
  fill(color3);
  rectMode(CORNER);
  rect(30, 30, 50, 50);
  //
  fill(color4);
  rectMode(CORNERS);
  rect(30, 30, 60, 60);
  //
  fill(color1);
  rectMode(RADIUS);
  rect(60, 150, 30, 20);
  // //
  fill(color2);
  rectMode(CENTER);
  rect(60, 150, 30, 20);
}
