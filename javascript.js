//adicionar item de rotina---
function adicionar() {
  let ing = document.getElementById("rotina").value;
  let lista  = document.getElementById("lista").innerHTML;
  lista = lista +"<li>"+ing+"</li>"; 
  document.getElementById("lista").innerHTML = lista;
}
//--//


// horas ---
setInterval(function(){
  let novaHoraEl = new Date();
  let segundo = novaHoraEl.getSeconds(); 
  let minuto = novaHoraEl.getMinutes();
  let hora = novaHoraEl.getHours(); 
  minuto = zero(minuto);
  segundo = zero(segundo);
  document.getElementById('hora').textContent = hora+':'+minuto+':'+segundo;
},1000) 
function zero(x) {
  if (x < 10) {
      x = '0' + x;
  } return x;
}
//--//

let nomeDapessoa = document.querySelector('#ver-nome');
let nomeEl = document.querySelector ('#nome');
nomeEl.addEventListener('input', (event) => {
    nomeDapessoa.innerHTML = nomeEl.value;
});
//

