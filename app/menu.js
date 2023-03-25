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
});
btnSmirnoff.addEventListener('click', ()=>{
    titulo.innerHTML= 'Smirnoff';
});


btnAbsolut.addEventListener('click', ()=>{
    titulo.innerHTML= 'Absolut 1L';
});
btnGordons.addEventListener('click', ()=>{
    titulo.innerHTML= 'Gordons';
});
btnJoseCuervo.addEventListener('click', ()=>{
    titulo.innerHTML= 'Jose Cuervo';
});
btnBacardi.addEventListener('click', ()=>{
    titulo.innerHTML= 'Bacardi';
});
