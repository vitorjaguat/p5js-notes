let color1, color2, color3, color4;

function setup() {
  createCanvas(100, 100);
  frameRate(30);
  background(230);
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
  color3 = color(random(255), random(255), random(255));
  color4 = color(random(255), random(255), random(255));
}

//arc(x, y, w, h, start, stop, [mode], [detail])
//start: angle at the beginning of arc (rad)
//end: angle at the end of arc (rad)
//mode: CHORD, PIE, OPEN
//detail: 3D (webGL)
//the origin can be modified with ellipseMode() (next lecture)

function draw() {
  fill(color1);
  arc(50, 55, 50, 50, 0, HALF_PI, PIE);
  fill(color2);
  arc(50, 55, 50, 50, HALF_PI, PI, PIE);
  fill(color3);
  arc(50, 55, 50, 50, PI, PI + QUARTER_PI, PIE);
  fill(color4);
  arc(50, 55, 50, 50, PI + QUARTER_PI, 2 * PI, PIE);
}
