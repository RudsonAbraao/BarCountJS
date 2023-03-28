const elementoResultado = document.getElementById('calculoResposta');
const btnCalcular = document.getElementById('btn-calcular');
const ypioca = {nome: 'ypioca',doses:[{dose: 1, cm: 1.5, limite: 2.5},
    {dose: 2, cm: 2.5, limite: 3.5},
    {dose: 3, cm: 3.5, limite: 4.5},
    {dose: 4, cm: 4.5, limite: 5.8},
    {dose: 5, cm: 5.8, limite: 6.8},
    {dose: 6, cm: 6.8, limite: 7.8},
    {dose: 7, cm: 7.8, limite: 8.8},
    {dose: 8, cm: 8.8, limite: 9.8},
    {dose: 9, cm: 9.8, limite: 11}, 
    {dose: 10, cm: 11, limite: 12},
    {dose: 11, cm: 12, limite: 13},
    {dose: 12, cm: 13, limite: 14},
    {dose: 13, cm: 14, limite: 15},
    {dose: 14, cm: 15, limite: 16},
    {dose: 15, cm: 16, limite: 17},
    {dose: 16, cm: 17, limite: 18},
    {dose: 17, cm: 18, limite: 19.5},
    {dose: 18, cm: 19.5, limite: 23},
    {dose: 19, cm: 23, limite: 0}]}
const smirnoff = {nome: 'smirnoff', doses:[{dose: 1, cm: 2.5, limite: 3.5}]}

let bebidaSelecionada = '';
const bebidas = [ypioca, smirnoff]

btnCalcular.addEventListener('click', ()=>{
    const medida = document.getElementById('medida').value;
    let dose = calculoMedida(medida,bebidaSelecionada);
    resultadoNaTela(dose);
});

function resultadoNaTela(dose){
    elementoResultado.innerHTML =`
    <h2 class="resposta">Contém ${dose} dose(s)</h2>
    <h2 class="resposta">Contém ${parseInt(dose*50)} ml</h2>
    `
}

function calculoMedida(cm, bebida){
    let doseDaGarrafa = 0;
    bebida.doses.forEach(dose => {
        if(cm == dose.cm){
            console.log('deu certo');
            doseDaGarrafa = dose.dose;
            console.log(doseDaGarrafa);
        } if(cm>dose.cm && cm < dose.limite){
            doseDaGarrafa = (cm - dose.cm) / (dose.limite - dose.cm) + dose.dose;
        }
    });
    return Number(doseDaGarrafa.toFixed(2))
}


