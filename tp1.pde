PImage helicoptero, DefiantX, heliGuerra, botton;
float posY, posX, velY, velX; //PANTALLA 1 
float X, movimientoX; // PANTALLA 2 
float Y, desplazamientoY; //PANTALLA 3 
PFont fuente1, fuente2 , fuente3; 
int pantalla;
int tiempo = 0; 


void setup (){
 size(640,480);
 background(0);
 pantalla = 1;
 fuente1 = loadFont("Impact-20.vlw");
 fuente2 = loadFont("Broadway-20.vlw");
 fuente3 = loadFont("MalgunGothic-20.vlw");
 helicoptero = loadImage("helicoptero.jpg"); //imagen pantalla1
 DefiantX = loadImage("DefiantX.jpg"); // imagen pantalla2
 heliGuerra = loadImage("heliGuerra.jpg"); //imagen pantalla3
 botton = loadImage("botton.png"); 
 
}  

void draw(){
  
 if(tiempo == 180){
   pantalla = 2;
  } 
   if(tiempo == 360){
     pantalla = 3; 
    }
 tiempo = tiempo + 1;
//pantallas
  if (pantalla == 1 ){
     textFont(fuente1);
     image(helicoptero,0,0,640,480);
    
     if(posX <= 0){  
       velX = 1;
      }
      
       if(posX >= 320){
        velX = -1;
       }
        if (posY <= 0){
         velY = 1;
        }
         if ( posY >= 400){
         velY = -1;
         }
       
       fill(52, 27, 7);
       text("'Defiant X' es nombrado el helicoptero \n  creado por las compañias Lockheed \n    Martin y Boeing para la U.S Army.",posX,posY);
    
    posX = posX + velX;
    posY = posY + velY;    

   }
     else if (pantalla == 2 ){
       textFont(fuente2);
       fill(56, 129, 72);
       image(DefiantX,0,0,640,480);
       
        if(X<=0  ){
          movimientoX = 1; 
        }
          else if (X >= 325){ 
             movimientoX = -1;
           } 
        
       text("El diseño destaca, velocidad, sistema \n de armas integral, nueva tecnologia,\n   y demas; lo que lo hace la nueva \n     novedad de la Army Aviation \n        Association of America.",X,40);
       
       X = X + movimientoX;
      }
       else if( pantalla == 3 ){
         textFont(fuente3);
        image(heliGuerra,0,0,640,480);
        image(botton,550,405,60,40);
       
        if(Y <= 0 ){     
          desplazamientoY = 1;
        }
          else if (Y >= height){  
            desplazamientoY = -1;
          } 
       
        fill(0);
        text("'Defiant X' forma parte del \nprograma Future Long Range\nAssaul Aircraft (FLRAA) del \nEjército de Estados Unidos.",5,Y);
    
        Y = Y + desplazamientoY;
       }
}

void mousePressed(){
   
 if ( mouseX>550 && mouseX<610 && mouseY > 405 && mouseY < 445){
     
   pantalla = 1;
   tiempo = 0 ; 
 }
}
