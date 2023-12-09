//objetos
let obAventura;
//imagenes de fondo
let fondo0, fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9, fondo10, fondo11, fondo12, fondo13;
// imagens de botones
let flecha, hadas, malefica;
let texto;
//JUEGO//let Objuego;
let ImgJugadorDer, ImgJugadorIzq, ImgJugador, ImgPlay, ImgGanar, ImgPerder;
let ImgCastillo, ImgFondo;
let ImgArbol, ImgCamion, ImgAutoRosa, ImgDragon, ImgCuervo, ImgArbolConPalo, ImgCartin;



function preload () {
  fondo0= loadImage("data/fondo0.jpg");
  fondo1= loadImage("data/fondo1.jpg");
  fondo2= loadImage("data/fondo2.jpg");
  fondo3= loadImage("data/fondo3.jpg");
  fondo4= loadImage("data/fondo4.jpg");
  fondo5= loadImage("data/fondo5.jpg");
  fondo6= loadImage("data/fondo6.jpg");
  fondo7= loadImage("data/fondo7.jpg");
  fondo8= loadImage("data/fondo8.jpg");
  fondo9= loadImage("data/fondo9.jpg");
  fondo10= loadImage("data/fondo10.jpg");
  fondo11= loadImage("data/fondo11.jpg");
  fondo12= loadImage("data/fondo12.jpg");
  fondo13=loadImage("data/fondo13.jpg");

  flecha = loadImage ("data/flecha.png");
  hadas =  loadImage("data/hadas.jpg");
  malefica= loadImage("data/malefica.jpg");

  texto=loadStrings("data/texto1.txt");

 //JUEGO

  ImgJugadorDer = loadImage("data/PrincipeDerecha.png")
    ImgJugadorIzq = loadImage("data/PrincipeIzquierda.png")
    ImgJugador = loadImage("data/Principe.png");
  ImgFondo = loadImage("data/fondo.png")
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
  createCanvas(600, 600);
  obAventura = new aventura ();
}

function draw() {
  obAventura.dibujar();
}

function mousePressed() {
  obAventura.click();
}

function keyPressed() {
  obAventura.teclaPresionada();
}
