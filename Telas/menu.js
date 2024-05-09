texto = 'RGB';

//função que mostra texto colorido
function writeColoredText(texto, r, g, b, x, y) {
      fill(r,g,b)
      textSize(200)
      text(texto, x, 150);
}


//função que mostra o menu
function showMenu() {
    background(0);
    
    
    
    time += 1;
    if (time >= 24*3) {
      time = 0;
    }
  textSize(200) //Não sei o que está acontecendo, mas se tirar isso o título para de funcionar.
    
  //faz o título do jogo
    if (time < 24*1) {
      writeColoredText('R', 255,0,0,windowWidth/2-textWidth(texto)/2, 150);
      writeColoredText('G', 0,255,0, windowWidth/2 - textWidth(texto)/6, 150)
      writeColoredText('B', 0,0,255, windowWidth/2 + textWidth(texto)/2-textWidth('B'), 150)
    }else if(time < 24*2) {
      writeColoredText('R', 0,0,255, windowWidth/2-textWidth(texto)/2, 150)
      writeColoredText('G', 255,0,0, windowWidth/2 - textWidth(texto)/6, 150)
      writeColoredText('B', 0,255,0, windowWidth/2 + textWidth(texto)/2-textWidth('B'), 150)
    }else if(time < 24*3) {
      writeColoredText('R', 0,255,0, windowWidth/2-textWidth(texto)/2, 150)
      writeColoredText('G', 0,0,255, windowWidth/2 - textWidth(texto)/6, 150)
      writeColoredText('B', 255,0,0, windowWidth/2 + textWidth(texto)/2-textWidth('B'), 150)
    }
  
  
  //botões do menu
  Jogar.show();
  Controle.show();
  Credito.show();
  Jogar.mouseOn('rgba(255,0,0,0.8)', 'red');
  Controle.mouseOn('rgba(0,255,0,0.8)', 'green');
  Credito.mouseOn('rgba(0,0,255,0.8)', 'blue');
    
  
    //muda o valor da variavel menu ao clicar no botão  
    if (mouseIsPressed && !mouse_pressed) {
      if (Jogar.mouseOn()) {
        menu = 1;
      }else if (Controle.mouseOn()) {
        menu = 2
      } else if (Credito.mouseOn()) {
        menu = 3;
      }
    }
}