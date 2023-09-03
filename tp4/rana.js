function dibujarRana() {
  if (direccion == DERECHA) {
    image(ranaDer[round(Sprite)], posX, posY);
  } else if (direccion == IZQUIERDA) {
    image(ranaIzq[round(Sprite)], posX, posY);
  }
}


function SiguienteSprite() {
  if (direccion == DERECHA) {
    if (Sprite >= cantImg-1) {
      Sprite = 0;
    } else {
      Sprite+=0.1;
    }
  } else if (direccion == IZQUIERDA) {
    if (Sprite < 0) {
      Sprite = cantImg-1;
    } else {
      Sprite-=0.1;
    }
  }
}
