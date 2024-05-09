let score = 0;
let gamespeed;
let sky = 128;
var spawnTime = 0;


//reinicia o jogo
function reset() {
  enemies.splice(0, enemies.length);
  score = 0;
}

//inicia o jogo
function jogar() {
  spawnTime++;
  
  //ideia de nivel, após 15 de score o background do jogo muda de cor
  if (score<15) {
    background(sky);
    fill(0)
  }else {
    if (sky>0) {
      background(sky-=5); 
    }else {
      background(0);
    }
    fill(255)
  }
  
  
  //velocidade dos inimigos
  gameSpeed = -(5 + score/10);
  
  
  //inimigos
  for(let e of enemies) {
    if (e != 0) {
      e.show();
      e.move();
    }
    
    if(enemies[enemies.indexOf(e)] == 0 && score%20==0) {
      enemies.shift();
    }
    
    if(e.posX < -50) {
      enemies[enemies.indexOf(e)] = 0;
      score++;
    }
    if(Player.touch(e) && Player.cor != e.cor) {
      menu = 4;
    }
    
  }
  
  //player
  Player.show();
  Player.move();
  
  
  //frequência em que inimigos spawnam
  if(spawnTime>=24) {
    if (random(1) < 0.5) {
      color = parseInt(random(0,3));
      if(color == 1) {
        enemies.push(new Enemy('red', gameSpeed))
      }else if(color==2) {
        enemies.push(new Enemy('green', gameSpeed))
      }else {
        enemies.push(new Enemy('blue', gameSpeed))
      }
    }
    spawnTime = 0;
  }
  
  
  //inverte a cor do score
  if(score<15) {
    textSize(50);
    fill(0);
    text(score, windowWidth/2, 50)
  }else {
    textSize(50);
    fill(255);
    text(score, windowWidth/2, 50)
  }
  
  
  //chão
  fill('grey')
  rect(0, windowHeight, windowWidth, -200)
  
  // mostra a cor que será selecionada ao clicar seta para esquerda
  fill(Player.previousCor);
  rect(100, windowHeight-150, 75, 75);
  
  //mostra a cor que será selecionada ao clicar seta para direita
  fill(Player.nextCor);
  rect(windowWidth-225, windowHeight-150, 75, 75);
   
  //mostra a cor atual do player
  fill(Player.cor);
  rect((100+windowWidth-275)/2 , windowHeight-150, 125, 125);
  
  
  
  
}