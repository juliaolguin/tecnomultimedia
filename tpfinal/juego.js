class juego {
  constructor (aventura, SiguientePantallaGanar, SiguientePantallaPerder) {
    this.jugando = false
      this.fondo = ImgFondo;
    this.castillo= ImgCastillo;

    this.jugador = new jugador(300, 500);
    this.tiempo = new tiempo()
      this.ganar();
    this.perder();
    this.crearEnemigo();

    //conexion con aventura
    this.aventura=aventura;
    this.SiguientePantallaGanar = SiguientePantallaGanar;
    this.SiguientePantallaPerder =SiguientePantallaPerder;
  }
  dibujar() {
    if (this.jugando==true) {
      image(this.fondo, 0, 0, 600, 600);
      image(this.castillo, 0, 0, 600, 70);

      //principe
      this.jugador.dibujar();

      //enemigos
      for (let i=0; i<4; i++) {
        this.enemigos[i].dibujar();
      }

      //tiempo
      this.tiempo.dibujar();

      //fin del juego
      this.ganar()
        this.perder()
        this.colision();
    }
  }

  crearEnemigo() {
    this.enemigos = [];

    for (let i=0; i<5; i++) {
      this.enemigos[i]= new enemigo(i*205, 300);
    }
  }

  //iniciar juego  te lleva al mousepressed
  iniciar() {
    this.jugando = true;
  }
  //fin del juego
  ganar() {
    if (this.jugador.posY < 50) {
      this.aventura.pantallaActual = this.SiguientePantallaGanar;
    }
  }

  perder() {
    if (!this.gano  && this.tiempo.tiempoLimite == this.tiempo.tiempo || this.jugador.vida <= 0) {
      this.aventura.pantallaActual = this.SiguientePantallaPerder;
    }
  }
  //para volver a jugar al reiniciar aventura
  reiniciar() {
    this.jugador.vida = 3;
    this.jugador.posX = 300;
    this.jugador.posY = 500;
    this.tiempo.tiempo = 60;
    this.tiempo.tiempoLimite = 0;
  }

  //enemigos
  colision(enemigo) {
    for (let i = 0; i < this.enemigos.length; i++) {

      if ( dist(this.jugador.posX, this.jugador.posY, this.enemigos[i].posX, this.enemigos[i].posY)<5) {
        this.jugador.colisionar();
      }
    }
  }

  // mover jugador
  teclaPresionada() {
    this.jugador.teclaPresionada();
  }
}
