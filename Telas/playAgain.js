// mostra tela de jogar de novo, quando player morre
function showPlayAgain() {
  fill(227,215,189);
  rect(windowWidth/2-200, windowHeight/2-150, 400, 300);
  
  PlayAgain.show();
  image(reloadImg, windowWidth/2-50, windowHeight/2-100, 100, 100);
  
  PlayAgain.mouseOn('rgba(0,255,0, 0.8)', 'green');
  
    textSize(50);
    fill(0);
    text('Score:'+score, windowWidth/2-textWidth('Score:'+score)/2, windowHeight/2+100)
  
  if(mouseIsPressed) {
    if(PlayAgain.mouseOn()) {
      menu = 1;
      reset();
    }else if (Retorno.mouseOn()) { 
      menu = 0;
    }
  }
   
}