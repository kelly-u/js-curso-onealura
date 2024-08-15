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

let numeroSecreto = gerarNumeroAleatorio();
let tentativas;

iniciarJogo();
exibirMensagemInicial();

function alterarTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function iniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    console.log(numeroSecreto);
}

function exibirMensagemInicial(){
    alterarTexto('h1', 'Jogo do número secreto');
    alterarTexto('p', 'Escolha um número entre 1 e 10');
    alterarTexto('h2', `Tentativas: ${tentativas}`);
}


function verificarChute(){
    //value = serve para pegar o valor daquele input.
    tentativas ++;
    alterarTexto('h2', `Tentativas: ${tentativas}`);

    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        alterarTexto('h1', 'VOCÊ ACERTOU!');
        alterarTexto('p', 'Você acertou o número secreto!');

        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else{
        alterarTexto('h1', 'ERROU!');
        if(chute > numeroSecreto){
            alterarTexto('p', 'O número é menor que o chute');
        }
        else{
            alterarTexto('p', 'O número é maior que o chute');
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    // Através do return, esse valor vai ser atribuído para a variável gerarNumeroAleatorio.
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    iniciarJogo();
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
