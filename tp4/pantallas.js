function pantallas() {
  if (pantalla === 1) {
    image (InicioPlay, 0, 0, 600, 600);
  } else if ( pantalla === 2 ) {
    image (fondo, 0, 0, 600, 605);
    fill(255);
    textSize(20);
    text(contador, 470, 595 );
    if (frameCount % 60 == 0) {
      contador--;
    }
    fill(255);
    textSize(20);
    text(puntos, 115, 595 );
    dibujarRana();
    image(auto,50,420,30,30);
  }else if (pantalla === 3 )  {
    image (GameOver,160,190,250,100);
   
  
  }
  
   
}
