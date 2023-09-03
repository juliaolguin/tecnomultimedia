//puntos : avanza 1 =10puntos 
// vidas : 3 
//tiempo : 45, se reinicia cada vez que pierde una vida 
// posibles tipografias : ravie ,ShowcardGhotic-Reg-20,tempusSanslTC,VinerHandITC
let fondo, rana, auto, camion, tractor, cartin, cartinAmarillo, tortugas2, tronco, tortugas, InicioPlay;
let posY = 505;
let posX = 50 ;
let contador= 45;
let pantalla=1;


function setup() {
  createCanvas(600, 605);
  fondo = loadImage('data/fondo.png');
  auto = loadImage ('data/autoRosa.png');
  camion = loadImage('data/camion.png');
  rana = loadImage('data/rana.png');
  tractor = loadImage('data/tractor.png');
  cartin = loadImage('data/cartin.png');
  cartinAmarillo = loadImage('data/cartinAmarillo.png');
  tronco = loadImage('data/tronco.png');
  tortugas = loadImage('data/tortugas.png');
  tortugas2 = loadImage('data/tortugas2.png');
  InicioPlay = loadImage ('data/InicioPlay.png');
}

function draw() {
 pantallas();
}
function mousePressed () {
  if (pantalla == 1 && mouseX>210 && mouseX<355 && mouseY>300 && mouseY< 325 ) {
    pantalla = 2 ;
  }
}

function keyPressed() {
  if (keyCode ===UP_ARROW) {
    posY -=40;
  } else if (keyCode ===RIGHT_ARROW) {
    posX +=30;
  } else if (keyCode ===LEFT_ARROW) {
    posX -=30;
  }
}
