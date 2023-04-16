const btnAddGrfCheia = document.getElementById('btnAddGrfCheia');
const btnAdd = document.getElementById('btnAdd');
const btnCalc = document.getElementById('btnCalc');
const abaCalc = document.getElementById('abaCalc');
const calcLista = document.getElementById('calcLista');
const textoTotal = document.getElementById('textTotal');
const input = document.getElementById('medida');

let qntGarrafa = 0;
let totalDoses = 0;
let totalLitros=0;
let maiorDose = 0;

btnAddGrfCheia.addEventListener('click', addGarrafaCheia)

btnAdd.addEventListener('click', addGarrafaCalc)

btnCalc.addEventListener('click', ()=>{
    abaCalc.classList.toggle('ativo')
    menuLateral.classList.remove('ativo')
})

function addGarrafaCalc(){
    qntGarrafa += 1;
    criaGarrafa();
    contaTotal();
    mostraTotal();
    botaoDelete();
};

function addGarrafaCheia(){
    qntGarrafa += 1;
    pegaMaiorDose();
    criaGarrafaCheia();
    contaDosecheia();
    mostraTotal();
    botaoDelete();
}

function criaGarrafa(){
    calcLista.innerHTML += `
        <li class="calculadora__lista--item">
            <h3 class="calculadora__lista--item-texto"><span class="qntGarrafa">${qntGarrafa}ª</span> Garrafa: <span id="numDose">${dose}</span> Ds</h3>
            <button id="btnDeleta" class="btn__deleta" value="${dose}">X</button>
        </li>   
    `;
};

function criaGarrafaCheia(){
    calcLista.innerHTML += `
        <li class="calculadora__lista--item">
            <h3 class="calculadora__lista--item-texto"><span class="qntGarrafa">${qntGarrafa}ª</span> Garrafa: <span id="numDose">${maiorDose}</span> Ds</h3>
            <button id="btnDeleta" class="btn__deleta" value="${maiorDose}">X</button>
        </li>   
    `;
}

function contaDosecheia(){
    totalDoses += maiorDose;
}

function contaTotal(){
    totalDoses += dose;
    totalLitros = (totalDoses*50)/1000;
};

function mostraTotal(){
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
            mostraTotal();
        } )
    });

};

function pegaMaiorDose(){
    let dosesDaGarrafaSelecionada = [];
    bebidaSelecionada.doses.forEach(dose =>{
        dosesDaGarrafaSelecionada.push(dose.dose)
    });
    maiorDose = Math.max.apply(null, dosesDaGarrafaSelecionada);
}

function zerarCalc(){
    totalDoses = 0;
    qntGarrafa = 0;
    input.value = "";
    calcLista.innerHTML = "";
    textoTotal.innerHTML = "Total: ... Ds / ... L";
    elementoResultado.innerHTML= `
        <h2 class="resposta">Contém ... dose(s)</h2>
        <h2 class="resposta">Contém ... ml</h2>
    `
};



