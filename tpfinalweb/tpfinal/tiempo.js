class tiempo {
  
  constructor() {
    this.tiempo = 60;
    this.tiempoLimite = 0;
  }
  dibujar() {
    if (frameCount % 60 == 0 && this.tiempo > this.tiempoLimite ) {
      this.tiempo --;
    }
    
    fill(255);
    textSize(25);
    text(this.tiempo, 490, 592 );
  }
}
