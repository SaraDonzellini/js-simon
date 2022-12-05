const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
let conteggio = 0;
tempo.innerHTML = conteggio;
let isClockStarted = false;
let clock;

start.addEventListener('click', function () {
  if (isClockStarted) {
    return;
  }
    isClockStarted = true;
    clock = setInterval(() => {
    conteggio++;
    console.log(conteggio);
    tempo.innerHTML = conteggio;
  }, 100);

});

pause.addEventListener('click', function () {
  clearInterval(clock);
  tempo.innerHTML = conteggio;
  isClockStarted = false;
});
reset.addEventListener('click', function () {
  conteggio = 0;
  tempo.innerHTML = conteggio;
});
