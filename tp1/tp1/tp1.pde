PImage helicoptero, defiantX;
float posY;
float velY; 
int pantalla;
int pantalla1;
int pantalla2;
void setup (){
  size(640,480);
  //pantalla 1 
  
  fill(0);
  textSize(40);
  posY = 1;
  velY = 2;
  pantalla1 = 1;
  pantalla2 = 1 ;


  
}

void draw(){
  background(255);
  //pantalla 1 
  if (pantalla ==pantalla1 ){
  
  helicoptero = loadImage ("helicoptero.jpg");
  }
  //pantalla 2 
  else if (pantalla++ ==pantalla2 ){
    pantalla2();
  defiantX = loadImage("defiantX,jpg");
  
  }
}  
void mouseClicked() {
  if (pantalla == pantalla1) {
  } else if (pantalla == pantalla2) {
}
}
void keyPressed() {
  if (pantalla == pantalla1) {
    pantalla++;
  } else if (pantalla == pantalla2) {
    pantalla1();
}
}
