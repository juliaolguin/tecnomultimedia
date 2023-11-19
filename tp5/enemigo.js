
class enemigo {
  constructor (posX, posY) {
    this.posX = posX
      this.posY = posY
      this.velocidad=1;
// imagenes enemigos 
    this.EnemigoArbol=  ImgArbol
      this.EnemigoDragon =ImgDragon
      this.EnemigoArbolConPalo = ImgArbolConPalo
      this.EnemigoCuervo =ImgCuervo
      this.EnemigoAutoRosa =ImgAutoRosa
      this.EnemigoCamion =ImgCamion
      this.EnemigoCartin =ImgCartin
  }
  dibujar() {
    image(this.EnemigoCartin, this.posX, this.posY, 40, 45);
    image(this.EnemigoAutoRosa, this.posX, this.posY+80, 40, 40);
    image(this.EnemigoCamion, this.posX, this.posY+165, 80, 40);
    image(this.EnemigoCuervo, this.posX, this.posY-155, 30, 30);
    image(this.EnemigoArbolConPalo, this.posX, this.posY-85, 50, 50);
    image (this.EnemigoArbol, this.posX, this.posY-240, 40, 40);

    this.mover();
  }

  mover() {
    this.posX -= this.velocidad;
    if (this.posX<-250) {
      this.posX = 600
    }
  }
 
}
