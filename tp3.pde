PImage fondo; 
PImage[] imagenesFondos = new PImage[12];
int pantallaActual = 0; 
String[]texto;

void setup(){
 size(600,600);
 //dibuja las imagenes en secuencia 
 for (int i=0; i<12; i++) {
  imagenesFondos[i] = loadImage("fondo" + i + ".jpg");
 }  
  texto = loadStrings("texto1.txt");
 
}
void draw()  {
 background(255); 
 //pantalla que se esta viendo
 pantalla(pantallaActual);
 //for (int i = 0; i < texto.length; i++) {
 //   text(texto[i], 100, i * 10 + 100);
 // }
}

void mousePressed(){
  //ir a la siguiente pantalla
 float D = dist(mouseX,mouseY,300,300);
 int r = 25;
 if ( pantallaActual == 0 && D<r){
   pantallaActual = 1 ;
 }else{pantallaActual = (pantallaActual + 1) % 11;  }
}
