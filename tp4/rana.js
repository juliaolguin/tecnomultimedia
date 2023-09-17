function dibujarRana() {
  if (Jugando == true) {
    if (direccion == DERECHA) {
      image(ranaDer, posXrana, posYrana, 30, 35);
    } else if (direccion == IZQUIERDA) {
      image(ranaIzq, posXrana, posYrana, 30, 35);
    } else if (direccion == ARRIBA) {
      image(ranaArriba, posXrana, posYrana, 35, 30);
    }
  }
  
}
  
  
  
