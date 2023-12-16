class botonMalefica {
  
  constructor(BotonMaleficaX, BotonMaleficaY) {
    this.BotonMaleficaX=BotonMaleficaX
      this.BotonMaleficaY= BotonMaleficaY
      this.ImgBotonMalefica = malefica;
    this.TamañoImagen= 70;
  }

  dibujar() {
    image(this.ImgBotonMalefica, this.BotonMaleficaX, this.BotonMaleficaY, this.TamañoImagen, this.TamañoImagen);//305, 450, 70, 70
  }
  
  click() {
    if (mouseX>=this.BotonMaleficaX && mouseX<this.BotonMaleficaX+this.TamañoImagen && mouseY >=this.BotonMaleficaY && mouseY<this.BotonMaleficaY+this.TamañoImagen ) {
      return true;
    }
    return false;
  }
}
