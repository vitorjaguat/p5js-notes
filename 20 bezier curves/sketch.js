let puntos_array = new Array();
let puntos = 0;

function setup() {
  createCanvas(400, 600);
  frameRate(30);
  background(230);
}

//curva Bezier cúbica (4 points)
//bezier(x1, y1, x2, y2, x3, y3, x4, y4)
//x1, y1, x4, y4 definem o início e o fim da curva (anchor points)
//x2, y2, x3, y3 definem os pontos de CONTROLE: a curva vai "tender" para esses pontos (dão a forma da curva) (control points)

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
      bezier(
        puntos_array[0],
        puntos_array[1], // 1st anchor point
        puntos_array[2],
        puntos_array[3], // 1st control point
        puntos_array[4],
        puntos_array[5], // 2nd control point
        puntos_array[6],
        puntos_array[7] //2nd anchor point
      );
    }
  } else {
    puntos_array = [];
    puntos = 0;
    background(230);
  }
}
