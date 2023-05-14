const form = document.getElementById('form-area')
const numeroA = document.getElementById('numero-A')
const numeroB = document.getElementById('numero-B')
const menssagemParaUser = document.getElementById('mensagem')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    campoA = Number(numeroA.value)
    campoB = Number(numeroB.value)

    if (campoA>campoB) {
        menssagemParaUser.style.display = 'block'
        menssagemParaUser.style.background = '#2ecc71'
        menssagemParaUser.style.color = '#fff'

        menssagemParaUser.innerHTML = `Esta tudo certo, ${campoA} é maior que ${campoB}`
        numeroA.innerHTML = ''
        numeroB.innerHTML = ''
    }else {
        menssagemParaUser.style.display = 'block'
        menssagemParaUser.style.background = '#dd1c1c'
        menssagemParaUser.style.color = '#fff'

        menssagemParaUser.innerHTML = `Erro: O numero <b>${campoA}</b> é menor ou igual ao numero <b>${campoB}</b>`
    }
})
