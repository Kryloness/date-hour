function horarioBr() {
  var dataAtual = new Date();
  var elementoCont = document.getElementById("cont");
  var dataFormatada = dataAtual.toLocaleString();

  elementoCont.setAttribute("placeholder", dataFormatada);
}

// Função para disparar o evento de clique no botão automaticamente
function clickAutomatico() {
  var botaoHorario = document.getElementById("horario");

  botaoHorario.click(); // Disparar o evento de clique no botão
}

window.addEventListener("load", clickAutomatico); // Chamar a função para clicar automaticamente assim que a página for carregada

var intervalo = setInterval(clickAutomatico, 1000); // Configurar um intervalo para clicar automaticamente a cada 1 segundos (2000 milissegundos)

/*setTimeout(function() { // funcao para parar de contar apos um horario especifico (10 sec)
    clearInterval(intervalo);
}, 100000) */