const btnCalcular = document.getElementById('btn-calcular');
const doses = [{dose: 1, cm: 1.5, limite: 2.5}, {dose: 2, cm: 2.5, limite: 3.5}]



btnCalcular.addEventListener('click', ()=>{
    const medida = document.getElementById('medida').value;
    console.log(medida);
    let dose = calculoMedida(medida);
    console.log(dose);
    resultadoNaTela(dose);
});

function resultadoNaTela(dose){
    const elementoResultado = document.getElementById('calculoResposta');
    elementoResultado.innerHTML =`
    <h2>Contém ${dose} dose(s)</h2>
    `
}

function calculoMedida(cm){
    let doseDaGarrafa = 0;
    doses.forEach(dose => {
        if(cm == dose.cm){
            console.log('deu certo');
            doseDaGarrafa = dose.dose;
            console.log(doseDaGarrafa);
        } if(cm>dose.cm && cm < dose.limite){
            doseDaGarrafa = (cm - dose.cm) + dose.dose;
        }
    });
    return doseDaGarrafa
}
