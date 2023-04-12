const btnAdd = document.getElementById('btnAdd');
const btnCalc = document.getElementById('btnCalc');
const abaCalc = document.getElementById('abaCalc');
const calcLista = document.getElementById('calcLista');
const textoTotal = document.getElementById('textTotal');
let qntGarrafa = 0;
let totalDoses = 0;
let totalLitros=0;


btnAdd.addEventListener('click', addGarrafaCalc)

btnCalc.addEventListener('click', ()=>{
    abaCalc.classList.toggle('ativo')
    menuLateral.classList.remove('ativo')
})

function addGarrafaCalc(){
    qntGarrafa += 1;
    criaGarrafa();
    contaDoseTotal();
    mostraDoseTotal();
    botaoDelete();
};

function criaGarrafa(){
    calcLista.innerHTML += `
        <li class="calculadora__lista--item">
            <h3 class="calculadora__lista--item-texto"><span class="qntGarrafa">${qntGarrafa}ª</span> Garrafa: <span id="numDose">${dose}</span> Ds</h3>
            <button id="btnDeleta" class="btn__deleta" value="${dose}">X</button>
        </li>   
    `;
};

function contaDoseTotal(){
    totalDoses += dose;
    totalLitros = (totalDoses*50)/1000;
};

function mostraDoseTotal(){
    textoTotal.innerHTML = `
        Total: ${Number(totalDoses.toFixed(2))} Ds / ${Number(((totalDoses*50)/1000).toFixed(3))} L
    `
};


function botaoDelete(){
    let nodeListe = document.querySelectorAll('#btnDeleta');
    let botoesDeleta = Array.from(nodeListe);
    botoesDeleta.forEach(botao => {
        botao.addEventListener('click',()=>{
            let elementoDelete = event.target.parentNode;
            let doseDelete = event.target.value;
            totalDoses -= doseDelete;
            elementoDelete.remove();
            mostraDoseTotal();
        } )
    });

};

function zerarCalc(){
    totalDoses = 0;
    qntGarrafa = 0;
    calcLista.innerHTML = "";
    textoTotal.innerHTML = "Total: ... Ds / ... L";
};

function addGarrafaCheia (){
    let dosesDaGarrafaSelecionada = [];
    let maiordose;
    bebidaSelecionada.doses.forEach(dose =>{
        dosesDaGarrafaSelecionada.push(dose.dose)
    });
    maiordose = Math.max.apply(null, dosesDaGarrafaSelecionada);
    console.log(maiordose);

}

// let dosesDaGarrafaSelecionada = [];
// console.log(bebida.doses);
// bebida.doses.forEach(element => {
//     dosesDaGarrafaSelecionada.push(element.dose)
// });
// maiordose = Math.max.apply(null, dosesDaGarrafaSelecionada );
// console.log(dosesDaGarrafaSelecionada);
// console.log(maiordose);



