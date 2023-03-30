const btnMenu = document.getElementById('btnMenu');
const menuLateral = document.getElementById('menuLateral');

const bebida = document.getElementById('grfSelecionada');
let nodeListBtn = document.querySelectorAll('.btn');
const botoes = Array.from(nodeListBtn);


btnMenu.addEventListener('click', ()=>{
    menuLateral.classList.toggle('ativo');
});

botoes.forEach(botao => {
    botao.addEventListener('click', ()=>{
        bebida.innerHTML= botao.innerHTML;
        buscaGarrafas(botao)
    })
});



// botoes.forEach(botao => {
//     botao.addEventListener('click', ()=>{
//         bebida.innerHTML= botao.innerHTML;

//         bebidas.forEach(bebida => {
//             if(bebida.nome === botao.innerHTML){
//                 bebidaSelecionada = bebida;
//             }
//         });
//         return bebidaSelecionada;
//     })
// });