function pantallas() {
  if (pantalla === 1) {
    image (InicioPlay, 0, 0, 600, 600);
    image(Creditos, 240, 450, 110, 25);
    image(Instrucciones, 215, 500, 160, 35);
  } else if ( pantalla === 2 && Jugando ==true) {



    image (fondo, 0, 0, 600, 600);

//puntos
    fill(255);
    textSize(20);
    text(puntos, 115, 590 );
//contador
    text(contador, 473, 590 );
    if (frameCount % 60 == 0 ) {
      contador--;
    }

    Calle();
    lago();
    dibujarRana();
   
//VIDASdeRANA

    for (let i=0; i<vida; i++) {
      image(ranaArriba, i *20+10, 550, 20, 20);
    }
    for (let i = 0; i < RanaGana; i++) {
      image(ranaArriba, 160+ 35*i, 575, 30, 20);
    }
if (RanaGana>=5)  {
 image (Win, 200, 200, 200, 100);
 Jugando = false;
 image (NewGame, 200, 400, 200, 100);
}

   // si no jugo 
    if (contador <=0  && puntos == 0 ) {
      Jugando = false ;
      FinJuego ()
        TiempoFin= true
    }
    //si pierde 3 vidas
    else if (vida <= 0  ) {
      Jugando = false ;
      FinJuego ()
        TiempoFin= true
    }
    //si pasa el tiempo y jugo
    else if (vida>0 && contador <=0  ) {
      Jugando = false ;
      TiempoFin= true
      FinJuego ()
    }
  } else if (pantalla === 3 ){
   image(Pantallas,0,0,600,600)
   image(NewGame, 200, 400, 200, 100);
   fill(255);
   textSize(25);
   text('Tecnologia Multimedial: Tp4\n     Julia Olguin 93048/8',130,300);
  }else if (pantalla === 4){
  image(Pantallas,0,0,600,600)
  image(NewGame, 200, 300, 200, 100);
  textSize(25);
  fill(255);
  text ('Usa las teclas de flecha para mover las ranas  \n  hasta que lleguen cada una a su Camalote,\n                   al otro lado del rio.',55,250);
  }
  
  
}
