let color1, color2, color3, color4;

function setup() {
  createCanvas(200, 100);
  // frameRate(30);
  background(230);
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
  color3 = color(random(255), random(255), random(255));
  color4 = color(random(255), random(255), random(255));
}

//smooth() deixa as formas menos pixeladas; é o default

function draw() {
  fill(color3);
  smooth();
  ellipse(50, 50, 70, 50);
  //
  fill(color4);
  noSmooth();
  ellipse(150, 50, 70, 50);
  //
}
