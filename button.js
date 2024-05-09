//cria o botão de retornar
function retornar() {
    Retorno.show()
    
    Retorno.mouseOn('rgba(255,0,0,0.8)', 'red')
    if(mouseIsPressed && Retorno.mouseOn()) {
      menu = 0;
    }
}

//Classe de um botão com texto dentro, não é das melhores, mas funciona
class Button {
  constructor(x, y, w, h, texto, cor, padding, fonte) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.cor = cor;
    this.padding = padding;
    this.fonte = fonte;
    
  }
  
  //verifica se o mouse está em cima do botão e muda sua cor
  mouseOn(cor1 = null, cor2 = null) {
    if(mouseX > this.x && mouseX < this.x+this.w && mouseY > windowHeight/2-this.y && mouseY < this.h+windowHeight/2-this.y) {
      if (cor1 != null) {
        this.cor = cor1;
      }
      return true;
    }else {
      if (cor2 != null) {
        this.cor = cor2;
      } 
      return false
    }
  }
   
  
  //mostra o botão na tela
  show() {
    fill(this.cor)
    rect(this.x, windowHeight/2-this.y, this.w, this.h, 20);
    
    fill(0);
    textSize(this.fonte);
    text(this.texto, this.x+this.w/2-textWidth(this.texto)/2, windowHeight/2-this.y+this.padding, this.w, 150) 
  }
}




