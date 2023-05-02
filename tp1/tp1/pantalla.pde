 void pantalla1 (){

image(helicoptero,0,0,640,480);
  
 if (posY <= 0 ){   // borde superior
  velY = 2;
 }
 else if (posY >= height){  // borde inferior
   velY = -2;
 } 
  posY= posY + velY;
 
text("Helicoptero Defiant X, creado por\nlas companias Lockheed Martin y\nBoeing, para la U.S Army.",20,posY);
}
 
 void pantalla2 (){
 text("pantalla 2 ",50,50);
 }
