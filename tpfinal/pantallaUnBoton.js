class pantallaUnBoton {
  
  constructor(fondo, siguientePantalla) {
    this.imgFondo = fondo;
    this.botonFlecha = new botonFlecha ();
    this.siguientePantalla= siguientePantalla;
  }

  dibujar() {
    image(this.imgFondo, 0, 0, 600, 600);
    this.botonFlecha.dibujar();
  }
  click(boton) {
    if (this.botonFlecha.click()) {
      return this.siguientePantalla;
    }
  }
}
