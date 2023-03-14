//keyPressed(), keyCode
// valor ASCII -> key (case unsensitive): teclas que tenham valor ascii, o valor ascii fica armazenado em 'key'
// teclas sem valor ASCII, a variável keyCode armazena: BACKSPACE, DELETE, ENTER, RETURN, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
//https://www.c-sharpcorner.com/blogs/ascii-key-code-value1
//
//return false;

let x, y;
let colores = ['white', 'red', 'green', 'orange', 'yellow'];
let color = 'gray';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color);
  frameRate(30);
  x = width / 2;
  y = height / 2;
  circle(x, y, 20);
}

function draw() {
  background(color);
  circle(x, y, 20);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (x > 10) {
      x -= 5;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (x < width - 10) {
      x += 5;
    }
  } else if (keyCode === UP_ARROW) {
    if (y > 10) {
      y -= 5;
    }
  } else if (keyCode === DOWN_ARROW) {
    if (y < height - 10) {
      y += 5;
    }
  } else if (key === 'c') {
    x = width / 2;
    y = height / 2;
  } else {
    if (key >= '1' && key <= '5') {
      color = colores[key - 1];
    } else {
      color = 'gray';
    }
  }
  return false;
}

function mouseWheel(event) {
  if (event.delta > 0) {
    y -= 10;

    rect(25, pos, 350, 50);
  } else {
    y += 10;

    rect(25, pos, 350, 50);
  }
  return false;
}

// function mousePressed() {
//   if (mouseButton == RIGHT) {
//     background(0);
//   }
// }

// function mouseMoved() {
//   stroke(0, 64);
//   strokeWeight(1);
//   fill(255, 32);
//   d = dist(mouseX, mouseY, pmouseX, pmouseY);
//   constrain(d, 8, 100); //d precisa estar entre 8 e 100
//   ellipse(mouseX, mouseY, d, d); //se o mouse passa rápido, vai ser uma elipse grande, se passar lento vai ser uma elipse pequena
// }

// function mouseDragged() {
//   stroke(0);
//   d = dist(mouseX, mouseY, pmouseX, pmouseY);
//   constrain(d, 0, 100);
//   w = map(d, 0, 100, 1, 10); //converter a escala de 0 a 100 para uma escala de 1 a 10
//   strokeWeight(w);
//   line(mouseX, mouseY, pmouseX, pmouseY);
//   return false; // prevent default behavior
// }

// function mouseReleased() {
//   noStroke();
//   fill(255, 5);
//   rect(0, 0, width, height);
// }

// function mouseClicked() {
//   fill(255, 0, 0);
//   d = random(20, 200);
//   ellipse(mouseX, mouseY, d, d);
// }

// function flor(puntas) {
//   let xx = mouseX; //random(20, width - 20);
//   let yy = mouseY; //random(20, height - 20);
//   // fill(color(random(255), random(255), random(255)));
//   fill(random(255));
//   let angulo = TWO_PI / puntas;
//   let radioInterno = random(10, 20);
//   let radioExterno = random(25, 50);
//   let inicioX = xx + cos(0) * radioInterno;
//   let inicioY = yy + sin(0) * radioExterno;
//   noStroke();
//   beginShape();
//   vertex(inicioX, inicioY);
//   for (let i = 0; i < puntas; i++) {
//     let cx1 = xx + cos(angulo * i) * radioExterno;
//     let cy1 = yy + sin(angulo * i) * radioExterno;
//     let x2 = xx + cos(angulo * (i + 1)) * radioInterno;
//     let y2 = yy + sin(angulo * (i + 1)) * radioInterno;
//     let cx2 = xx + cos(angulo * (i + 1)) * radioExterno;
//     let cy2 = yy + sin(angulo * (i + 1)) * radioExterno;
//     bezierVertex(cx1, cy1, cx2, cy2, x2, y2);
//   }
//   endShape(CLOSE);
// }

// function estrella(puntas) {
//   let vertices = puntas * 2;
//   let angulo = TWO_PI / vertices;
//   let radioInterno = random(5, 10);
//   let radioExterno = random(12, 25);
//   let xx = random(20, width - 20);
//   let yy = random(20, height - 20);
//   fill(color(random(255), random(255), random(255)));
//   noStroke();
//   beginShape();
//   for (let i = 0; i < vertices; i++) {
//     let x, y;
//     if (i % 2 == 0) {
//       x = cos(angulo * i) * radioExterno;
//       y = sin(angulo * i) * radioExterno;
//     } else {
//       x = cos(angulo * i) * radioInterno;
//       y = sin(angulo * i) * radioInterno;
//     }
//     vertex(x + xx, y + yy);
//   }
//   endShape(CLOSE);
// }
