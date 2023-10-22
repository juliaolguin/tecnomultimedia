

//OBJETOS

let Objuego;
//IMAGENES
let ImgJugadorDer, ImgJugadorIzq;
let ImgCastillo,ImgFondo,ImgFondoPasto;
let ImgArbol, ImgCamion, ImgAutoRosa, ImgDragon, ImgCuervo, ImgArbolConPalo, ImgCartin;

function preload () {
  //imagenes con variables
  ImgFondoPasto = loadImage("data/fondoPasto.jpg")
  ImgJugadorDer = loadImage("data/PrincipeDerecha.png")
    ImgJugadorIzq = loadImage("data/PrincipeIzquierda.png")
    ImgFondo = loadImage("data/fondo.png")
    ImgArbol = loadImage("data/arbol.png")
    ImgArbolConPalo = loadImage("data/arvol.jpg");
  ImgAutoRosa = loadImage("data/autoRosa.png");
  ImgCamion= loadImage("data/camion.png");
  ImgDragon = loadImage("data/dragon.png");
  ImgCuervo = loadImage("data/cuervo.jpg");
  ImgCartin =loadImage("data/cartinAmarillo.png");
  ImgCastillo = loadImage ("data/castillo.png");
}
function setup() {
  //dibujar todo
  createCanvas(600, 600);
  Objuego = new juego ();

}

function draw() {
  //dibujar todo
  background(255);
  Objuego.dibujar();
 
}
//mover jugador 
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Objuego.jugador.moverIzquierda();
  } else if (keyCode === RIGHT_ARROW) {
    Objuego.jugador.moverDerecha();
  } else if (keyCode === UP_ARROW) {
    Objuego.jugador.moverArriba();
  }
}
