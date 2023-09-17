function lago () { // obstaculos (troncos y tortugas)
  if (Jugando == true) {
    for (let j = 0; j < 6; j++) {
      for (let i=0; i<5; i++) {

        if (i%2==1) {

          image(Tronco[i], posXtroncos[i][j], 58, 100, 50);
          image(Tronco[i], posXtroncos[i][j], 130, 105, 60); // 60
          image(Tronco[i], posXtroncos[i][j], 217, 105, 50);

          posXtroncos[i][j]++;

          if ( posXtroncos[i][j]>600) {
            posXtroncos[i][j] =-100;
          }
        } else {
          posXtroncos[i][j]--;
          image(Tortugas[i], posXtroncos[i][j], 100, 105, 40)
            image(DosTortugas[i], posXtroncos[i][j], 170, 100, 60);
          if ( posXtroncos[i][j]<-100) {
            posXtroncos[i][j] =600
          }
        }
        if (vida>0 && dist(posXtroncos[i][j], posYtroncos[i][j], posXrana, posYrana)<5) {
          vida--;
          contador =60
            posYrana = 505;
          posXrana = 260 ;
        }
      }
    }
  }
}
