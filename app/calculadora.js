const btnCalc = document.getElementById('btnCalc');
const abaCalc = document.getElementById('abaCalc');
const btnAdd = document.getElementById('btnAdd');
const calcLista = document.getElementById('calcLista');
const textoTotal = document.getElementById('textTotal');
let botoesDeleta;
let qntGarrafa= 0;
let totalDoses = 0


btnAdd.addEventListener('click', addGarrafaCalc)

btnCalc.addEventListener('click', ()=>{
    abaCalc.classList.toggle('ativo')
})

function addGarrafaCalc(){
    qntGarrafa += 1;
    contaDoseTotal();
    botaoDelete();
    console.log(totalDoses);
    console.log(qntGarrafa);
    mostraDoseTotal();
    calcLista.innerHTML += `
        <li class="calculadora__lista--item">
            <h3 class="calculadora__lista--item-texto">${qntGarrafa}ª Garrafa: <span id="numDose">${dose}</span> Ds</h3>
            <button id="btnDeleta" value="${dose}">X</button>
        </li>   
    `
    botaoDelete();
    pegaDose(dose);
    console.log(calcDoses);
}

function contaDoseTotal(){
    totalDoses += dose;
}

function zerarCalc(){
    totalDoses = 0;
    qntGarrafa = 0;
    calcLista.innerHTML = "";
    textoTotal.innerHTML = "Total: ... Ds";
}

function botaoDelete(){
    let nodeListe = document.querySelectorAll('#btnDeleta');
    botoesDeleta = Array.from(nodeListe);
    botoesDeleta.forEach(botao => {
        botao.addEventListener('click',()=>{
            console.log(event.target.value);
            
            let elementoDelete = event.target.parentNode;
            let nodeList = document.querySelectorAll('#numDose');
            let doseDelete = event.target.value;
            totalDoses -= doseDelete;
            elementoDelete.remove();
            console.log(totalDoses);
            mostraDoseTotal();
        } )
    });
    console.log(botoesDeleta);



}
let calcDoses = [];

function pegaDose(dose){
    calcDoses.push(dose);
}

function mostraDoseTotal(){
    textoTotal.innerHTML = `
        Total: ${totalDoses} Ds
    `
}

