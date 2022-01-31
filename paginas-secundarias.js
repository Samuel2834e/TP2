let escolhaRespostaQuemCriouEl = document.querySelector ('#quiz-quem-criou');
escolhaRespostaQuemCriouEl.addEventListener('input', () => {
    document.querySelector('#respostapergunta').src = escolhaRespostaQuemCriouEl.value
})

let escolhaRespostaQueDiaCrieiEl = document.querySelector ('#quiz-que-dia-criei');
escolhaRespostaQueDiaCrieiEl.addEventListener('input', () => {
    document.querySelector('#respostapergunta2').src = escolhaRespostaQueDiaCrieiEl.value
})

let escolhaRespostaOqPerdiEl = document.querySelector ('#quiz-oq-eu-perdi');
escolhaRespostaOqPerdiEl.addEventListener('input', () => {
    document.querySelector('#respostapergunta3').src = escolhaRespostaOqPerdiEl.value
})

let escolhaRespostaCorEl = document.querySelector ('#quiz-cor-do-site');
escolhaRespostaCorEl.addEventListener('input', () => {
    document.querySelector('#respostapergunta4').src = escolhaRespostaCorEl.value
})