//vidas, contador,enemigos, juegos,
class juego {
  constructor () {
   // this.fondo = ImgFondo;
    this.jugador = new jugador();
    this.enemigos = [];
     
    for(let j=0; j<4; j++){
   // random() genera un número aleatorio entre 0 y height
  
     this.enemigos[j] = new enemigos(50+j*80,100) ;
    }
    this.castillo = ImgCastillo;
  }
  dibujar () {
    //IMAGE

 fill(200);
 rect(0,0,600,600);
 this.jugador.dibujar();
 this.jugador.moverDerecha();
 this.jugador.moverIzquierda();
 for (let i = 0; i <this.enemigos.length; i++) {
      this.enemigos[i].dibujar();
      this.enemigos[i].TipoImagen();
      this.enemigos[i].mover();
    }
 image(this.castillo,0,0,100,100);
    }
 
}
