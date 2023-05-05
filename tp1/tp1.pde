PImage helicoptero, DefiantX, heliGuerra,heli, botton;
float posY;
float velY; 
int pantalla;
float posX;
float velX;
PFont fuente;
void setup (){
  size(640,480);
  fill(0);
  pantalla = 1 ;
  fuente = loadFont("TwCenMT-Regular-48.vlw");
  posY = 30;
  velY = 5;
    
}

void draw(){
  background(255);
  textFont(fuente);
  
  if (pantalla == 1 ){
    textSize(40);
    helicoptero = loadImage("helicoptero.jpg");
    image(helicoptero,0,0,640,480);
    
    
      if(posY <= 30 ){   // borde superior, porque no empiza del valor que le digo  
        velY = 5;
      }
        else if (posY >= 310){  // borde inferior
          velY = -5;
         } 
       posY= posY + velY;
 
       text("Helicoptero Defiant X.\nCreado por las companias\nLockheed Martin y Boeing,\npara la U.S Army.",20,posY);
  }
  
   else if (pantalla == 2 ){
       textSize(25);
       fill(#388148);
       DefiantX = loadImage("DefiantX.jpg"); 
       image(DefiantX,0,0,640,480);
    
         if(posX <= 0 ){   // borde izq.   
        velX= 2;
          }
           else if (posX >= 280 ){  // borde der.
             velX = -10;
           } 
        posX= posX + velX;
    
    
         text("El diseño destaca, velocidad, sistema \nde armas integral, alta tecnologia, etc;\nlo que lo hace la nueva novedad de la\nArmy Aviation Association of America.",posX,40);
      
   }  
    else if( pantalla == 3 ){
      heliGuerra = loadImage("heliGuerra.jpg");
      image(heliGuerra,30,60,300,240);
      
      heli = loadImage("heli.jpg");
      image(heli,300,240,200,220);
      
      botton = loadImage("botton.png");
      image(botton,550,400,60,40);
      
      fill(0);
      textSize(20);
      text("El Defiant X forma parte del \nprograma Future Long Range Assaul\nAircraft (FLRAA) del Ejército\nde Estados Unidos.",350,100);
    }
}

void mouseClicked() {
  if (pantalla == 3) {
    pantalla = 1;
  } else   {
    pantalla = pantalla + 1;
  }
}
