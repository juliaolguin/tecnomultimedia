PImage helicoptero, DefiantX, heliGuerra, botton;
float posY;
float velY; 
int pantalla;
float posX;
float velX;
PFont fuente;
int segundos = 0; 


void setup (){
  size(640,480);
  textSize(20);
  pantalla = 1;
  fuente = loadFont("Impact-20.vlw");
}  


void draw(){
  background(0);
  textFont(fuente);
  
  if (pantalla == 1 ){
    textSize(20);
    helicoptero = loadImage("helicoptero.jpg");
    image(helicoptero,0,0,640,480);
    
    
      if(posX <= 0){ 
       velX = 2;
      }
      posX = posX + velX;
       if(posX >= 580){
        velX = -2;
       }
        if (posY <= 10){
          velY = 2;
        }
         if ( posY >= 440){
         velY = -2;
         }
       
       posY = posY + velY;
       
       fill(0);
       text("Helicoptero Defiant X.\nCreado por las companias\nLockheed Martin y Boeing,\npara la U.S Army.",posX,posY);
           
        if(frameCount % 60 == 0){
           pantalla = 2;
        }
        segundos = segundos + 1;
   }

  
   else if (pantalla == 2 ){
       
       fill(#388148);
       DefiantX = loadImage("DefiantX.jpg"); 
       image(DefiantX,0,0,640,480);
    
         if(posX <= 0 ){   // borde izq.   
        velX= 2;
          }
           else if (posX >= width ){  // borde der.
             velX = -2;
           } 
        posX= posX + velX;
    
    
         text("El diseño destaca, velocidad, sistema \nde armas integral, alta tecnologia, etc;\nlo que lo hace la nueva novedad de la\nArmy Aviation Association of America.",posX,40);
    if(frameCount % 60 == 0){
           pantalla = 3;
     }
        
     segundos = segundos + 1;
  }
    else if( pantalla == 3 ){
      
      heliGuerra = loadImage("heliGuerra.jpg");
      image(heliGuerra,0,0,640,480);
      
      botton = loadImage("botton.png");
      image(botton,550,405,60,40);
      
      if(posY <= 0 ){     
        velY = 2;
      }
        else if (posY >= height){  
          velY = -2;
         } 
       posY= posY + velY;
       
      fill(#341B07);
      text("El Defiant X forma parte del \nprograma Future Long Range\nAssaul Aircraft (FLRAA) del \nEjército de Estados Unidos.",1,posY);
    }
}


void mousePressed(){
    
     if ( mouseX>550 && mouseX<610 && mouseY > 400 && mouseY < 440){
        pantalla = 1;
     }
}
