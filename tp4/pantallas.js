function pantallas() {
  if ( pantalla === 2 ) {
    image (fondo, 0, 0, 600, 605);
    obstaculos();
    fill(255);
    textSize(20);
    text(contador, 470, 590 );
    if (frameCount % 60 == 0) {
      contador--;
    }
    image(rana, posX, posY, 35, 30);
  } else if (pantalla === 1) {
    image (InicioPlay, 0, 0, 600, 600);
  }
}
