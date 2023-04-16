
const filtro = document.getElementById('filtraGarrafa');
const listaBebidas = document.getElementById('menuLista');

filtro.addEventListener('input', ()=>{


    botoes.forEach(element => {
        let nome = element.innerHTML;
        let expressao = new RegExp(filtro.value,"i");

        if(!expressao.test(nome)){
            element.classList.add('invisivel')
        } else{
            element.classList.remove('invisivel')
        }
    });
});