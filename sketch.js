let menu = 0;
let time = 0;
menuButton_w = 400;
let enemies = [];
let nuvens = [];
let mouse_pressed = false;


//imagens
function preload() {
  img = loadImage('img/Foto.jpg');
  reloadImg = loadImage('img/refresh.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Jogar = new Button(windowWidth/2-menuButton_w/2,200,menuButton_w, 150, 'Jogar', 'red', 40, 75);
  Controle = new Button(windowWidth/2-menuButton_w/2, 0, menuButton_w, 150, 'Controles', 'green', 40, 75);
  Credito = new Button(windowWidth/2-menuButton_w/2, -200, menuButton_w, 150, 'Créditos', 'blue', 40, 75);
  Retorno = new Button(0,windowHeight/2, 75, 50, '<', 'red', 0, 60) 
  
  
  PlayAgain = new Button(windowWidth/2-50, 100,100, 100, '', 'green', 40, 75);
  
  
  Player = new Player(50, windowHeight-250, true, 'idle');
  
  enemy = new Enemy(200, windowHeight-250, 'red', -3);
  
}


function keyPressed() {
  if(keyCode==UP_ARROW && Player.state=='idle') {
    Player.jump();
  }
  if(keyCode==RIGHT_ARROW) {
    Player.nextColor();
  }if(keyCode==LEFT_ARROW) {
    Player.previousColor();
  }
}

function draw() {
  if (menu == 0) {
    reset();
    showMenu();
  }else if (menu==4) {
    retornar();
    showPlayAgain();
    
  }else if (menu == 1) {
    jogar();
    retornar();
  }else if(menu == 2) {
    showControle();
    retornar();
  }else if(menu == 3) {
    showCredito();
    retornar();
  }
}