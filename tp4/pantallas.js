function pantallas() {
 if (pantalla === 1) {
    image (InicioPlay, 0, 0, 600, 600);
  }else if ( pantalla === 2 ) {
    image (fondo, 0, 0, 600, 605);
    fill(255);
    textSize(20);
    text(contador, 470, 590 );
    if (frameCount % 60 == 0) {
      contador-- ;
    }

  }
}
