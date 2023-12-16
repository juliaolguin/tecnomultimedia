class botonFlecha {
  
  constructor(BotonX, BotonY) {
    this.BotonX= 520
      this.BotonY= 300
      this.ImgFlecha = flecha;
  }

  dibujar() {
    push();
    imageMode(CENTER)
      image(this.ImgFlecha, this.BotonX, this.BotonY, 50, 50);
    pop();
  }
  click() {
    let D = dist(mouseX, mouseY, this.BotonX, this.BotonY);
    let R =25;
    if (D<R) {
      return true;
    }
    return false;
  }
}
