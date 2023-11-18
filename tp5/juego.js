//vidas, contador,enemigos, juegos,puntos
class juego {
  constructor () {
    //this.castillo = ImgCastiloo;
    this.fondo = ImgFondo;
  

    this.jugador = new jugador(300,500);
    this.tiempo = new tiempo()
    this.enemigos = [];
    this.crearEnemigo();
    this.cantEnemigos= 3;
    this.cantFilas= 3
   
  }
  //cant de filas
  crearEnemigo() {
   
    for (let i=0; i<this.cantFilas; i++) {
      let Y= 300+80*i
      this.enemigos[i]= new enemigo(i*50, Y);
        if (this.direccion === 1) {
        this.X = -250;
      } else {
        this.X = 600;
      }
      
    }
  }
  dibujar() {
    //fondo
    image(this.fondo, 0, 0, 600, 600);
    
    //enemigos
//    for (let i=0; i<3; i++) {
//this.enemigo.dibujar();
//    }
    //tiempo
    this.tiempo.dibujar();
    // puntos 
   //this.puntos();
    
    
    //principe
    this.jugador.dibujar();
  }
  colision(jugador,enemigo)  {
   for (let i=0; i<3; i++) {
     
      this.enemigo[i].dibujar();
      if(dist(this.jugador.posX,this.jugador.posY,this.enemigo[i].X,this.enemigo[i].Y )<15) {
      this.jugador.colisionado = true;
      this.jugador.pierde();
     
      }
   }
  
  }
  
}
