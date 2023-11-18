
class enemigo{
  constructor (X,Y) {
      this.X = X
      this.Y = Y
      this.velocidad=1;
       //this.EnemigoArbol=  ImgArbol
      //this.EnemigoDragon =ImgDragon
      //this.EnemigoArbolConPalo = ImgArbolConPalo
      //this.EnemigoCuervo =ImgCuervo
      //this.EnemigoAutoRosa =ImgAutoRosa
      //this.EnemigoCamion =ImgCamion
      this.EnemigoCartin =ImgCartin
      //this.EnemigoTractor =ImgTractor
     
   
  }
dibujar() {
     image(this.EnemigoCartin,this.X+50,this.Y,40,45);
     image(this.EnemigoAutoRosa,this.X+110,this.Y,40,40);
     image(this.EnemigoCamion,this.X+170,this.Y,80,40);
   //image(this.EnemigoCuervo,this.X+250,this.Y,25,25);
    // image (this.EnemigoTractor,this.X,this.Y,40.45)
     this.mover();
}
  
  

  mover() {
    this.X -= this.velocidad;
    if (this.X<-250) {
 this.X = 600
  
    }
  }
}
