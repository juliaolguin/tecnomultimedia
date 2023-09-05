function dibujarRana()  {
  if (direccion == ARRIBA) {
  image(ranaArriba, posX, posY);
} else if (direccion == DERECHA) {
  image(ranaDer, posX, posY);
} else if (direccion == IZQUIERDA) {
  image(ranaIzq, posX, posY);
}
}
