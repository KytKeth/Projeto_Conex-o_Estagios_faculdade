const form = document.querySelector('form')
const inputTituloVaga = document.getElementById('titulo-vaga')
const inputSalario = document.getElementById('salario')
const inputSkillVaga = document.getElementById('skill-vaga')


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    inputTituloVagaValidate();

})

// Input Titulo da vaga
const inputTituloVagaValidate = () =>{
    if(inputTituloVaga.value === ""){
        setErro(inputTituloVaga, "Por favor, preencha o titulo da vaga")
    }else{
        const formItem = inputTituloVaga.parentElement;
        formItem.className = "box"
    }
}

// Input Salario
inputSalario.addEventListener('keyup', (e) =>{
    let valor = e.target.value;
    valor = valor.replace(/\D/g, ""); 
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    e.target.value = valor;
})


// Função Global
const setErro = (input, msg) =>{
    const formItem = input.parentElement;
    const textMsg = document.querySelector('a');

    textMsg.innerText = msg;
    formItem.className = "box erro";

}