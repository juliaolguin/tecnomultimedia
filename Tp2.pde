PImage obra; //<>//
void setup ()  {
size(800,400);
obra = loadImage("obra.jpg");
//rectMode(CORNER);
}

void draw()  {
 background(200);
 //imagen de refencia 
//image(obra,400,0,400,400);
 //cursor
 println(mouseX, mouseY);
 println("X:");
 println(mouseX);
 println("Y:");
 println(mouseY);
 //dibujo 
 fill(200);
 pushMatrix();
 rectMode(CORNER);
 translate(100,253);
 
 rotate(radians(-35));
 for(int i=0; i<18;i++){
   rect(0,i*32,800,32);
 }
 
 
 popMatrix();
 
 noFill();
  for(int j=0; j<5; j++){
   rect(465,0,j*68,400);
  }
 
 image(obra,0,0,400,400);
}
