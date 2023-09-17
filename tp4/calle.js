function Calle() {
if(Jugando == true)  {
  for (let j = 0; j <cantObstaculos; j++) {
    for (let i=0; i<cantFilas; i++) {

      if (i%2==1) {
        posX[i][j]++;

        image(Cartin[i], posX[i][j], 343, 40, 45);
        image(Tractor[i], posX[i][j], 416, 35, 40);
        if ( posX[i][j]>600) {
          posX[i][j] =-50;
        }
      } else {
        posX[i][j]--;
        image(CartinAmarillo[i], posX[i][j], 451, 45, 45);
        image(Auto[i], posX[i][j], 381, 40, 40);
        image(Camion[i], posX[i][j], 305, 80, 40 );
        if (posX[i][j] <-55) {
          posX[i][j] = 600;
        }
      }
      if (vida>0 && dist(posX[i][j], posY[i][j], posXrana, posYrana)<15) {
        vida--;
        contador =60
        posYrana = 505;
        posXrana = 260 ;
       
      }
    }
  }
}
}
