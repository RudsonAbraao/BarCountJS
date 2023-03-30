const apiUrl = 'https://gist.githubusercontent.com/RudsonAbraao/16a2bd32ba3064ddc516223b8871e30c/raw/ede8936646cfafa3896b1b2d542c6c38c372039a/garrafas2.0.json';

let bebidaSelecionada;

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

