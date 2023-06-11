PImage obra;
int X,Y ;
int tamX,tamY; 
int cantX,cantY;
void setup (){ 
 size(800,400);
 obra = loadImage("obra.jpg");
 
 tamX=65;
 tamY= 35;
 cantX= 6;
 cantY= 14; 

}
void draw(){ //<>//
 background(255);
 image(obra,0,0,400,400);
//image(obra,400,0,400,400); //imagen de refencia 
 println(mouseX, mouseY);
 println("X:");
 println(mouseX);
 println("Y:");
 println(mouseY);
 
// for(int X=0 ; X<cantX; X++){
  // for(int Y=0 ; Y<cantY; Y++){
     //rotate(radians (225));
     //rect(tamX*X+400,Y*35,tamX,tamY);
      //quad(400,0,400,30,470,30,470,0);
   //}

 //}
 for(int i=0; i<tamY; i++){
 line(400,tamY,465,0);
 //line(400,81,tamX,35);
   
 }
  line(465,0,465,400);
}
