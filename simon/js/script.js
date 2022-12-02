const button = document.getElementById('button');
let conteggio = 0;
let gameOver = false;

button.addEventListener("click", function () {
  
  
  if(!gameOver) {
    if (conteggio < 10){
      conteggio++;
      button.innerHTML = `Play ${conteggio}`;
    } else {
      gameOver=true;

      setTimeout(() => {
        gameOver=false;
        conteggio = 0;
        button.innerHTML = `Play ${conteggio}`;
      }, 4000);

  }
  }
})

