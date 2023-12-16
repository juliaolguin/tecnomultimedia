class jugador {
  constructor (posX, posY) {
    this.DERECHA = "DERECHA"
      this.IZQUIERDA = "IZQUIERDA"
      this.ARRIBA = "ARRIBA"
      this.posX = posX
      this.posY = posY
      this.Principe = ImgJugador;
    this.PrincipeDer = ImgJugadorDer;
    this.PrincipeIzq = ImgJugadorDer;
    this.Dire = this.DERECHA;
    this.vida = 3;

    this.puntos= 0;
    this.colisionado = false;
  }
  dibujar() {

    if (this.dire == "DERECHA") {
      image(ImgJugadorDer, this.posX, this.posY, 40, 40);
    } else if (this.dire == "IZQUIERDA") {
      image(ImgJugadorIzq, this.posX, this.posY, 40, 40);
    } else if (this.dire == "ARRIBA") {
      image (ImgJugador, this.posX, this.posY, 30, 40);
    } else {
      image (ImgJugador, 300, 500, 30, 40);
    }


    //puntos
    fill(255);
    textSize(20);
    text(this.puntos, 120, 590 );

    //vidas
    for (let i=0; i<this.vida; i++) {
      image (ImgJugador, 150+i*12, 565, 20, 30);
    }
  }
  // para mover
  moverDerecha() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.dire = "DERECHA";
      this.posX += 30;
    }
  }
  moverIzquierda() {

    if (keyIsDown(LEFT_ARROW)) {
      this.dire = "IZQUIERDA";
      this.posX -= 30;
    }
  }
  moverArriba() {
    if (keyIsDown(UP_ARROW)) {
      this.dire = "ARRIBA";
      this.posY -= 40;
      this.puntos +=10;
    }
  }
  // mover el principe , te llev a key de inicio
  teclaPresionada() {

    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === UP_ARROW) {
      this.moverArriba();
    }
  }

  colisionar(colisionado=true) {
    this.vida--;
    this.posX = 300;
    this.posY = 500;
  }
}
