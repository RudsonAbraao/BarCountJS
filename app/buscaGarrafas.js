const apiUrl = 'https://gist.githubusercontent.com/RudsonAbraao/15380be47de2a6759bafbb1864c3d763/raw/b710be476afc1093ca9d47e18c0cfac3af2837ad/garrafas.json';

let bebidaSelecionada;

async function buscaGarrafas(botao){
    try{
        var response = await fetch(apiUrl)
        var bebidas = await response.json();
        let btn = botao.innerHTML;
        bebidas.forEach(bebida => {
            let grfName = bebida.nome;
            if(grfName === btn){
                bebidaSelecionada = bebida;
            }
        });


    } catch(erro){
        console.log(erro);
        alert('Verifique a conexão com a internet!')
    }
};




