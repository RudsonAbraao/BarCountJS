const btnMenu = document.getElementById('btnMenu');
const btnYpioca = document.getElementById('btnYpioca');
const btnSmirnoff = document.getElementById('btnSminnorf');
const btnAbsolut = document.getElementById('btnAbsolut');
const btnGordons = document.getElementById('btnGordons');
const btnJoseCuervo = document.getElementById('btnJoseCuervo');
const btnBacardi = document.getElementById('btnBacardi');

btnMenu.addEventListener('click', ()=>{
    menuLateral.classList.toggle('oculto');
});

btnYpioca.addEventListener('click', ()=>{
    titulo.innerHTML= 'Ypíoca 965ml';
    elementoResultado.innerHTML= '';
});
btnSmirnoff.addEventListener('click', ()=>{
    titulo.innerHTML= 'Smirnoff';
    elementoResultado.innerHTML= '';
});


btnAbsolut.addEventListener('click', ()=>{
    titulo.innerHTML= 'Absolut 1L';
    elementoResultado.innerHTML= '';
});
btnGordons.addEventListener('click', ()=>{
    titulo.innerHTML= 'Gordons';
    elementoResultado.innerHTML= '';
});
btnJoseCuervo.addEventListener('click', ()=>{
    titulo.innerHTML= 'Jose Cuervo';
    elementoResultado.innerHTML= '';
});
btnBacardi.addEventListener('click', ()=>{
    titulo.innerHTML= 'Bacardi';
    elementoResultado.innerHTML= '';
});
