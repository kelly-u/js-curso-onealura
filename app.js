/*//COLOCAR TUDO NUMA FUNÇÃO PARA EVITAR REPETIÇÃO DE CÓDIGO

// Aqui eu digo que quero alterar o documento e quero selecionar a tag 'h1'. Depois eu vou usar essa variavel onde toda instrução está (titulo)
let titulo = document.querySelector('h1');
// É como "dentro do HTML", ele coloca pra dentro de titulo, neste caso o h1, o que está depois do "=".
titulo.innerHTML = 'Jogo do número secreto';

// Aqui eu digo que quero alterar o documento e quero selecionar a tag 'p'. Depois eu vou usar essa variavel onde toda instrução está (paragrafo)
let paragrafo = document.querySelector('p');
// É como "dentro do HTML", ele coloca pra dentro de paragrafo, neste caso o p, o que está depois do "=".
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

//Aqui as funções são até mais fáceis. Nem preciso informar o tipo do parâmetro
function alterarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

alterarTexto('h1', 'Jogo do número secreto');
alterarTexto('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    console.log("O botão foi clicado!");
}
