const btn = document.getElementById('btn');
const closebtn = document.getElementById('closeModal');
const modalCont= document.getElementById('modal-container');

btn.addEventListener('click', ()=>{
    modalCont.classList.add('show');


})
closebtn.addEventListener('click',()=>{
    modalCont.classList.remove('show');

})