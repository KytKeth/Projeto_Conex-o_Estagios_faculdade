const inputNome = document.getElementById('nome');
const inputSobreNome = document.getElementById('sobrenome');
const inputDataNasc = document.getElementById('data-nasc');
const inputsexo = document.getElementById('sexo');
const inputCpf = document.getElementById('cpf');
const inputSenha = document.getElementById('senha');
const inputEstadoCivil = document.getElementById('estado-civil');
const inputEmail = document.getElementById('email');
const inputTel = document.getElementById('celular');
const form = document.querySelector('form');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    inputNomeValidate();
    inputSobreNomeValidate();
    inputCpfValidate();
    inputTelefoneValidate();
})

// Input Nome
const inputNomeValidate = () =>{
    if(inputNome.value === ""){
        setErro(inputNome, "Por favor, digite seu nome")
    }else{
        const formItem = inputNome.parentElement;
        formItem.className = "box";
    }
}

// Input Sobrenome
const inputSobreNomeValidate = () =>{
    if(inputSobreNome.value === ""){
        setErro(inputSobreNome, "Por favor, digite seu sobrenome")
    }else if (inputSobreNome.value === inputNome.value){
        setErro(inputSobreNome, ("Nome e Sobrenome não pode ser iguais"))

    }else{
        const formItem = inputSobreNome.parentElement;
        formItem.className = "box";
    }
}
// Input CPF
const inputCpfValidate = () =>{
    if((inputCpf.value === "") || (inputCpf.value.length < 14)){
        setErro(inputCpf, "Digite um CPF válido")
    }else{
        const formItem = inputCpf.parentElement;
        formItem.className = "box";
    }
}
inputCpf.addEventListener('input', () =>{
    valideCPF(inputCpf)
    if(inputCpf.value.length <= 14){
        formateCPF(inputCpf);
    }else{
        inputCpf.value = inputCpf.value.slice(0, 14);
    }
})

// Input Cel

const inputTelefoneValidate = () =>{
    validarTelefone(inputTel)
}
inputTel.addEventListener('keyup', (e) =>{
    if(inputTel.value.length <= 15){
        
    }else{
        inputTel.value = inputTel.value.slice(0, 15);
    }
    let valor = e.target.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
    e.target.value = valor;
});



// Funções Globais


const formateCPF = (input) =>{
    let v = input.value.replace(/\D/g, '');

    if(v.length >= 3){
        v = v.replace(/^(\d{3})(\d)/, '$1.$2');
    }

    if (v.length >= 6) {
        v = v.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (v.length >= 9) {
        v = v.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }

    input.value = v;
}
const valideCPF = (input) =>{
    const cpfNumeros = input.value.replace(/\D/g, '');
    if(cpfNumeros.length === 11){
        return true
    }else{
        return false
    }
}
const validarTelefone = (input) =>{
    const regexTel = /^\(\d{2}\) \d{5}-\d{4}$/;

    if(inputTel.value === ""){
        setErro(inputTel, "Celular deve ser Preenchido")
        
    }else if(!regexTel.test(input.value)){
        setErro(inputTel, "Celular esta Incorreto")

    }else{
           const formItem = inputTel.parentElement;
           formItem.className = "box";
    }
}
const setErro = (input, msg) =>{
    const formItem = input.parentElement;
    const textMsg = formItem.querySelector('span')

    textMsg.innerText = msg;
    formItem.className = "box erro"
}



const formModal = document.querySelector('.form-modal').addEventListener('submit', (e) =>{
    e.preventDefault();
})

const btnEditPassword = document.querySelector('.btn-edit-password')
const modalContainer = document.querySelector('.modal-container')

btnEditPassword.addEventListener('click', (e) =>{
    e.preventDefault();
    modalContainer.classList.add('show')
})