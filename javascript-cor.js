let preto = document.getElementById('button-preto');
let branco = document.getElementById('button-branco');
let normal = document.getElementById('button-normal');
let verde = document.getElementById('button-verde');
let vermelho = document.getElementById('button-vermelho');
let azul = document.getElementById('button-azul');
let rosa = document.getElementById('button-rosa');
let roxo = document.getElementById('button-roxo');
let cinza = document.getElementById('button-cinza');
let amarelo = document.getElementById('button-amarelo');
let verdeClaro = document.getElementById('button-verde-claro');
let dourado = document.getElementById('button-dourado');
let laranja = document.getElementById('button-laranja');
let pretoebranco = document.getElementById('button-pretoebranco');
let azulebranco = document.getElementById('button-azulebranco');
let verdeebranco = document.getElementById('button-verdeebranco');
let body = document.querySelector('body');


   preto.onclick = function(){
    body.className = "preto";
    }
   branco.onclick = function(){
    body.className = "branco";
    }

   verde.onclick = function(){
    body.className = "verde";
    }
   vermelho.onclick = function(){
    body.className = "vermelho";
    }
   azul.onclick = function(){
    body.className = "azul";
    }
   rosa.onclick = function(){
    body.className = "rosa";
   }
   roxo.onclick = function(){
    body.className = "roxo";
   }
   cinza.onclick = function(){
    body.className = "cinza";
   }
   amarelo.onclick = function(){
    body.className = "amarelo";
   }
   verdeClaro.onclick = function(){
    body.className = "verde-claro";
   }
   dourado.onclick = function(){
    body.className = "dourado";
   }
   laranja.onclick = function(){
    body.className = "laranja";
   }
   pretoebranco.onclick = function(){
    body.className = "pretoebranco";
   }
   azulebranco.onclick = function(){
    body.className = "azulebranco";
   }
   verdeebranco.onclick = function(){
    body.className = "verdeebranco";
   }
   let cor = document.querySelector ('#cor')
   cor.addEventListener('input', (event) => {
      body.style.background = cor.value;
    });
    cor.addEventListener ('dblclick', (event) => {
      location.href = "http://127.0.0.1:5501/inicio.html";
    })
    normal.onclick = function(){
     body.className = "";
   }

   


   
