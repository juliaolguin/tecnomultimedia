class botonHadas  {
  
 constructor(BotonHadasX,BotonHadasY) {
  this.BotonHadasX= BotonHadasX
  this.BotonHadasY=BotonHadasY
  this.ImgBotonHadas = hadas;
  this.TamañoImagen = 70;
  }

  dibujar() {  
    image(this.ImgBotonHadas,this.BotonHadasX,this.BotonHadasY,70,70);
  }
  click() {
    if(mouseX>=this.BotonHadasX && mouseX<this.BotonHadasX+this.TamañoImagen && mouseY >=this.BotonHadasY && mouseY<this.BotonHadasY+this.TamañoImagen ) { 
      return true;
     }
      return false;
  }
}
