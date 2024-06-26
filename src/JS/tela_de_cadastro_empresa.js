// Tela de login e cadastro  Empresa
const form = document.querySelector('form')
const inputSenha = document.getElementById('senha')
const inputNomeFantasia = document.getElementById('nome-fantasia')
const inputConfirmarSenha = document.getElementById('confirmar_senha')  

form.addEventListener('submit', (event) =>{
    event.preventDefault()
})



inputNomeFantasia.addEventListener('keyup', () =>{
    if(inputNomeFantasia.value === ""){
        setErro(inputNomeFantasia, "Nome fantasia é obrigatório")
    }else{
        const formItem = inputNomeFantasia.parentElement;
        formItem.className = "box";
    }
})


inputSenha.addEventListener('keyup', () =>{
    if(inputSenha.value === ""){
        setErro(inputSenha, "Senha é Obrigatório")            
    }else if(inputSenha.value.length < 8){
        setErro(inputSenha, "Senha deve ter no minimo 8 caracteres")

    }else{
        const formItem = inputSenha.parentElement;
        formItem.className = "box";
    }
})


inputConfirmarSenha.addEventListener('keyup', () =>{
    if(inputConfirmarSenha.value === ""){
        setErro(inputConfirmarSenha, "Confirmar senha é obrigatoria")
    }
    else if(inputConfirmarSenha.value !== inputSenha.value){
        setErro(inputConfirmarSenha, "Senha precisam ser iguais")
    }else if(inputSenha.value === ""){
        setErro(inputConfirmarSenha, "Senha ainda não preenchida") 
    }
    else{
        const formItem = inputConfirmarSenha.parentElement;
        formItem.className = "box"
    }
})

const setErro = (input, msg) =>{
const formItem = input.parentElement;
const textMsg = formItem.querySelector('span')

textMsg.innerText = msg;

formItem.className = "box erro";
}
