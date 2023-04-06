
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
    

   
   
    // if(filtro.value > 0 ){
    //     console.log('oi');
    //     botoes.forEach(Element => {
    //         console.log(Element);
    //         var garrafa = Element ;
    //         var nome = Element.nome
    //         console.log(nome);
    //         var nome = tdNome.textContent;
    //         console.log(nome);
    //         var expressao = new RegExp(this.value,"i");
    //         if(!expressao.test(nome)){
    //             paciente.classList.add("invisivel");
    //         }else {
    //             paciente.classList.remove("invisivel");
    //         }
    //     });}
    // } else {
    //     pacientes.forEach(element => {
    //         var paciente = element;
    //         paciente.classList.remove("invisivel");
    //     });
    // }
})