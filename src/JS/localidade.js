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


// Validação Input Modal
let inputCEP = document.getElementById('cep')
let inputNumero = document.getElementById('numero')
let inputComplemento = document.getElementById('complemento')
let inputBairro = document.getElementById('bairro')
let inputCidade = document.getElementById('cidade')
let inputEstado = document.getElementById('estado')
let inputEndereco = document.getElementById('endereco')
let form = document.querySelector('form')


form.addEventListener('submit', (e) =>{
    e.preventDefault();
})


// Input CEP
inputCEP.addEventListener('keyup', (e) =>{
    if(inputCEP.value.length < 10){
    }else{
        inputCEP.value = inputCEP.value.slice(0, 10)
    }
    let valor = e.target.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1-$2"); 
    e.target.value = valor;
    
})



const setErro = (input, msg) =>{
    const formItem = input.parentElement;
    const textMsg = document.querySelector('span')

    textMsg.innerText = msg;
    formItem.className = "box erro";
}


//   const cep = inputCEP.value;
//     console.log(cep)
//     if(cep){
//         const URL = `https://viacep.com.br/ws/${cep}/json/`;
//         try{
//             const resp = await(fetch(URL));
//             const obj = await resp.json();

//             if(resp.status === 200){
//             inputComplemento.value = obj.complemento
//             inputBairro.value = obj.bairro
//             inputCidade.value = obj.localidade
//             inputEstado.value = obj.uf
//             }else{
//                 console.error('Erro ao buscar o CEP:', resp.status)
//             }
//         }catch (error){
//             console.error('Erro na API:', error);
//         }
//     }