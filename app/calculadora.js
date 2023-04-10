const btnAdd = document.getElementById('btnAdd');
const btnCalc = document.getElementById('btnCalc');
const abaCalc = document.getElementById('abaCalc');
const calcLista = document.getElementById('calcLista');
const textoTotal = document.getElementById('textTotal');
let qntGarrafa = 0;
let totalDoses = 0


btnAdd.addEventListener('click', addGarrafaCalc)

btnCalc.addEventListener('click', ()=>{
    abaCalc.classList.toggle('ativo')
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
};

function mostraDoseTotal(){
    textoTotal.innerHTML = `
        Total: ${totalDoses} Ds / ${totalDoses*50} ml
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
    textoTotal.innerHTML = "Total: ... Ds";
};





