void pantalla (int pantalla){
 image(imagenesFondos[pantalla], 0, 0, 600,600);
// dibuja botones
  if (pantalla == 0 ){
     stroke(255);
     fill(255,255,255,150);
     circle(300,300,50);
     fill(255);
     triangle(295,290,310,300,295,310);
     textAlign(CENTER);
     textSize(15);
     fill(255);
     text("Iniciar",300,340);
   
}
 else if (pantalla==1){
   textAlign(CENTER);
   textSize(30);
   fill(0);
   for (int i = 0; i < texto.length; i++) {
    text(texto[i], 300, i * 30 + 50);
   }
  // text("Hace mucho tiempo,un rey y una reina tuvieron \nuna hija, llamada Aurora. Fauna, una de sus tres \nhadas madrina le regalo el don de la belleza,\nFlora, le dio el don del canto, pero \ncuando le toco regalarle a Primavera..",300,100);
  // 
  //  textAlign(CENTER);
  //  textSize(20);
  //  fill(0);
  
 }
  
}
