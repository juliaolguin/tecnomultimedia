//vidas, contador,enemigos, juegos,puntos
class juego {
  constructor () {
    //this.castillo = ImgCastiloo;
    this.fondo = ImgFondo;
    // this.pasto = ImgFondoPasto;

    this.jugador = new jugador(500, 500);
    this.tiempo = new tiempo()
    
      this.crearEnemigo();
  }
  //cant de filas
  crearEnemigo() {
    this.enemigo = [];
    for (let i=0; i<3; i++) {
      let Y= 300+80*i
        if (this.direccion === 1) {
        this.X = -250;
      } else {
        this.X = 600;
      }
      this.enemigo[i]= new enemigo(i*50, Y);
    }
  }
  dibujar() {
    //fondo
    image(this.fondo, 0, 0, 600, 600);
    //principe
    this.jugador.dibujar();
    //enemigos
    for (let i=0; i<3; i++) {
      this.enemigo[i].dibujar();
      this.enemigo[i].mover();
    }
    //tiempo
    this.tiempo.dibujar();
    // puntos 
    fill(255);
    textSize(20);
    text(this.puntos, 115, 590 );
  }
}
