//https://www.youtube.com/watch?v=pCbbutCHIWw

const DERECHA = "DERECHA";
const IZQUIERDA = "IZQUIERDA";
const ARRIBA = "ARRIBA";
//imagenes
let fondo, rana, GameOver, InicioPlay, NewGame, Creditos, Instrucciones, Win, Pantallas;

//rana
let posYrana = 505;
let posXrana = 260 ;
let ranaDer, ranaIzq, ranaArriba;

//juego
let direccion = DERECHA;
let puntos = 0 ;
let contador= 60;
let pantalla=1;
let vida = 3;
let Jugando = true;
let TiempoFin = false;

let Y1= 5;
let Y2 =65
let GANA = [  {x1:16, x2:68, Y1, Y2},
              {x1:135, x2:195, Y1, Y2},
              {x1:275, x2:324, Y1, Y2},
              {x1:400, x2:454, Y1, Y2},
              {x1:523, x2:585, Y1, Y2}
];
let NoGANA = [ {x1:0, x2:16, Y1, Y2},
               {x1:68, x2:135, Y1, Y2},
               {x1:195, x2:275, Y1, Y2},
               {x1:324, x2:400, Y1, Y2},
               {x1:454, x2:523, Y1, Y2},
                {x1:585, x2:600, Y1, Y2}
]
let RanaGana=0;

//enemigos
let cantFilas=5;
let cantObstaculos = 3;
let posX=[];//automoviles
let posY=[];

let Auto = [];
let Camion =[];
let Cartin =[];
let Tractor =[];
let CartinAmarillo =[];
let Tronco =[];
let Tortugas =[];
let DosTortugas=[];

let posYtroncos=[];   //Posicion DE troncos Y TORTUGAS
let posXtroncos=[];


function preload() {
  Pantallas = loadImage('data/PANTALLAS.png');
  fondo = loadImage('data/fondo.png');
  InicioPlay = loadImage ('data/InicioPlay.png');
  ranaIzq = loadImage('data/rana-izq.png');
  ranaDer = loadImage('data/rana-der.png');
  ranaArriba = loadImage('data/rana-arriba.png');
  ranaWin= loadImage('data/ranawin.png');
  NewGame= loadImage ('data/NewGame.png');
  GameOver=loadImage ('data/GameOver.png');
  Win=loadImage ('data/Win.png');
  Creditos = loadImage('data/CREDITOS.png');
  Instrucciones = loadImage('data/instru.png');

  //obstaculos

  //CALLE
  for (let i=0; i<cantFilas; i++) {

    posX[i]= [];
    posY[i]= [];

    Auto[i] = loadImage('data/autoRosa.png');
    Camion[i] = loadImage('data/camion.png');
    Cartin[i] = loadImage('data/cartin.png');
    CartinAmarillo[i]= loadImage('data/cartinAmarillo.png');
    Tractor [i]= loadImage ('data/tractor.png');

    for (let j=0; j<cantObstaculos; j++) {
      posX[i][j] = (j * 120);
      posY[i][j] = (i * 40) + 305;
    }
  }
  // LAGO
  for (let i=0; i<5; i++) {
    posYtroncos[i]=[];
    posXtroncos[i]=[];

    Tronco[i]= loadImage('data/tronco.png');
    Tortugas[i]= loadImage('data/tortugas.png');
    DosTortugas[i]= loadImage('data/dostortugas.png');

    for (let j=0; j<6; j++) {
      posXtroncos[i][j] = (j * 110);
      posYtroncos[i][j] = (i)
    }
  }
}
function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  pantallas();

  for (let rect of GANA) {
    if (posYrana > Y1 && posYrana < Y2 && posXrana > rect.x1 && posXrana < rect.x2) {
      puntos += 100;
      posYrana = 505;
      posXrana = 260 ;
      RanaGana ++;
    }
  }
  for (let rect of NoGANA) {
    if (posYrana > Y1 && posYrana < Y2 && posXrana > rect.x1 && posXrana < rect.x2) {
      llegadaFallida();
    }
  }
}
 
//cambios de pantalla
function mousePressed () {
  if (pantalla == 1 && mouseX>210 && mouseX<355 && mouseY>300 && mouseY< 325 ) {
    //240,520,150,100
    pantalla = 2;
    Jugando = true ;
    TiempoFin= false;
  }  if ( mouseX>230 && mouseX<345 && mouseY>450 && mouseY< 470) {   //240, 450, 110, 25
    pantalla = 3;
  } else if(pantalla ==1 && mouseX>220 && mouseX<375&& mouseY>505 && mouseY<520 )  { //215, 500, 160, 35  
    pantalla = 4 ; 
  }else if (pantalla==2 && mouseX>210 && mouseX<380 && mouseY>400 && mouseY<470 ) { // y rana muerta200, 400, 200, 100
    //reiniciojuego
    pantalla = 1;
        vida = 3;
    puntos = 0;
    contador = 60;
    RanaGana = 0;
    posYrana = 505;
    posXrana = 260;
   
    pantalla = 1;
    Jugando = true;
    TiempoFin = false;
  }else if (pantalla == 3 && mouseX>230 && mouseX<375 && mouseY>430 && mouseY<467)  {  //creditos200, 400, 200, 100
    pantalla =1 ; 
  }else if (pantalla == 4 && mouseX>230 && mouseX<370 && mouseY>335 && mouseY<370)  {
    pantalla = 1 ;
  }
}
//movimiento de rana
function keyPressed() {
  if (Jugando == true ) {
    if (keyCode ===UP_ARROW && posYrana>60 ) {
      posYrana -=40;
      direccion = ARRIBA;
      puntos +=10;
    } else if (keyCode ===RIGHT_ARROW && posXrana< 560 && posYrana >55) {

      posXrana +=30;
      direccion = DERECHA;
    } else if (keyCode ===LEFT_ARROW && posXrana>0 && posYrana >55) {
      direccion = IZQUIERDA;
      posXrana -=30;
    }
  }
}
