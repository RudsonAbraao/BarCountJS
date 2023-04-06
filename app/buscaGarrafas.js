const apiUrl = 'https://gist.githubusercontent.com/RudsonAbraao/defe057a928835fdd711404f5f85d839/raw/6d26390c75f274361cf1aec888c66a2e8efb11fe/garrafas4.0.json';

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

