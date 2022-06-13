let openModal = document.querySelector('.fa-bars')
let modal = document.querySelector('.modal-box')


openModal.addEventListener('click', ()=>{
    openModal.classList.toggle('fa-xmark')
    modal.classList.toggle('active')
})


