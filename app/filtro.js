const filtro = document.getElementById('filtraGarrafa');
console.log(typeof filtro);

filtro.addEventListener('input', ()=>{
    console.log(event.target.value);
    console.log(this.value);
    if(event.target.value > 0 ){
        console.log('oi');
        botoes.forEach(Element => {
            console.log(Element);
            var garrafa = Element ;
            var nome = Element.nome
            console.log(nome);
            var nome = tdNome.textContent;
            console.log(nome);
            var expressao = new RegExp(this.value,"i");
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else {
                paciente.classList.remove("invisivel");
            }
        });}
    // } else {
    //     pacientes.forEach(element => {
    //         var paciente = element;
    //         paciente.classList.remove("invisivel");
    //     });
    // }
})