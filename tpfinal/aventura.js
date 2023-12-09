class aventura {
  
  constructor() {
    this.pantallas= [];
    
    this.Txt= texto
      this.crearPantallas();
    this.pantallaActual = 0 ;
    //creajuego
    this.juego= new juego(this,7,11)
  }

  dibujar() {
  //juego
    if (this.pantallaActual === 14)  {
      this.juego.dibujar();    
    }else  {  //juego
    this.pantallas[this.pantallaActual].dibujar();
    textAlign(CENTER);
    textSize(20);
    textLeading(20);
    fill(255);

    text(this.Txt[this.pantallaActual], 15, 10, 570, 200);
  }
  }
  crearPantallas() {


    this.pantallas[0]= new pantallaUnBoton(fondo0, 1) // 0a1
      this.pantallas[1]= new pantallaUnBoton(fondo1, 2)  //1a2
      this.pantallas[2]= new pantallaDosBotones (fondo2, 3, 310, 400, 8, 230, 400,"Elige que poder guiara tu aventura") // malefica 2a8  , hadas2a3
      this.pantallas[3]= new pantallaUnBoton (fondo3, 4)
      this.pantallas[4]= new pantallaDosBotones(fondo4, 5, 160, 170, 9, 70, 170) //5,9
      this.pantallas[5]= new pantallaUnBoton (fondo5, 6)
      this.pantallas[6]= new pantallaDosBotones(fondo6,14, 280, 400, 10, 360, 400,"    +Juego") //10 malefeliz,7hadasfeliz,12maletriste,12,350,510,11hadastriste image(malefica, 250, 510h, 70, 70);
      this.pantallas[7]= new pantallaUnBoton (fondo7, 13)
      this.pantallas[8]= new pantallaUnBoton (fondo8, 4)
      this.pantallas[9]= new pantallaUnBoton (fondo9, 6, 335, 500)
      this.pantallas[10]= new pantallaUnBoton (fondo10, 13)
      this.pantallas[11]= new pantallaUnBoton (fondo11, 13)
      this.pantallas[12]= new pantallaUnBoton (fondo12, 13)
      this.pantallas[13]= new pantallaUnBoton (fondo13, 0)//reinicia
  }



  click() {
    //juego
     if (this.pantallaActual === 14) {
      this.juego.iniciar();
    } else { //aventura
    let pantallaActual = this.pantallas[this.pantallaActual].click();
    console.log(pantallaActual);
    if (pantallaActual != undefined) {
      this.pantallaActual = pantallaActual;
    }
  } if (this.pantallaActual === 0) { //volver a jugar 
        this.juego.reiniciar();
      }
  }
    teclaPresionada()  {
  this.juego.teclaPresionada();
  
  }

}
