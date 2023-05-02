void pantalla1(){
helicoptero = loadImage ("helicoptero.jpg");

if(posY <= 0 ){   // borde superior    
  velY = 2;
 }
 else if (posY >= height){  // borde inferior
   velY = -2;
 } 
  posY= posY + velY;
 
text("Helicoptero Defiant X, creado por\nlas companias Lockheed Martin y\nBoeing, para la U.S Army.",20,posY);
}

void pantalla2 (){
  DefiantX = loadImage("defiantX,jpg");
  text("hola",310,240);
}
