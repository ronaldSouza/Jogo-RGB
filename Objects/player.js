var speed = 0;
var gravity = 0.5;


class Player {
  constructor(posX, posY, alive, state) {
    this.posX = posX;
    this.posY = posY;
    this.state = state;
    this.alive = alive;
    this.state = state;
    this.cor = 'red';
    this.nextCor = 'rgba(0,255,0,0.5)';
    this.previousCor = 'rgba(0,0,255,0.5)';
    
  }
  
  //método que permite o player pular
  jump() {
    speed = -12.5;
    this.state = 'jumping';
    
  }
  //método que permite o player se mover
  move() {
    this.posY += speed;
    speed += gravity;
    this.posY = constrain(this.posY, 0, windowHeight-250)
    if (this.posY == windowHeight-250) {
      this.state = 'idle';
    }
    
  }
  
  //método que verifica se o player colidiu com algo
  touch(enemy) {
    return collideRectRect(this.posX, this.posY, 50, 50, enemy.posX, enemy.posY, 50, 50 );
  }
  
  
  //método que mostra o player
  show() {
    fill(this.cor)
    rect(this.posX, this.posY, 50, 50)
    
  }
  
  //método que muda a cor do player para a próxima
  nextColor() {
    if (this.cor == 'red'){
      this.cor = 'green';
      this.nextCor = 'rgba(0,0,255,0.5)';
      this.previousCor = 'rgba(255,0,0,0.5)';
    }else if (this.cor == 'green') {
      this.cor = 'blue';
      this.nextCor = 'rgba(255,0,0,0.5)';
      this.previousCor = 'rgba(0,255,0,0.5)';
    }else if (this.cor == 'blue') {
      this.cor = 'red';
      this.nextCor = 'rgba(0,255,0,0.5)';
      this.previousCor = 'rgba(0,0,255,0.5)';
    }
    
  }
  
  //método que muda a cor do player para a anterior
  previousColor() {
    if (this.cor == 'blue'){
      this.cor = 'green';
      this.nextCor = 'rgba(0,0,255,0.5)';
      this.previousCor = 'rgba(255,0,0,0.5)';
    }else if (this.cor == 'red') {
      this.cor = 'blue';
      this.nextCor = 'rgba(255,0,0,0.5)';
      this.previousCor = 'rgba(0,255,0,0.5)';
    }else if (this.cor == 'green'){
      this.cor = 'red';
      this.nextCor = 'rgba(0,255,0,0.5)';
      this.previousCor = 'rgba(0,0,255,0.5)';
    }
    
  }
  
}
