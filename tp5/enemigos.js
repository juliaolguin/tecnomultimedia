
class enemigos {
  constructor (X,Y,Tipo) {
      this.X = 250
      this.Y = 250
      this.velocidad=4;
           this.EnemigoCartin=  Imgcartin
      this.EnemigoArbol=  ImgArbol
      this.EnemigoCamion =ImgCamion
      this.EnemigoAutoRosa =ImgAutoRosa
      this.tipo = Tipo;
  
  }
  dibujar() {

    // image(this.Arvol, this.posX, this.posY, 80, 80);
    image(this.EnemigoArbol, this.X+250, 200, 80, 80);
    image(this.EnemigoCamion, this.X+66, 250, 80, 80);
    image(this.EnemigoAutoRosa, this.X, 300, 80, 80);
  }
 
  TipoImagen() {
    if (this.Tipo === 1) {
      this.EnemigoArbol = ImgArbol;
    } else if (this.Tipo === 2) {
      this.EnemigoCamion = ImgCamion;
    } else if (this.Tipo === 3) {
      this.EnemigoAutoRosa = ImgAutoRosa;
    }
  }

  mover() {
    this.X += this.velocidad;
    if (this.X> width) {
      this.X = -80
    }
  }
}
