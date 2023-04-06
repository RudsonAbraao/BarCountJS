const btnMenu = document.getElementById('btnMenu');
const menuLateral = document.getElementById('menuLateral');
const bebida = document.getElementById('grfSelecionada');
let menuLista = document.getElementById('menuLista')
let garrafas = ['Ypioca', 'Smirnoff','Absolut','Bacardi','Bacardi ouro', 'Ypioca (ouro)', 'Ypioca 150', 'Ypioca 160', 'Jose Cuervo', 'Jose Cuervo (ouro)', 'Gordons', 'Cointreau', 'Jack Daniels', 'JW Red Label', 'JW Blue Label', 'Jagermeister', 'Campari', 'Jameson', 'Malibu', 'JW Black Label', 'JW Gold Label', 'Aperol', 'Stock Curaçau Blue', 'Stock Triple Sec', 'Kahlúa', 'ciroc'];

btnMenu.addEventListener('click', ativaMenu)

garrafas.sort();
criaBotoes(garrafas)
let botoes = document.querySelectorAll('.btn');
addFunctionsBotoes(botoes);




function ativaMenu(){
    menuLateral.classList.toggle('ativo')
}

function criaBotoes (lista){
    lista.forEach(element => {
        menuLista.innerHTML += `<li class="menu__lista--item btn" id="btn${element}">${element}</li>`
    });
}

function addFunctionsBotoes(Botoes){
    Botoes.forEach(botao => {
        botao.addEventListener('click', ()=>{
            ativaMenu();
            bebida.innerHTML= botao.innerHTML;
            zerarCalc();
            buscaGarrafas(botao);
        })
    });
}
