
class enemigos {
  constructor (X,Y,Tipo) {
      this.X = X
      this.Y = Y
      this.velocidad=3;
      
      this.EnemigoArbol=  ImgArbol
      this.EnemigoDragon =ImgDragon
      this.EnemigoArbolConPalo = ImgArbolConPalo
      this.EnemigoCuervo =ImgCuervo
      this.EnemigoAutoRosa =ImgAutoRosa
      this.EnemigoCamion =ImgCamion
      this.EnemigoCartin = ImgCartin
     
      this.tipo = Tipo;
  
  }
dibujar() {

      if (this.tipo === 1) {
        image(this.EnemigoArbol, this.X+140,this.Y,80, 80);
      } else if (this.tipo === 2) {
        image(this.EnemigoDragon, this.X,this.Y, 80, 40);
      } else if (this.tipo === 3) {
        image(this.EnemigoArbolConPalo, this.X,this.Y, 50, 50);
      }else if (this.tipo === 4) {
        image(this.EnemigoCuervo, this.X,this.Y, 50, 50);
      }else if (this.tipo === 5) {
        image(this.EnemigoAutoRosa, this.X,this.Y, 50, 50);
      }else if (this.tipo === 6) {
        image(this.EnemigoCamion, this.X,this.Y, 50, 50);
      }else if (this.tipo === 7) {
        image(this.EnemigoCartin, this.X,this.Y, 50, 50);
      }
      
    }
  
//filas
  TipoImagen() {

    if (this.Tipo === 1) {
      this.EnemigoArbol = ImgArbol;
    } else if (this.Tipo === 2) {
      this.EnemigoDragon =ImgDragon
    } else if (this.Tipo === 3) {
      this.EnemigoArbolConPalo = ImgArbolConPalo
    }else if (this.Tipo === 4) {
      this.EnemigoCuervo =ImgCuervo
    }else if (this.Tipo === 5) {
      this.EnemigoAutoRosa =ImgAutoRosa
    }else if (this.Tipo === 6) {
       this.EnemigoCamion =ImgCamion
    }else if (this.Tipo === 7) {
       this.EnemigoCartin = ImgCartin
    }
  }  

  mover() {
    this.X += this.velocidad;
    if (this.X> width) {
      this.X = -80
    }
  }
}
