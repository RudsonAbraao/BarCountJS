const apiUrl = 'https://gist.githubusercontent.com/RudsonAbraao/b6fc3b9d69ec4c6f45828761f8ca95ec/raw/77d5e524c618520248085036ad7a46a1cb74fd23/garrafas.json';

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
}





botoes.forEach(botao => {
    botao.addEventListener('click', ()=>{
        bebida.innerHTML= botao.innerHTML;
        buscaGarrafas(botao)
    })
});