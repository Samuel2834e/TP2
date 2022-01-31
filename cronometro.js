//-cronometro--
let horas = 0;
let minutos = 0;
let segundos = 0;
let millisegundos = 0;
let cronometro;
document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  cronometro = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cronometro);
}

function reset() {
  horas = 0;
  minutos = 0;
  segundos = 0;
  millisegundos = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if (minutos == 60) {
    minutos = 0;
    horas++;
}
  if (segundos == 60) {
    segundos = 0;
    minutos++;
}
  if ((millisegundos += 10) == 1000) {
    millisegundos = 0;
    segundos++;
}
  document.getElementById('minute').innerText = returnData(minutos);
  document.getElementById('second').innerText = returnData(segundos);
  document.getElementById('hour').innerText = returnData(horas);
  document.getElementById('millisecond').innerText = returnData(millisegundos);
}
function returnData(input) {
  return input > 10 ? input : `0${input}`
}
//----

