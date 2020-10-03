var jyf;

function setup() {
  createCanvas(400, 400);
  jyf = new bob();
  frameRate(10);
}

function draw() {
  background(220);
  if (keyIsPressed && keyCode == 39) {
    jyf.moverDer();
  } else if (keyIsPressed && keyCode == 37) {
    jyf.moverIzq();
  }
  if (keyCode == 37) {
    jyf.mostrarIzq();
  }
  if (keyCode == 39) {
    jyf.mostrar();
  }
}
