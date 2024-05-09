class Enemy {
  constructor(cor, speed) {
    this.cor = cor;
    this.speed = speed;
    this.posX = windowWidth;
    this.posY = windowHeight-250;
  }
  
  //método que move o inimigo
  move() {
    this.posX += this.speed;
  }
  
  //método que spawna o inimigo
  show() {
    fill(this.cor);
    rect(this.posX, this.posY, 50, 50)
    
  }
  
  
}