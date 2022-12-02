const button = document.getElementById('button')
let conteggio = 0
let gameOver = false;

button.addEventListener("click", function () {
  button.innerHTML = `play ${conteggio}`
  
  if(!gameOver) {
    if (conteggio <= 10){
      conteggio++
      console.log(conteggio)
    } else {
      setTimeout(() => {
        gameOver=true
      }, 10000);

  }
  }
})