//curve(x1, y1, x2, y2, x3, y3, x4, y4)
//x1, y1, x4, y4: control points
//x2, y2, x3, y3: start & end

//curveVertex()
//para concatenar várias curvas

let puntos_array = new Array();
let puntos = 0;

function setup() {
  createCanvas(400, 600);
  frameRate(30);
  background(230);
}

function draw() {
  fill(color(random(255), random(255), random(255)));
}

function mousePressed() {
  if (puntos < 4) {
    x = mouseX;
    y = mouseY;
    puntos_array.push(x, y);
    puntos++;
    circle(x, y, 5);
    if (puntos === 4) {
      curve(
        puntos_array[0],
        puntos_array[1], // 1st control point
        puntos_array[2],
        puntos_array[3], // start
        puntos_array[4],
        puntos_array[5], // end
        puntos_array[6],
        puntos_array[7] //2nd control point
      );
    }
  } else {
    puntos_array = [];
    puntos = 0;
    background(230);
  }
}
