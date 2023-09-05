//puntos : avanza 1 =10puntos
// vidas : 3
//tiempo : 45, se reinicia cada vez que pierde una vida
// posibles tipografias : ravie ,ShowcardGhotic-Reg-20,tempusSanslTC,VinerHandITC
// lo sde las vidas y eso va en el draw ?
const DERECHA = "DERECHA";
const IZQUIERDA = "IZQUIERDA";
const ARRIBA = "ARRIBA";
let fondo, rana, GameOver, auto, InicioPlay;
let posY = 505;
let posX = 50 ;
let contador= 45;
let pantalla=1;
let ranaDer, ranaIzq, ranaArriba;
let direccion = DERECHA;
let puntos ;  
let autoX =[];
  
  
  
function preload() {
  ranaIzq = loadImage('data/rana-izq.png');
  ranaDer = loadImage('data/rana-der.png');
  ranaArriba = loadImage('data/rana-arriba.png');
  GameOver= loadImage ('data/GameOver.png');
  auto = loadImage ('data/autoRosa.png');
  //for(let i=0; i<cantImg; i++){
  //ranaArriba[i] = loadImage ('data/rana'+ (i+1) +'-arriba.png');
  //ranaDer[i] = loadImage('data/rana' + (i+1) + '-der.png');
  //ranaIzq[i] = loadImage('data/rana' + (i+1) + '-izq.png');
  //}
}

function setup() {
  createCanvas(600, 605);
  fondo = loadImage('data/fondo.png');

  //camion = loadImage('data/camion.png');
  //rana = loadImage('data/rana0-arriba.png');
  //tractor = loadImage('data/tractor.png');
  //cartin = loadImage('data/cartin.png');
  //cartinAmarillo = loadImage('data/cartinAmarillo.png');
  //tronco = loadImage('data/tronco.png');
  //tortugas = loadImage('data/tortugas.png');
  //tortugas2 = loadImage('data/tortugas2.png');
  //GameOver =  loadImage ('data/GameOver.png');
  InicioPlay = loadImage ('data/InicioPlay.png');
}

function draw() {
  pantallas();
 
}
function mousePressed () {
  if (pantalla == 1 && mouseX>210 && mouseX<355 && mouseY>300 && mouseY< 325 ) {
    pantalla = 2 ;
  }else if (pantalla == 2 && mouseX>210 && mouseX<355 && mouseY>300 && mouseY< 325)  {
  pantalla = 3 ;
  }
}

function keyPressed() {
  if (keyCode ===UP_ARROW && posY>62 ){
    posY -=40;
    direccion = ARRIBA;
    puntos +=10;
     
  } else if (keyCode ===RIGHT_ARROW && posX< 560 && posY >62) {

    posX +=30;
    direccion = DERECHA;
  } else if (keyCode ===LEFT_ARROW && posX>0 && posY >62) {
    direccion = IZQUIERDA;
    posX -=30;
  }
}
