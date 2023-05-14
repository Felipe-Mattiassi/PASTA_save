const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let fomrEValido = false

function validaNome(nomeCompleto) {
    const nomeComoArrey = nomeCompleto.split(' ')
    return nomeComoArrey.length >= 2
}


form.addEventListener('submit', function(e){
    
    e.preventDefault()
    
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor')
    const mensagemSucesso = `Montante de <b>${valorDeposito.value}</b> R$ depositado para o cliente <b>${nomeBeneficiario.value}</b> - <b>conta ${numeroContaBeneficiario.value}</b>`
    const descriçao = document.getElementById('descriçao')

    fomrEValido = validaNome(nomeBeneficiario.value)
    if(fomrEValido) {
        const containerMensagemSucesso = document.querySelector('.mesagem-sucesso')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display ='block'
        document.querySelector('.mesagem-erro').style.display = 'none'
        
        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''
        descriçao.value = ''

    }else {
        nomeBeneficiario.style.border ='1px solid red'
        document.querySelector('.mesagem-erro').style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) { //tb podemos usar 'change' ao em vez de 'keyup'
    fomrEValido = validaNome(e.target.value)
    if(!fomrEValido) {
        //nomeBeneficiario.style.border ='1px solid red'  
        nomeBeneficiario.classList.add('error')
        document.querySelector('.mesagem-erro').style.display = 'block'
    } else if(fomrEValido) {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.mesagem-erro').style.display = 'none'
    }
})