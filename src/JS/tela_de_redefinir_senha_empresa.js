const form = document.querySelector("form");
const redefinirSenha = document.getElementById('redefinir_senha')
const confirmarSenha = document.getElementById('confirmar_senha')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    redefinirSenhaValidate();
    confirmarSenhaValidate();
})

console.log(redefinirSenha, confirmarSenha)

const redefinirSenhaValidate = () =>{
    redefinirSenha.addEventListener('keyup', () =>{
        if(redefinirSenha.value === ""){
            setErro(redefinirSenha, 'A senha é obrigatória')
        }else if(redefinirSenha.value.length < 8){
            setErro(redefinirSenha, 'Senha deve ter no minimo 8 caracteres')
        }else{
            const formItem = redefinirSenha.parentElement;
            formItem.className = "box"
        }
    })
}

const confirmarSenhaValidate = () =>{
    confirmarSenha.addEventListener('keyup', () =>{
        if(confirmarSenha.value === ""){
            setErro(confirmarSenha, "A confirmação de senha é obrigatória")
        }else if(confirmarSenha.value !== redefinirSenha.value){
            setErro(confirmarSenha, "Confirmação de senha deve ser igual senha")
        }else{
            const formItem = confirmarSenha.parentElement;
            formItem.className = "box";
        }
    })
}


const setErro = (input, msg) =>{
    const formItem = input.parentElement;
    const textMsg = formItem.querySelector('span')
    
    textMsg.innerText = msg;
    
    formItem.className = "box erro";
}
