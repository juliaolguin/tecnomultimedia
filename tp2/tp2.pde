// https://youtu.be/RXLEilWM1Pw

PImage obra;
int tamX,tamY; 
int posX = 0;
int posY = 0;
int naranja  = color(247,162,2);
int amarillo = color (250,255,10);
int rojo = color (227,34,34);
int celeste = color (126,172,250);
int turquesa = color (33,132,170);
int azul = color (40,64,124);
int lila = color(203,60,221);
int violetita = color (231,15,247);
int verde = color (7,232,98);
int azulBrillante = color(2,91,240);


void setup (){ 
 size(800,400);
 obra = loadImage("obra.jpg");
 tamX=67;
 tamY= 35;
 rectMode(CENTER);
}

void draw(){ 
 background(255);
 image(obra,0,0,400,400);
 
 println(mouseX, mouseY);
 println("X:");
 println(mouseX);
 println("Y:");
 println(mouseY);
 
 
 hacerObra();
}
void mouseClicked(){
  posX = floor(map(mouseX, 400, 800, 0, 6));
  posY = floor(map(mouseY, 0, 400, 0, 13));

}  


 
