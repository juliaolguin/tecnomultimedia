function FinJuego ()  {

 image (GameOver, 90, 150, 400, 200);
 image (NewGame, 200, 400, 200, 100);
 Jugando = false

}
function llegadaFallida ()      {
 vida--;
    puntos -=100;
    posYrana = 505;
    posXrana = 260 ;
    contador = 60 ;
}
