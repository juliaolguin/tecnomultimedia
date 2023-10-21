//jugador (AURORA )
class jugador {
  constructor () {
    this.DERECHA = "DERECHA"
      this.IZQUIERDA = "IZQUIERDA"
      this.ARRIBA = "ARRIBA"
      this.posX = 200
      this.posY = 540
      this.PrincipeDer = ImgJugadorDer;
    this.PrincipeIzq = ImgJugadorDer;
    this.Dire = this.DERECHA;
  }
  dibujar() {
    if (this.dire == "DERECHA") {
      image(ImgJugadorDer, this.posX, this.posY,42,52);
    } else if (this.dire == "IZQUIERDA") {
      image(ImgJugadorIzq, this.posX, this.posY,60, 60);
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
  //mover() {
  //  if (direccion == DERECHA) {
  //    image(this.PrincioeDer, posX, posY, 40, 60);
  //  } else if (direccion == IZQUIERDA) {
  //    image(this.PrincipeIzq, posX, posY, 40, 60);
  //  


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


  //pierdeJugador()  {

  //}
}
