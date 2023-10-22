// (principe)
class jugador {
  constructor () {
    this.DERECHA = "DERECHA"
      this.IZQUIERDA = "IZQUIERDA"
      this.ARRIBA = "ARRIBA"
      this.posX = 200
      this.posY = 400
      this.PrincipeDer = ImgJugadorDer;
    this.PrincipeIzq = ImgJugadorDer;
    this.Dire = this.DERECHA;
  }
  dibujar() {
    
    if (this.dire == "DERECHA") {
      image(ImgJugadorDer, this.posX, this.posY,50,50);
    } else if (this.dire == "IZQUIERDA") {
      image(ImgJugadorIzq, this.posX, this.posY,50, 50);
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
  moverArriba () {
    this.posY -= 40;
   
  }


  teclaPresionada() {
    if (keyCode == LEFT_ARROW) {
      this.posX -= 10;
    } else if (keyCode == RIGHT_ARROW) {
      this.dire = "DERECHA"
        this.posX += 10;
    } else if (keyCode == UP_ARROW) {
      this.dire = "IZQUIERDA"
        this.posY -= 10;
    }
  }


  //cuando dibujar al perder ?
}
