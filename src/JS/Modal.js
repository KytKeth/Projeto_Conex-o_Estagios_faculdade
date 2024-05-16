const addModal = document.querySelector('.add-modal');
const modalContainer = document.querySelector('.modal-container');
const btnCancelar = document.querySelector('.cancelar');


addModal.addEventListener('click', (e) =>{
    modalContainer.classList.add('show');
    document.addEventListener('keypress', (e) =>{
        if(e.key === "Enter"){
            e.preventDefault();
        }
    })
})

btnCancelar.addEventListener('click', () =>{
    modalContainer.classList.remove('show');
})



