PImage helicoptero, defiantX;
float posY;
float velY; 

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
  if (pantalla1 == 1 ){
  pantalla1();
  helicoptero = loadImage ("helicoptero.jpg");
  }
  //pantalla 2 
  else if (pantalla2 == 2 ){
    pantalla2();
  
  defiantX = loadImage("defiantX,jpg");
  }
  


}
