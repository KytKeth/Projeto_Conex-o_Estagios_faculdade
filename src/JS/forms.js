// Tela de login e cadastro candidato Empresa
const form = document.querySelector('form')
const inputSenha = document.getElementById('senha')
const inputEmail = document.getElementById('email')
const inputConfirmarSenha = document.getElementById('confirmar_senha')  

console.log(inputSenha)

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    inputEmailValue();
    inputSenhaValue();
    inputSenhaConfirmationValidate();
})

const inputSenhaValue = () =>{
    if(inputSenha.value === ""){
        setErro(inputSenha, "Senha é Obrigatório")            
    }else if(inputSenha.value.length < 8){
        setErro(inputSenha, "Senha deve ter no minimo 8 caracteres")

    }else{
        const formItem = inputSenha.parentElement;
        formItem.className = "box";
    }
}
const inputEmailValue = () =>{
    if(inputEmail.value === ""){
        setErro(inputEmail, "Email é Obrigatório");
    }else{
        const formItem = inputEmail.parentElement;
        formItem.className = "box";
}
}
const inputSenhaConfirmationValidate = () =>{
    if(inputConfirmarSenha.value !== inputSenha.value){
        setErro(inputConfirmarSenha, "Senha precisam ser iguais")
    }else if(inputSenha.value === ""){
        setErro(inputConfirmarSenha, "Senha ainda não preenchida") 
    }
    else{
        const formItem = inputConfirmarSenha.parentElement;
        formItem.className = "box"
    }
}

const setErro = (input, msg) =>{
const formItem = input.parentElement;
const textMsg = formItem.querySelector('span')

textMsg.innerText = msg;

formItem.className = "box erro";
}

