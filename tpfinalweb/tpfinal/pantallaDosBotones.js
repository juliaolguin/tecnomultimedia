class pantallaDosBotones {
  constructor(fondo, siguientePantalla, BotonHadasX, BotonHadasY, SiguientePantallaDos, BotonMaleficaX, BotonMaleficaY,textExtra) {
    this.imgFondo = fondo;
    this.siguientePantalla= siguientePantalla;
    this.botonHadas = new botonHadas(BotonHadasX, BotonHadasY);
    this.botonMalefica = new botonMalefica(BotonMaleficaX, BotonMaleficaY);
    this.SiguientePantallaDos = SiguientePantallaDos;
    this.TextExtra = textExtra;
  }
  dibujar() {
    image(this.imgFondo, 0, 0, 600, 600);
    this.botonHadas.dibujar();
    this.botonMalefica.dibujar();
    text(this.TextExtra,300,390)
  }
  click(boton) {
    if (this.botonHadas.click()) {
      return this.siguientePantalla;
    }
    if (this.botonMalefica.click()) {
      return this.SiguientePantallaDos;
    }
  }
}
