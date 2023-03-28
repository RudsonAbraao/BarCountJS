const btnMenu = document.getElementById('btnMenu');
const bebida = document.getElementById('grfSelecionada');

let nodeListBtn = document.querySelectorAll('.btn');
const botoes = Array.from(nodeListBtn);

botoes.forEach(botao => {
    botao.addEventListener('click', ()=>{
        bebida.innerHTML= botao.innerHTML;

        bebidas.forEach(bebida => {
            if(bebida.nome === botao.innerHTML){
                bebidaSelecionada = bebida;
            }
        });
        return bebidaSelecionada;
    })
});

btnMenu.addEventListener('click', ()=>{
    menuLateral.classList.toggle('oculto');
});


