
window.addEventListener("load",eventLoad);

var botaoJogar; // global para ser visivel em todos os escopos/funcoes
var corDoBotao = 0; // se 0 cor branca, 1 outra cor


function eventLoad(){
    botaoJogar = document.getElementById("jogar");
    botaoJogar.addEventListener("click",iniciar);
    botaoJogar.addEventListener("mouseover",mudarcorbotao); // nao precisa usar o ON na frente
    botaoJogar.addEventListener("mouseout",mudarcorbotao);
}

function iniciar(){
    alert("O JOGO VAI COMEÇAR!");
}

function mudarcorbotao(){
    // 0 se cor original
    // 1 se cor alterada
    if(corDoBotao == 0){
        botaoJogar.style.backgroundColor = "#1e90ff";
        corDoBotao = 1;
    }
    else{
        botaoJogar.style.backgroundColor = "white";
        corDoBotao = 0; // cor original
    }

}