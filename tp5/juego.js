//vidas, contador,enemigos, juegos,puntos
class juego {
  constructor () {

    this.jugador = new jugador();
    this.enemigos = [];
    this.tiempo  = new tiempo();
  //ciclo enemigos  
    for (let j=0; j<3; j++) {
      for (let i = 0; i < 7; i++) {
     
        let X =j * 160; 
        let Y = 50 + i * 60;
         let tipo;
         // filas
    if (i === 0) {
      tipo = 1; 
    } else if (i === 1) {
      tipo = 2; 
    } else if (i === 2) {
      tipo = 3; 
    }else if (i === 3) {
      tipo = 4; 
    }else if (i === 4) {
      tipo = 5; 
    }else if (i === 5) {
      tipo = 6; 
    }else if (i === 6) {
      tipo = 7; 
    }
    this.enemigos.push(new enemigos(X,Y,tipo));

    }
    }
    this.castillo = ImgCastillo;
    this.fondo = ImgFondo;
    this.pasto = ImgFondoPasto;
  }
  dibujar () {
    //IMAGE
    image(this.pasto,0,0,600,300);
    image(this.fondo,0,300,600,300);
   //cilo enemigos
    for (let i = 0; i <this.enemigos.length; i++) {
      this.enemigos[i].dibujar();
      this.enemigos[i].TipoImagen();
      this.enemigos[i].mover();
    }
   
    image(this.castillo, 0, 0, 150, 120);
    this.jugador.dibujar();
    this.jugador.moverDerecha();
    this.jugador.moverIzquierda();
    this.tiempo.dibujar();
  }
}
