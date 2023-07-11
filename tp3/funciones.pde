// aca solo voy a tener 2 tipos de pantallas , las de texto solo y las que tienen algun boton , hacer dos variables distintas , asino vas a tenr 12 else if y es largo
void pantalla (int pantalla){
 image(imagenesFondos[pantalla], 0, 0, 600,600);
// dibuja botones
  if (pantalla == 0 ){
   stroke(255);
   fill(255,255,255,150);
   circle(300,300,50);
   fill(0);
   triangle(295,290,310,300,295,310);
   textAlign(CENTER);
   textSize(15);
   fill(255);
   text("Iniciar",300,340);
   
}
 else if (pantalla ==1){
   stroke(255);
   fill(255,255,255,150);
  
   rect(450,530,100,50);
 
 } else if (pantalla == 2)  {
    stroke(255);
   fill(255,255,255,150);
   rect(50,530,100,50);
   rect(300,300,100,50);
  
}
    else if (pantalla == 3)  {
       fill(255,255,255,150);

   rect(250,500,100,50);
    
    }   
   else if (pantalla == 4)  {
     rect(0,0,100,50);
     rect(500,0,100,50);
   }     
// }else if (pantalla == 5)  {
//   fill(0);
//   textAlign(CENTER);
//   textSize(20);
//   textLeading(20);
//   text(texto[4], 30, 10, 550, 200);
   
// }else if (pantalla == 6)  {
//   fill(0);
//   textAlign(CENTER);
//   textSize(20);
//   textLeading(20);
//   text(texto[5], 30, 10, 550, 200);
   
// }else if (pantalla == 7)  {
//   fill(0);
//   textAlign(CENTER);
//   textSize(20);
//   textLeading(20);
//   text(texto[6], 30, 10, 550, 200);
   
// }else if (pantalla == 8)  {
//   fill(0);
//   textAlign(CENTER);
//   textSize(20);
//   textLeading(20);
//   text(texto[7], 30, 10, 550, 200);
   
// }
  
  
}
