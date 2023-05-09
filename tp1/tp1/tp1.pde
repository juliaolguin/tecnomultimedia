PImage helicoptero, DefiantX, heliGuerra, heli, defix, defiantt, DEFIANTXX, botton;
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
  background(255);
  textFont(fuente);
  
  if (pantalla == 1 ){
    textSize(20);
    helicoptero = loadImage("helicoptero.jpg");
    image(helicoptero,0,0,640,480);
    
    
      if(posY <= 30 ){   // borde superior, porque no empiza del valor que le digo  
        velY = 5;
      }
        else if (posY >= 310){  // borde inferior
          velY = -5;
         } 
       posY= posY + velY;
       fill(0);
       text("Helicoptero Defiant X.\nCreado por las companias\nLockheed Martin y Boeing,\npara la U.S Army.",20,posY);
}
  
   else if (pantalla == 2 ){
       
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
      
      defix = loadImage("defix.jpg");
      image(defix,300,20,310,200);
      
      heliGuerra = loadImage("heliGuerra.jpg");
      image(heliGuerra,10,10,300,240);
      
      defiantt = loadImage("defiantt.jpg");
      image(defiantt,320,200,300,200);
      
      heli = loadImage("heli.jpg");
      image(heli,220,240,180,200);
      
      DEFIANTXX = loadImage("DEFIANTXX.jpg");
      image (DEFIANTXX,15,285,230,180);
      
      botton = loadImage("botton.png");
      image(botton,550,405,60,40);
      
      
      if(posX <= 0){ 
       velX = 3;
      }
      posX = posX + velX;
      if(posX >= width){
        velX = -3;
      }
       if (posY <= 10){
          velY = 3;
       }
        if ( posY >= 410){
         velY = -3;
       }
       
       posY = posY + velY;
       
      fill(0);
      text("El Defiant X forma parte del \nprograma Future Long Range\nAssaul Aircraft (FLRAA) del \nEjército de Estados Unidos.",posX,posY);
     

     }
}

void mousePressed(){
    //botton,550,400,60,40
     if ( mouseX>550 && mouseX<610 && mouseY > 400 && mouseY < 440){
     pantalla = 1;
     }
}



void mouseClicked(){
  if (pantalla == 1 ){
    pantalla = pantalla + 1;
  }
  else if (pantalla == 2 ){  pantalla = pantalla + 1;
     }   
}    
  
