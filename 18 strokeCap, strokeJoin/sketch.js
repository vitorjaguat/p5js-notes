function setup() {
  createCanvas(400, 100);
  // frameRate(30);
  background(230);
}

//strokeCap(): define los extremos de las líneas:
//SQUARE: cuadrados
//PROJECT: expendidos
//ROUND: redondeados (default)
//strokeJoin(): define las uniones que conectan segmentos de líneas:
//MITER (default)
//BEVEL
//ROUND

function draw() {
  strokeWeight(12.0);
  strokeCap(ROUND);
  line(20, 30, 80, 30);
  strokeCap(SQUARE);
  line(20, 50, 80, 50);
  strokeCap(PROJECT); //o último strokeCap vai determinar tbm a aparência das linhas nas shapes abaixo!
  line(20, 70, 80, 70);

  noFill();
  strokeWeight(10.0);
  strokeJoin(MITER);
  beginShape();
  vertex(135, 20);
  vertex(165, 50);
  vertex(135, 80);
  endShape();

  strokeJoin(BEVEL);
  beginShape();
  vertex(235, 20);
  vertex(265, 50);
  vertex(235, 80);
  endShape();

  strokeJoin(ROUND);
  beginShape();
  vertex(335, 20);
  vertex(365, 50);
  vertex(335, 80);
  endShape();
}
