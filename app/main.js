const btnCalcular = document.getElementById('btn-calcular');


btnCalcular.addEventListener('click', ()=>{
    const medida = document.getElementById('medida').value;
    console.log(medida);
    let dose = calculoMedida(medida);
    resultadoNaTela(dose);
});

function resultadoNaTela(dose){
    const elementoResultado = document.getElementById('calculoResposta');
    elementoResultado.innerHTML =`
    <h2>Contém ${dose} dose(s)</h2>
    `
}

function calculoMedida(cm){
    let dose = 0;
    if(cm > 0 && cm < 1.5){
        dose = cm/1.5
    }
    if( cm == 1.5){
        dose = 1
    }
    if(cm > 1.5 && cm < 2.5 ){
        dose = cm - 1.5
        dose = dose + 1
    }
    if( cm == 2.5){
        dose = 2
    }
    return dose;
}