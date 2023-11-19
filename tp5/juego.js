//vidas, contador,enemigos, juegos,puntos
class juego {
  constructor () {
    this.jugando = false
    this.fondo = ImgFondo;
    this.castillo= ImgCastillo;
    this.play = ImgPlay;
    this.gana = ImgGanar;
    
    this.pierde = ImgPerder;
    this.jugador = new jugador(300, 500);
    this.tiempo = new tiempo()
 
    

    this.crearEnemigo();
  }
  dibujar() {
    //fondo
    if (this.jugando == false) {
      image (this.play, 0, 0, 600, 600)
    } else {
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

  // iniciar juego  te lleva al mousepressed
  iniciar() {
    if (mouseX>210 && mouseX<355 && mouseY>300 && mouseY< 325 ) {
      this.jugando = true ;
    }
  }
  
//fin del juego 
  ganar() {
    if (this.jugador.posY <50) {
      image(this.gana, 200, 200, 200, 200)
        this.gano = true
    }
  }

  perder() {
    if (this.gano ==  false  && this.tiempo.tiempoLimite == this.tiempo.tiempo) {
      image(this.pierde, 200, 200, 200, 200)
    }
  }
  
  
 colision(enemigo) {
   for (let i = 0; i < this.enemigos.length; i++) {
  
    if( dist(this.jugador.posX, this.jugador.posY, this.enemigos[i].posX, this.enemigos[i].posY)<5)  {
    this.jugador.colisionar();
    
    }

 
 }
}
 
}
