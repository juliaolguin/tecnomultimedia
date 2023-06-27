PImage portada ; 
int []pantalla = new int[12];

void setup (){
size(600,600);
portada= loadImage("portada.jpg");
}
 
 
void draw (){


 pantalla[1] = image(portada,0,0,600,600);
}
