 

//OBJETOS

let Objuego;
let vida = 3 
//IMAGENES
let ImgJugadorDer, ImgJugadorIzq, ImgJugador,ImgPlay, ImgGanar,ImgPerder;
let ImgCastillo,ImgFondo;
let ImgArbol, ImgCamion, ImgAutoRosa, ImgDragon, ImgCuervo, ImgArbolConPalo, ImgCartin;
let puntos= 0;
function preload () {
  //imagenes 
  ImgGanar = loadImage("data/Win.png")
  ImgPerder = loadImage("data/GameOver.png")
  ImgJugadorDer = loadImage("data/PrincipeDerecha.png")
    ImgJugadorIzq = loadImage("data/PrincipeIzquierda.png")
    ImgJugador = loadImage("data/Principe.png");
    ImgFondo = loadImage("data/fondo.png")
    ImgPlay = loadImage("data/InicioPlay.png");
    ImgArbol = loadImage("data/arbol.png")
    ImgArbolConPalo = loadImage("data/arvol.png");
  ImgAutoRosa = loadImage("data/autoRosa.png");
  ImgCamion= loadImage("data/camion.png");
  ImgDragon = loadImage("data/dragon.png");
  ImgCuervo = loadImage("data/cuervo.jpg");
  ImgCartin =loadImage("data/cartinAmarillo.png");
ImgCastillo = loadImage ("data/castiloo.jpg");
  ImgTractor = loadImage("data/tractor.png");
}
function setup() {
  
  //dibujar 
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
  
Objuego.jugador.teclaPresionada();
 
}

//iniciar juego
function mousePressed()  {
Objuego.iniciar();
}
