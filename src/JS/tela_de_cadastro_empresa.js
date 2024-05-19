// Tela de login e cadastro  Empresa
const form = document.querySelector('form')
const inputSenha = document.getElementById('senha')
const inputUsername = document.getElementById('username')
const inputConfirmarSenha = document.getElementById('confirmar_senha')  

form.addEventListener('submit', (event) =>{
    event.preventDefault()
})



inputUsername.addEventListener('keyup', () =>{
    if(inputUsername.value === ""){
        setErro(inputUsername, "Username é obrigatório")
    }else if(inputUsername.value.length > 6){
        setErro(inputUsername, "User name deve ter 6 caracters")
        inputUsername.value = inputUsername.value.slice(0, 6)
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
