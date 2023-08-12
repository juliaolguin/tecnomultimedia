//https://youtube.com/watch?v=kAsHVmDXNkw&feature=share
PImage obra;
int tamX, tamY;
int posX = 0;
int posY = 0;
int naranja  = color(247, 162, 2);
int amarillo = color (250, 255, 10);
int rojo = color (227, 34, 34);
int celeste = color (126, 172, 250);
int turquesa = color (33, 132, 170);
int azul = color (40, 64, 124);
int lila = color(203, 60, 221);
int violetita = color (231, 15, 247);
int verde = color (7, 232, 98);
int azulBrillante = color(2, 91, 240);
boolean colorDibujo = false;
void setup () {
  size(800, 400);
  obra = loadImage("obra.jpg");
  tamX=67;
  tamY= 35;
  rectMode(CENTER);
}

void draw() {
  background(255);
  image(obra, 0, 0, 400, 400);
  frameRate(10);

  dibujo(6, 13);
}

void keyPressed() {

  if (key == '1') {
    for (int i=0; i<6; i++) {
      for (int j=-1; j<13; j++) {

        if (i==1 && j==0 ) {
          fill(naranja);
        } else if (i==1 && j==1) {

          fill (amarillo);
        } else if (i==1 && j==2) {
          fill (rojo);
        } else if (i==1 && j<4) {
          fill (rojo);
        } else if (i==1 && j==4) {
          fill (celeste);
        } else if (i==1 && j==5) {
          fill (turquesa);
        } else if (i==1 && j==6) {
          fill (celeste);
        } else if (i==1 && j==7) {
          fill (rojo);
        } else if (i==1 && j==8) {
          fill (azul);
        } else if (i==1 && j==9) {
          fill (celeste);
        } else if (i==1 && j==10) {
          fill (azul);
        } else if (i==1 && j==11) {
          fill (lila);
        } else if (i==1 && j==12) {
          fill (rojo);
        } else if (i==2 && j==0) {
          fill (azul);
        } else if (i==2 && j==1) {
          fill (celeste);
        } else if (i==2&& j<5 && j >1) {
          fill (azul);
        } else if (i==2 && j== 5 ) {
          fill (naranja);
        } else if (i==2 && j==6) {
          fill (amarillo);
        } else if (i==2 && j==7) {
          fill (celeste);
        } else if (i==2 && j== 8) {
          fill (naranja);
        } else if (i==2 && j<11) {
          fill (violetita);
        } else if (i==2 && j== 11) {
          fill (verde);
        } else if (i==2 && j==12) {
          fill (lila);
        } else if (i==3 && j == 0 ) {
          fill(violetita);
        } else if (i==3 && j == 1) {
          fill(rojo);
        } else if (i==3 && j == 2) {
          fill(turquesa);
        } else if (i==3 && j == 3) {
          fill(255);
        } else if (i==3 && j == 4) {
          fill(azul);
        } else if (i==3 && j == 5) {
          fill(rojo);
        } else if (i==3 && j == 6) {
          fill(255);
        } else if (i==3 && j<9) {
          fill(33, 132, 170);
        } else if (i==3 && j<9) {
          fill(turquesa);
        } else if (i==3 && j == 9) {
          fill(amarillo);
        } else if (i==3 && j ==10 ) {
          fill(violetita);
        } else if (i==3 && j == 11) {
          fill(azul);
        } else if (i==3&& j == 12) {
          fill(azulBrillante);
        } else if (i==4 && j == 0) {
          fill(azulBrillante);
        } else if (i==4&& j == 1) {
          fill(azul);
        } else if (i==4 && j == 2) {
          fill(azulBrillante);
        } else if (i==4 && j == 3) {
          fill(azul);
        } else if (i==4&& j == 4) {
          fill(verde);
        } else if (i==4 && j == 5) {
          fill(azul);
        } else if (i==4 && j == 6) {
          fill(celeste );
        } else if (i==4 && j == 7) {
          fill(turquesa );
        } else if (i==4 && j == 8) {
          fill(naranja );
        } else if (i==4 && j == 9) {
          fill(rojo );
        } else if (i==4 && j == 10) {
          fill(turquesa );
        } else if (i==4 && j == 11) {
          fill(255 );
        } else if (i==4&& j == 12) {
          fill(celeste);
        } else if (i==5 &&j == 0) {
          fill(lila);
        } else if (i==5 &&j == 1) {
          fill(violetita);
        } else if (i==5 &&j == 2) {
          fill(amarillo);
        } else if (i==5 &&j <5) {
          fill(lila);
        } else if (i==5 &&j == 5) {
          fill(azulBrillante);
        } else if (i==5 &&j == 6) {
          fill(rojo);
        } else if (i==5 &&j == 7) {
          fill(celeste);
        } else if (i==5 &&j == 8) {
          fill(255);
        } else if (i==5 &&j == 9) {
          fill(lila);
        } else if (i==5 &&j == 10) {
          fill(turquesa);
        } else if (i==5 &&j == 11) {
          fill(azul);
        } else if (i==5 &&j == 12) {
          fill(verde);
        } else if (i==0 && j==0) {
          fill(azulBrillante);
        } else if (i==0 &&j == 1) {
          fill(azul);
        } else if (i==0 && j == 2) {
          fill(azulBrillante);
        } else if (i==0 &&j == 3) {
          fill(naranja);
        } else if (i==0 &&j == 4) {
          fill(azulBrillante);
        } else if (i==0 && j<8) {
          fill(azul);
        } else if (i==0 &&j == 8) {
          fill(celeste);
        } else if (i==0 &&j == 9) {
          fill(amarillo);
        } else if (i==0 &&j == 10) {
          fill(rojo);
        } else if (i==0 &&j == 11) {
          fill(celeste);
        } else if (i==0 &&j == 12) {
          fill(azul);
        }

        quad( i*67, j*35,
          i*67 + 67, j*35 -tamY,
          i*67 + 67, j*35 + 35-tamY,
          i*67, j*35 + 35
          );
      }
    }
  } 
  if (key == '2') {
    for (int i=0; i<6; i++) {
      for (int j=-1; j<13; j++) {

        if (i==2 && j==0 ) {
          fill(naranja);
        } else if (i==2 && j==1) {

          fill (amarillo);
        } else if (i==2 && j==2) {
          fill (rojo);
        } else if (i==2&& j<4) {
          fill (rojo);
        } else if (i==2&& j==4) {
          fill (celeste);
        } else if (i==2 && j==5) {
          fill (turquesa);
        } else if (i==2 && j==6) {
          fill (celeste);
        } else if (i==2 && j==7) {
          fill (rojo);
        } else if (i==2 && j==8) {
          fill (azul);
        } else if (i==2 && j==9) {
          fill (celeste);
        } else if (i==2 && j==10) {
          fill (azul);
        } else if (i==2 && j==11) {
          fill (lila);
        } else if (i==2 && j==12) {
          fill (rojo);
        } else if (i==3 && j==0) {
          fill (azul);
        } else if (i==3 && j==1) {
          fill (celeste);
        } else if (i==3&& j<5 && j >1) {
          fill (azul);
        } else if (i==3 && j== 5 ) {
          fill (naranja);
        } else if (i==3 && j==6) {
          fill (amarillo);
        } else if (i==3 && j==7) {
          fill (celeste);
        } else if (i==3 && j== 8) {
          fill (naranja);
        } else if (i==3 && j<11) {
          fill (violetita);
        } else if (i==3 && j== 11) {
          fill (verde);
        } else if (i==3 && j==12) {
          fill (lila);
        } else if (i==4 && j == 0 ) {
          fill(violetita);
        } else if (i==4 && j == 1) {
          fill(rojo);
        } else if (i==4 && j == 2) {
          fill(turquesa);
        } else if (i==4 && j == 3) {
          fill(255);
        } else if (i==4 && j == 4) {
          fill(azul);
        } else if (i==4 && j == 5) {
          fill(rojo);
        } else if (i==4 && j == 6) {
          fill(255);
        } else if (i==4 && j<9) {
          fill(33, 132, 170);
        } else if (i==4 && j<9) {
          fill(turquesa);
        } else if (i==4 && j == 9) {
          fill(amarillo);
        } else if (i==4 && j ==10 ) {
          fill(violetita);
        } else if (i==4 && j == 11) {
          fill(azul);
        } else if (i==4&& j == 12) {
          fill(azulBrillante);
        } else if (i==5 && j == 0) {

          fill(azulBrillante);
        } else if (i ==5 && j == 1) {
          fill(azul);
        } else if (i==5&& j == 2) {
          fill(azulBrillante);
        } else if (i==5&& j == 3) {
          fill(azul);
        } else if (i==5&& j == 4) {
          fill(verde);
        } else if (i==5 && j == 5) {
          fill(azul);
        } else if (i==5 && j == 6) {
          fill(celeste );
        } else if (i==5 && j == 7) {
          fill(turquesa );
        } else if (i==5 && j == 8) {
          fill(naranja );
        } else if (i==5 && j == 9) {
          fill(rojo );
        } else if (i==5 && j == 10) {
          fill(turquesa );
        } else if (i==5 && j == 11) {
          fill(255 );
        } else if (i==5&& j == 12) {
          fill(celeste);
        } else if (i==0 &&j == 0) {
          fill(lila);
        } else if (i==0 &&j == 1) {
          fill(violetita);
        } else if (i==0 &&j == 2) {
          fill(amarillo);
        } else if (i==0&&j <5) {
          fill(lila);
        } else if (i==0 &&j == 5) {
          fill(azulBrillante);
        } else if (i==0 &&j == 6) {
          fill(rojo);
        } else if (i==0 &&j == 7) {
          fill(celeste);
        } else if (i==0&&j == 8) {
          fill(255);
        } else if (i==0 &&j == 9) {
          fill(lila);
        } else if (i==0 &&j == 10) {
          fill(turquesa);
        } else if (i==0 &&j == 11) {
          fill(azul);
        } else if (i==0 &&j == 12) {
          fill(verde);
        } else if (i==1 && j==0) {
          fill(azulBrillante);
        } else if (i==1 &&j == 1) {
          fill(azul);
        } else if (i==1 && j == 2) {
          fill(azulBrillante);
        } else if (i==1 &&j == 3) {
          fill(naranja);
        } else if (i==1 &&j == 4) {
          fill(azulBrillante);
        } else if (i==1 && j<8) {
          fill(azul);
        } else if (i==1 &&j == 8) {
          fill(celeste);
        } else if (i==1 &&j == 9) {
          fill(amarillo);
        } else if (i==1 &&j == 10) {
          fill(rojo);
        } else if (i==1 &&j == 11) {
          fill(celeste);
        } else if (i==1 &&j == 12) {
          fill(azul);
        }

        quad( i*67, j*35,
          i*67 + 67, j*35 -tamY,
          i*67 + 67, j*35 + 35-tamY,
          i*67, j*35 + 35
          );
      }
    }
  }
   else if (key == '3') {
    for (int i=0; i<6; i++) {
      for (int j=0; j<13; j++) {
        noStroke();
        if (i==0   ) {
          fill(255);
        } else if (i==1) {
          fill(amarillo);
        } else if (i==2) {
          fill(turquesa);
        } else if (i==3) {
          fill(verde);
        } else if (i==4) {
          fill(violetita);
        } else if (i==5) {
          fill(rojo);
        } else if (i==6) {
          fill(azul);
        }
        quad( i*tamX, j*tamY,
          i*tamX + tamX, j*tamY -tamY,
          i*tamX + tamX, j*tamY + tamY-tamY,
          i*tamX, j*tamY + tamY
          );
      }
    }
  }
  else if (key=='4') {

    for (int i=0; i<6; i++) {
      for (int j=0; j<13; j++) {
        fill(0);
        stroke(255);
        quad( i*tamX, j*tamY,
          i*tamX + tamX, j*tamY -tamY,
          i*tamX + tamX, j*tamY + tamY-tamY,
          i*tamX, j*tamY + tamY
          );
      }
    }
  }
}

void mousePressed() {
  stroke(255);
  int mouse = int(map(mouseX, 0, width, 0, 800));
  if (mouse > 0 && mouse < 67 ) {

    fill(verde);
    for (int i=0; i<1; i++) {
      for (int j=0; j<13; j++) {
        quad( i*tamX, j*tamY,
          i*tamX + tamX, j*tamY -tamY,
          i*tamX + tamX, j*tamY + tamY-tamY,
          i*tamX, j*tamY + tamY
          );
      }
    }
  } else if (mouse>67 && mouse <134 ) {

    for (int i=0; i<2; i++) {
      for (int j=0; j<13; j++) {
        if (i==0 ) {
          fill(verde);
        } else if (i==1 ) {

          fill (amarillo);
        }
        quad( i*tamX, j*tamY,
          i*tamX + tamX, j*tamY -tamY,
          i*tamX + tamX, j*tamY + tamY-tamY,
          i*tamX, j*tamY + tamY
          );
      }
    }
  } else if (mouse>134 && mouse <201) {

    for (int i=0; i<3; i++) {
      for (int j=0; j<13; j++) {
        if (i==0 ) {
          fill(verde);
        } else if (i==1 ) {

          fill (amarillo);
        } else if (i==2 ) {

          fill (naranja);
        }
        quad( i*tamX, j*tamY,
          i*tamX + tamX, j*tamY -tamY,
          i*tamX + tamX, j*tamY + tamY-tamY,
          i*tamX, j*tamY + tamY
          );
      }
    }
  } else if (mouse>201 && mouse <268) {

    for (int i=0; i<4; i++) {
      for (int j=0; j<13; j++) {
        if (i==0 ) {
          fill(verde);
        } else if (i==1 ) {

          fill (amarillo);
        } else if (i==2 ) {

          fill (naranja);
        } else if (i==3 ) {

          fill (turquesa);
        }
        quad( i*tamX, j*tamY,
          i*tamX + tamX, j*tamY -tamY,
          i*tamX + tamX, j*tamY + tamY-tamY,
          i*tamX, j*tamY + tamY
          );
      }
    }
  } else if (mouse>268 && mouse <335) {

    for (int i=0; i<5; i++) {
      for (int j=0; j<13; j++) {
        if (i==0 ) {
          fill(verde);
        } else if (i==1 ) {

          fill (amarillo);
        } else if (i==2 ) {

          fill (naranja);
        } else if (i==3 ) {

          fill (turquesa);
        } else if (i==4 ) {

          fill (lila);
        }
        quad( i*tamX, j*tamY,
          i*tamX + tamX, j*tamY -tamY,
          i*tamX + tamX, j*tamY + tamY-tamY,
          i*tamX, j*tamY + tamY
          );
      }
    }
  } else if (mouse>335 && mouse <402) {

    for (int i=0; i<6; i++) {
      for (int j=0; j<13; j++) {
        if (i==0 ) {
          fill(verde);
        } else if (i==1 ) {

          fill (amarillo);
        } else if (i==2 ) {

          fill (naranja);
        } else if (i==3 ) {

          fill (turquesa);
        } else if (i==4 ) {

          fill (lila);
        } else if (i==5 ) {

          fill (rojo);
        }
        quad( i*tamX, j*tamY,
          i*tamX + tamX, j*tamY -tamY,
          i*tamX + tamX, j*tamY + tamY-tamY,
          i*tamX, j*tamY + tamY
          );
      }
    }
  }
  if (colorDibujo && mouse>400 && mouse<800) {
    colorDibujo = false;
  } else if ( mouse>400 && mouse<800) {
    colorDibujo = true;
  }
}
