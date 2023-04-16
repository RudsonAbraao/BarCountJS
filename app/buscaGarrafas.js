const apiUrl = 'https://gist.githubusercontent.com/RudsonAbraao/fa1a9a5f587cf01bac0df13d7597e54d/raw/0360d3e34c3b95b2b4ef3b6ba8db5eec4fa7d16e/garrafas5.1-teste.json';

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




