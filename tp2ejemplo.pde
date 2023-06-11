PImage shadow;
int X,Y ;
int tamX,tamY; 
int cantX,cantY;
void setup (){ 
 size(800,400);
shadow = loadImage("shadow.jpg");
 
 tamX=70;
 tamY= 35;
 cantX= 8;
 cantY= 20; 
rectMode(CORNER);
}
void draw(){ //<>//
 background(255);
 //image(obra,0,0,400,400);
image(shadow,400,0,400,400); //imagen de refencia 
 println(mouseX, mouseY);
 println("X:");
 println(mouseX);
 println("Y:");
 println(mouseY);
 noFill();
 translate(200,110);
 rotate(radians (-34));
 for(int X=0 ; X<cantX; X++){
   for(int Y=0 ; Y<cantY; Y++){
     
     rect(tamX*X,Y*35,tamX,tamY);
     //quad(400,45,469,0,466,36,400,80);
   }

 }
 //for(int i=0; i<tamY; i++){
 //line(400,tamY,465,0);
 //line(400,81,tamX,35);
   
 }
