
//determianr variables 
//OBEJETOS
let Objuego;
//IMAGENES
//let ImgFondo
let ImgJugadorDer, ImgJugadorIzq;
let ImgCastillo;
let ImgArbol, ImgCamion,ImgAutoRosa;
let ImgArvol

function preload ()  {
//imagenes con variables 
ImgJugadorDer = loadImage("data/PrincipeDerecha.png")
ImgJugadorIzq = loadImage("data/PrincipeIzquierda.jpg")
ImgArbol = loadImage("data/arbol.png")
ImgArvol = loadImage("data/arvol.jpg");
ImgAutoRosa = loadImage("data/autoRosa.png");
ImgCamion= loadImage("data/camion.png");

//ImgFondo = loadImage("data/fondo.jpg");
ImgCastillo = loadImage ("data/castillo.png");
ImgCuervo =  loadImage ("data/cuervo.jpg")
}
function setup() {

createCanvas(600,600);
Objuego = new juego ();
}


function draw() {
 background(255);
Objuego.dibujar();

}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Objuego.jugador.moverIzquierda();
  } else if (keyCode === RIGHT_ARROW) {
    Objuego.jugador.moverDerecha();
  } else if (keyCode === UP_ARROW) {
    Objuego.jugador.moverArriba();
  }
}
