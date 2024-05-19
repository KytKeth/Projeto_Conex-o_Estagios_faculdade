const form = document.querySelector('form')
const inputSenha = document.getElementById('senha')
const inputnomeFantasia = document.getElementById('nomeFantasia')


form.addEventListener('submit', (event) =>{
    event.preventDefault()
    
})


inputnomeFantasia.addEventListener('keyup', () =>{
    if(inputnomeFantasia.value === ""){
        setErro(inputnomeFantasia, "Nome fantasia é obrigatório")
    }else{
        const formItem = inputnomeFantasia.parentElement;
        formItem.className = "box"
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




const setErro = (input, msg) =>{
const formItem = input.parentElement;
const textMsg = formItem.querySelector('span')

textMsg.innerText = msg;

formItem.className = "box erro";
}
