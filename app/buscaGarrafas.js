const apiUrl = 'https://gist.githubusercontent.com/RudsonAbraao/31e20fe3e1323caf29efdf8b85a4524d/raw/afc81abeaed30ca82c92c75589baa26a22b4b22e/gordons.json';

let bebidaSelecionada;
let maiorDose = 0;

async function buscaGarrafas(botao){
    try{
        var response = await fetch(apiUrl)
        var bebidas = await response.json();
        let btn = botao.innerHTML;
        console.log(btn);
        bebidas.forEach(bebida => {
            let grfName = bebida.nome;
            if(grfName === btn){
                bebidaSelecionada = bebida;
                console.log(bebidaSelecionada)
            }
        });


    } catch(erro){
        console.log(erro);
    }
};




