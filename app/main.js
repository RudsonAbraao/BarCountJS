
const elementoResultado = document.getElementById('calculoResposta');
const btnCalcular = document.getElementById('btn-calcular');
let dose = 0;
let maiorMedida;





btnCalcular.addEventListener('click', ()=>{
    let medida = document.getElementById('medida').value;
    dose = calculoMedida(medida,bebidaSelecionada);
    resultadoNaTela(dose);
});

function resultadoNaTela(dose){
    elementoResultado.innerHTML =`
    <h2 class="resposta">Contém ≈ ${Number(dose.toFixed(2))} dose(s)</h2>
    <h2 class="resposta">Contém ≈ ${Number((dose*50).toFixed(2))} ml</h2>
    `
}


function calculoMedida(cm, bebida){
    pegaMaiorMedida(bebida.doses)
    // console.log(maiorMedida);
    // bebida.doses.forEach(dose => {
    //     if(cm == dose.inicio){
    //         console.log('deu certo');
    //         doseDaGarrafa = dose.dose;
    //         console.log(doseDaGarrafa);
    //     } if(cm>dose.inicio && cm < dose.fim){
    //         doseDaGarrafa = (cm - dose.inicio) / (dose.fim - dose.inicio) + dose.dose;
    //     }
    // });
    //-------------------------------------------------------------------
    bebida.doses.forEach((element, index)=>{
        let doseInicio = element.cm;
        if(index < bebida.doses.length-1){
            var doseFim = bebida.doses[index+1].cm;
        }
        if(cm == doseInicio){
            doseDaGarrafa = element.dose;
        }
        if(cm > doseInicio && cm < doseFim){
            doseDaGarrafa = (cm - doseInicio) / (doseFim - doseInicio) + element.dose;
        }
        if(cm > maiorMedida || cm <= 0){
            doseDaGarrafa = 0;
        }
    })



    return Number(doseDaGarrafa.toFixed(2))
}

function pegaMaiorMedida(array){
    let medidas = [];
    array.forEach(element => {
        medidas.push(element.cm)
    });
    maiorMedida = Math.max.apply(null, medidas);
}






// const bebidas = [ypioca, smirnoff]

// const smirnoff = {nome: 'smirnoff', doses:[{dose: 1, cm: 2.5, limite: 3.5}]}

// const ypioca = {nome: 'ypioca',doses:[{dose: 1, cm: 1.5, limite: 2.5},
//     {dose: 2, cm: 2.5, limite: 3.5},
//     {dose: 3, cm: 3.5, limite: 4.5},
//     {dose: 4, cm: 4.5, limite: 5.8},
//     {dose: 5, cm: 5.8, limite: 6.8},
//     {dose: 6, cm: 6.8, limite: 7.8},
//     {dose: 7, cm: 7.8, limite: 8.8},
//     {dose: 8, cm: 8.8, limite: 9.8},
//     {dose: 9, cm: 9.8, limite: 11}, 
//     {dose: 10, cm: 11, limite: 12},
//     {dose: 11, cm: 12, limite: 13},
//     {dose: 12, cm: 13, limite: 14},
//     {dose: 13, cm: 14, limite: 15},
//     {dose: 14, cm: 15, limite: 16},
//     {dose: 15, cm: 16, limite: 17},
//     {dose: 16, cm: 17, limite: 18},
//     {dose: 17, cm: 18, limite: 19.5},
//     {dose: 18, cm: 19.5, limite: 23},
//     {dose: 19, cm: 23, limite: 0}]}