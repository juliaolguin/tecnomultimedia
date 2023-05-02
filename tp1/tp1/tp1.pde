PImage helicoptero, DefiantX;
float posY;
float velY; 
int pantalla;

void setup (){
  size(640,480);
  
  fill(0);
  textSize(40);
  posY = 1;
  velY = 2;
  pantalla = 1 ;
  
}

void draw(){
  background(255);
   
  if (pantalla == 1 ){
  pantalla1();
  
  }
 
  else if (pantalla == 2 ){
    
  pantalla2();
  }
}  
void mouseClicked() {
  if (pantalla == 1) {
    pantalla2();
  } else if (pantalla == 2) {
    pantalla1();
}
}
