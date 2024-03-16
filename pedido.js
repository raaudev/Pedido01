let botaoNao = document.getElementById('nao');
let altura = window.innerHeight - 50;
let largura = window.innerWidth - 50;

    botaoNao.addEventListener('mouseover', function() {
      botaoNao.style.position = "absolute";
      botaoNao.style.top = Math.random() * altura + "px";
      botaoNao.style.left = Math.random() * largura + "px";
    });