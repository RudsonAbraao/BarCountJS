const apiUrl = 'https://gist.githubusercontent.com/RudsonAbraao/eee4709da3daf6b22c7e5c782ab7801e/raw/f7151096a846db9d1ef27a83e2d72ee69a6dd396/garrafas5.0.json';

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




