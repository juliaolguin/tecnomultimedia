// (principe)
class jugador {
  constructor (posX, posY) {
    this.DERECHA = "DERECHA"
      this.IZQUIERDA = "IZQUIERDA"
      this.ARRIBA = "ARRIBA"
      this.posX = posX
      this.posY = posY
      this.PrincipeDer = ImgJugadorDer;
    this.PrincipeIzq = ImgJugadorDer;
    this.Dire = this.DERECHA;
    this.vida = 3 ;
    this.puntos =0 ;
    this.colisionado = false;
  }
  dibujar() {
    if (this.colisionado==false) {
      if (this.dire == "DERECHA") {
        image(ImgJugadorDer, this.posX, this.posY, 50, 50);
      } else if (this.dire == "IZQUIERDA") {
        image(ImgJugadorIzq, this.posX, this.posY, 50, 50);
      }
    }
  }

  moverDerecha() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.dire = "DERECHA";
      this.posX += 10;
    }
  }
  moverIzquierda() {

    if (keyIsDown(LEFT_ARROW)) {
      this.dire = "IZQUIERDA";
      this.posX -= 10;
    }
  }
  moverArriba() {
    if (keyIsDown(UP_ARROW)) {
      this.dire = "ARRIBA";
      this.posY -= 40;
      puntos +=  10
    }
  }


  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      Objuego.jugador.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      Objuego.jugador.moverDerecha();
    } else if (keyCode === UP_ARROW) {
      Objuego.jugador.moverArriba();
    }
  }
puntos ()  {
 fill(255);
    textSize(20);
    text(this.puntos, 115, 590 );
}
  pierde() {
//vida --, tiempo = 60
    this.jugador.posX = 300
    this.jugador.posY = 500
    this.tiempo = 60;
  }
}
