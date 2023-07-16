
void pantalla (int pantalla) {
  image(imagenesFondos[pantalla], 0, 0, 600, 600);
  if (pantalla == 0 ) {
    strokeWeight(3);
    stroke(255);
    fill(255, 255, 255, 150);
    circle(300, 300, 50);
    stroke(0);
    fill(0);
    triangle(295, 292, 310, 300, 295, 308);
    textAlign(CENTER);
    textSize(15);
    fill(0);
    text("Iniciar", 302, 340);
  } else if (pantalla ==1) {
    //interccion :boton ir siguiente
    stroke(255);
    strokeWeight(3);
    line(590, 300, 575, 285);
    line(590, 300, 575, 315);
  } else if (pantalla == 2) {
    //texto de la historia
    text("... aparecio el hada malvada Malefica-la princesa crecera llena de gracia y belleza, quien la conozca la amará-chillo Malefica- pero al cumplir 16 años ¡se pinchara el dedo con una rueca y morira!...", 15, 300, 570, 250);
    // interaccion
    text("Elige quien tomara el control... ", 155, 480);
    //dibujoBotonMalefica
    textSize(15);
    stroke(175, 163, 46);
    text("Malefica ", 335, 540); // texto boton malefica
    image(malefica, 305, 450, 70, 70); //
    //dibujoBotonHadas
    textSize(15);
    stroke(175, 163, 46);
    text("Hadas", 425, 540); // texto boton hadas
    image(hadas, 400, 450, 70, 70); //
  } else if (pantalla == 3) {
    // interaccion boton ir siguiente
    stroke(255);
    strokeWeight(3);
    line(590, 300, 575, 285);
    line(590, 300, 575, 315);
  } else if (pantalla == 4) {
    // interaccion
    text("Seguir con tu historia elegida...", 150, 160);
    image(hadas, 160, 170, 70, 70);
    image(malefica, 70, 170, 70, 70);
  } else if (pantalla == 5) {
    // interaccion boton ir siguiente
    stroke(255);
    strokeWeight(3);
    line(590, 300, 575, 285);
    line(590, 300, 575, 315);
  } else if (pantalla == 6) {
    // interaccion

    textSize(18);
    text("Continua con tu historia para un final feliz... ", 205, 400);
    image(malefica, 100, 410, 70, 70);
    image(hadas, 200, 410, 70, 70);

    text("Continua con tu historia para un final no feliz... ", 300, 500);
    image(malefica, 250, 510, 70, 70);
    image(hadas, 350, 510, 70, 70);
  } else if (pantalla == 7) {
    text("Finalizar", 470, 550);
    line(530, 545, 520, 555);
    line(530, 545, 520, 535);
  } else if (pantalla == 8) {
    // interracion boton ir siguiente
    stroke(255);
    strokeWeight(3);
    line(590, 300, 575, 285);
    line(590, 300, 575, 315);
  } else if (pantalla == 9 ) {
    // interaccion ir siguiente
    stroke(255);
    strokeWeight(3);
    line(590, 300, 575, 285);
    line(590, 300, 575, 315);
    // texto de la historia
    text("Malefica la cuido toda su vida para que se cumpla el maleficio.Al regresar las hadas le contararon la verdad y Aurora huyo al castillo.", 15, 500, 570, 200);
  } else if (pantalla == 10 ) {
    fill(0);
    stroke(0);
    text("Finalizar", 450, 460);
    line(510, 455, 500, 445);
    line(510, 455, 500, 465);
  } else if (pantalla == 11 ) {
    // interaccion ir siguiente
    fill(255);
    stroke(255);
    text("Finalizar", 450, 460);
    line(510, 455, 500, 445);
    line(510, 455, 500, 465);
  } else if (pantalla == 12 ) {
    // interaccion ir siguiente
    fill(255);
    stroke(255);
    text("Finalizar", 450, 460);
    line(510, 455, 500, 445);
    line(510, 455, 500, 465);
  } else if (pantalla == 13 ) {
    textFont(fuenteCreditos);
    if (Y >= height) {
      desplazamientoY = -1;
    }

    Y = Y+desplazamientoY;

    fill(255, 3, 154);
    text(" Olguin Maria Julia  93048/8.\nLa bella durmiente-Charles Perrault\nFuentes ilustrativas : Google imagenes, Pinterest.", 10, Y, 590, 600 );

    stroke(0);
    fill(0, 150);
    circle(500, 500, 50);
    line(495, 500, 512, 500); //palo
    line(488, 500, 502, 495);
    line (488, 500, 502, 505);
    textSize(15);
    textFont(fuenteTexto);
    text("Reiniciar", 500, 540);
  }
  //DIBUJAR TEXTO
  textAlign(CENTER);
  textSize(20);
  textLeading(20);
  fill(255);
  textFont(fuenteTexto);
  text(texto[pantalla], 15, 10, 570, 200);
}
