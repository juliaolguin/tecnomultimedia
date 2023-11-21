 let obAventura;
 let fondo0,fondo1,fondo2,fondo3,fondo4,fondo5,fondo6,fondo7,fondo8,fondo9,fondo10,fondo11;  
 function preload (){
 fondo0= loadImage("data/fondo0.jpg");
  fondo1= loadImage("data/fondo1.jpg");  
  fondo2= loadImage("data/fondo2.jpg");  
  fondo3= loadImage("data/fondo3.jpg");  
fondo4= loadImage("data/fondo4.jpg");  
fondo5= loadImage("data/fondo5.jpg");  
fondo6= loadImage("data/fondo6.jpg");  
fondo7= loadImage("data/fondo7.jpg");  
fondo8= loadImage("data/fondo8.jpg");  
fondo9= loadImage("data/fondo9.jpg");  
fondo10= loadImage("data/fondo10.jpg");  
fondo11= loadImage("data/fondo11.jpg");  
}


function setup() {
createCanvas(600, 600);
obAventura = new aventura ();
}


function draw() {
  obAventura.dibujar();
}
