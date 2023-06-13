PImage shadow;
int tamX,tamY; 

void setup (){ 
 size(800,400);
 shadow = loadImage("shadow.jpg");
 
 tamX=67;
 tamY= 35;
 
 rectMode(CORNER);
}
void draw(){  //<>//
 background(255);
 image(shadow,0,0,400,400);
 image(shadow,400,0,400,400); //imagen de refencia 
 
 //cursor
 println(mouseX, mouseY);
 println("X:");
 println(mouseX);
 println("Y:");
 println(mouseY);
 
 
 noFill();
 translate(400,0);
 
 for(int y=0 ; y<14; y++){
   for(int x=0; x<7; x++){
     quad(0,45,  tamX,0,  tamX,tamY*y,  0,tamY*y+45);
     quad(tamX,70 ,tamX*2,22, tamX*2,tamY*y+22 , tamX,70+tamY*y );
 }
 } 
 

 

   
 }
