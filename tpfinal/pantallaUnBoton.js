class pantallaUnBoton () {
  constructor() {
    this.imagfondo1 = fondo1;
    this.imagfondo2 = fondo2;
    this.imagfondo3 = fondo3;
    this.imagfondo5 = fondo5;
    this.imagfondo6 = fondo6;
    this.imagfondo7 = fondo7;
    this.imagfondo8 = fondo8;
    this.imagfondo9 = fondo9;
    this.imagfondo10 = fondo10;
    this.imagfondo11 = fondo11;
    this.boton = new Unboton ();
  }


  dibujar() {

    image(imgFondo1, 0, 0, 600, 600);
    image(imgFondo3, 0, 0, 600, 600);
    image(imgFondo5, 0, 0, 600, 600);
    image(imgFondo6, 0, 0, 600, 600);
    image(imgFondo7, 0, 0, 600, 600);
    image(imgFondo8, 0, 0, 600, 600);
    image(imgFondo9, 0, 0, 600, 600);
    image(imgFondo10, 0, 0, 600, 600);
    image(imgFondo11, 0, 0, 600, 600);
  }
  click()  {  
  this.UnBoton.click()
  
}
}
