//https://youtu.be/1XZ4woKV7Yg
PImage[] imagenesFondos = new PImage[14];
int pantallaActual = 0;
String[]texto;
PFont fuenteTexto, fuenteCreditos;
PImage malefica, hadas;
float  desplazamientoY;
float Y = 600;
int r = 25; //RADIO
void setup() {
  size(600, 600);
  //dibuja las imagenes en secuencia
  for (int i=0; i<14; i++) {
    imagenesFondos[i] = loadImage("fondo" + i + ".jpg");
  }
  fill(0);
  fuenteTexto= loadFont("fuente.vlw");
  fuenteCreditos = loadFont("creditos.vlw");
  texto = loadStrings("texto1.txt");
  malefica = loadImage("malefica.jpg");
  hadas= loadImage("hadas.jpg");
}
void draw() {
  background(255);
  //pantalla que se esta viendo
  pantalla(pantallaActual);
}
//reiniciar 
boolean cambiarPantalla13A0() {
    float DR = dist(mouseX, mouseY, 500, 500); // Botón de reiniciar - distancia reiniciar

    if (pantallaActual == 13 && DR < r) {
      return true;
    }
     return false;
  }
void mousePressed() {
  
  //ir a la siguiente pantalla
  float D1 = map(dist(mouseX, mouseY, map(300, 0, width, 0, 600), map(300, 0, height, 0, 600)), 0, map(25, 0, width, 0, 600), 0, 1); // botonInicar
  float D = dist(mouseX, mouseY, 590, 300); //interracion in pantalla siguiente
  
  if ( pantallaActual == 0 && D1<r) {
    pantallaActual = 1 ;
  } else if ( pantallaActual == 1 &&  D<r ) {
    pantallaActual  = 2 ;
  } else if ( pantallaActual == 2 && mouseX>400 && mouseX<450 && mouseY>450 && mouseY<500) {// hadas400, 450, 70,70)
    pantallaActual  = 3;
  }
  if (  mouseX>305 && mouseX<375 && mouseY>450 && mouseY<500) {// Malefica 305, 450, 70, 70
    pantallaActual  = 8 ;
  } else if  ( pantallaActual == 3  && D<r) {
    pantallaActual = 4 ;
  } else if (pantallaActual == 4 && mouseX>160 && mouseX<230 && mouseY>170 && mouseY<240) { //hadas (boton1b, 160, 170, 70, 70);
    pantallaActual=  5;
  }
  if (pantallaActual == 4 && mouseX>70 && mouseX<140 && mouseY>170 && mouseY<240) {//malefica(boton1, 70, 170, 70, 70);
    pantallaActual = 9;
  } else if (pantallaActual == 5 && D<r) {
    pantallaActual = 6;
  } else if (pantallaActual == 6 && mouseX>100 && mouseX<170 && mouseY>420 && mouseY< 490) { // maleficas 100,420,70,70
    pantallaActual = 10;
  }
  if ( mouseX>200 && mouseX<270 && mouseY>420 && mouseY<490) { //
    pantallaActual = 7 ;
  }
  if (mouseX>350 && mouseX<420 && mouseY>500 && mouseY<590) { //350, 510, 70, 70
    pantallaActual = 11;
  }
  if ( mouseX>250 && mouseX<320 && mouseY>510 && mouseY<580) {// 250, 510, 70, 70 malefica
    pantallaActual =12;
  } else if (pantallaActual == 7 && mouseX>450 && mouseX<535 && mouseY>520 && mouseY<555) { //text("Finalizar", 470, 500);
    pantallaActual = 13 ;
  } else if (pantallaActual == 8 && D<r) {
    pantallaActual = 4;
  } else if (pantallaActual == 9 && D<r) {
    pantallaActual = 6;
  } else if (pantallaActual == 10 && mouseX>370 && mouseX<550&& mouseY>440 && mouseY<510 ) {
    pantallaActual= 13;
  } else if (pantallaActual == 11 && mouseX>370 && mouseX<550&& mouseY>440 && mouseY<510) {
    pantallaActual = 13;
  }
  if (pantallaActual == 12 && mouseX>370 && mouseX<550&& mouseY>440 && mouseY<510) {
    pantallaActual =  13;
  } else if (cambiarPantalla13A0()) {
    pantallaActual = 0;
  }
}
