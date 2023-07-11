
PImage[] imagenesFondos = new PImage[12];
int pantallaActual = 0;
String[]texto;
PFont fuenteTexto;
int lineaActual = 0;
void setup() {
 size(600, 600);
  //dibuja las imagenes en secuencia
 for (int i=0; i<12; i++){
    imagenesFondos[i] = loadImage("fondo" + i + ".jpg");
 }
 fuenteTexto= loadFont("fuente.vlw");
 texto = loadStrings("texto1.txt");
}
void draw() {
  background(255);
  //pantalla que se esta viendo
  pantalla(pantallaActual);
  if (pantallaActual >= 1) {
    textAlign(CENTER);
    textSize(20);
    textLeading(20);
    fill(255);
     for (int i = 0; i < lineaActual; i++) {
      text(texto[i], 30,10, 550, 250);
     }
   
  }
}

void mousePressed() {
  //ir a la siguiente pantalla
  //pantallaActual = (pantallaActual + 1) % 12; // esto se saca , solo ir por pantalla(leer mas abajo)
  float D = dist(mouseX, mouseY, 300, 300);
  int r = 25;
  
  
  if ( pantallaActual == 0 && D<r) {
    pantallaActual = 1 ;
  }
  if (pantallaActual >= 1) {
    lineaActual++;
   }
  
  if( pantallaActual == 1 &&  mouseX > 450 && mouseX <550 && mouseY >530 && mouseY<580) {
    pantallaActual  = 2 ;  
  }
   if( pantallaActual == 2 &&  mouseX > 300 && mouseX <450 && mouseY >300 && mouseY<350) {
    pantallaActual  = 3;  
  }
   if( pantallaActual == 2 &&  mouseX > 50 && mouseX <150 && mouseY >530 && mouseY<580) {
     
    pantallaActual  = 8 ;  
   
  }
  if  ( pantallaActual == 3 && mouseX > 250 && mouseX <350 && mouseY >50 && mouseY<550)  {
   pantallaActual = 4 ; 
  }
  //if (pantallaActual == 8 && mouseX > 100 && mouseX <200 && mouseY >530 && mouseY<580)  {
  //  pantallaActual = 4;
  //}
  if(pantallaActual == 4 &&mouseX > 0 && mouseX <100 && mouseY >0 && mouseY<50 )  {
    pantallaActual= 5 ;
  }
 if(pantallaActual == 4 && mouseX > 500 && mouseX <600 && mouseY >0 && mouseY<50 )  {
    pantallaActual= 9 ;
  }
}
//ir por pantalla , si estoy en pantalla 1 puedo ir  a la 2 o ir al arreglo 8 etc
// apartir del arreglo 7 hago la otra version , a partindel arreglo 12 hago otra version.
