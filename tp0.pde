
 PImage bici; 

void setup (){
  
 size(800,400);
 background(255,252,252);
 bici = loadImage("bici.jpg");
 println("coordenadas");

}
 
void draw (){
  
   println("X:");
   println(mouseX);
   println("Y:");
   println(mouseY);
 
   image(bici,0,0,400,400);
  
 //fondo
   noStroke();
   fill(247,250,247);
   rect(400,33,400,325);
   noFill();
  
//ruedas 
   strokeWeight(3);
   stroke(227,2,47); //ROJO
   circle(630,300,100); //rueda tracera
   circle(480,300,100); //rueda delantera
   
   //Rayos 
    strokeWeight(1);
    stroke(182,188,183); //PLATEADO
   
     //traceros 
       line(458,267,503,333);
       line(449,271,509,327);
       line(468,263,480,300);
       line(490,262,480,300);
       line(501,267,480,300);
       line(508,272,480,300);
       line(515,283,480,300);
       line(519,291,480,300);
       line(519,308,480,300);
       line(515,319,480,300);
       line(492,338,480,300);
       line(446,280,480,300);
       line(443,289,480,300);
       line(440,301,480,300);
       line(442,312,480,300);
       line(446,321,480,300);
       line(469,339,480,300);
       line(454,331,480,300);
       line(481,340,480,300);
     
     //delanteros
       line(590,301,670,301);
       line(592,311,630,300);
       line(593,320,665,283);
       line(602,329,630,300);
       line(653,268,630,300);
       line(620,338,630,300);
       line(611,335,630,300);
       line(627,340,630,300);
       line(636,340,630,300);
       line(647,336,630,300);
       line(657,329,630,300);
       line(668,314,630,300);
       line(640,263,630,300);
       line(630,261,630,300);
       line(614,264,630,300);
       line(604,271,630,300);
       line(596,280,630,300);
       line(592,290,630,300);
     
   strokeWeight(8);
   stroke(252,254,255); //BLANCO
   circle(630,300,90); //camara de lantera
   circle(480,300,90); //camara tracera 

  
 //marco
   strokeWeight(3);
  
   stroke(72,170,24); //VERDE 
   line(517,220,607,220); //asiento-manubrio
   line(609,228,540,305); //manubrio-pedal
   line(540,305,515,215); //soporte del asiento
   line(480,300,540,305); //ruedaTracera-pedal 
   line(517,220,480,300); //asiento-rueda
   line(611,238,630,300); //manubrio-ruedaDelantera
   line(606,215,611,238); //manubrio
   
 //manubrio
   stroke(182,188,183); //PLATEADO
   line(606,215,604,202); 
   ellipse(606,215,3,1);
   line(604,202,610,202);
   line(610,202,613,198);
   line(511,196,515,213); //regulador asiento
   
 //pedal
   strokeWeight(2);
   
   stroke(252,254,255); //BLANCO
   circle(540,305,22); //cadena
   line(540,305,545,323); //pedal

 //accesorios
   fill(182,188,183); //PLATEADO
   stroke(182,188,183);
   circle(540,305,2); //tornillo pedal
   circle(630,300,5); //tornillo rueda delantera
   circle(480,300,5); //tornillo rueda tracera
   ellipse(514,213,3,1); //regulador asiento
   ellipse(611,238,3,1); //rueda-manubrio
   
   stroke(5,5,5); //NEGRO
   line(613,198,618,198); //manoplas
   line(480,262,480,264); //pico tracero
   line(659,320,661,322); //pico delantero
  
   stroke(227,2,47); //ROJO
   fill(227,2,47); //ROJO
   circle(613,198,2); //bocina cambios
   ellipse(515,196,27,2); //asiento
   triangle(522,197,505,198,508,200); //asiento
}
