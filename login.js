//salvar email e senha no storange
let email = document.querySelector ('#email');
let button = document.querySelector ('#button-login');
button.addEventListener ('click', function(){
localStorage.setItem('email', email.value);
localStorage.getItem('');
});
let senha = document.querySelector ('#senha');
button.addEventListener ('click', function(){
localStorage.setItem('senha', senha.value);
localStorage.getItem('');
});


//-botao para levar ao site--
document.getElementById("button-login").onclick = function () {
    location.href = "http://127.0.0.1:5501/inicio.html";
  };
  //--//

