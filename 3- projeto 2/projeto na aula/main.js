const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji comemorando"'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"'
const arreyAtividades = []
const arreyNotas = []
let aprovadoOuNão = document.getElementById('verde-ou-vermelho')
let notaMinima = prompt('Qual a media minima?')
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
    atualizaAprovado()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    const valorNota = Number(inputNotaAtividade.value)
    
    if(arreyAtividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`)

    } else  {
        arreyAtividades.push(inputNomeAtividade.value)
        arreyNotas.push(valorNota)
        
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${valorNota}</td>`
        linha += `<td>${valorNota >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        
        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
    console.log(aprovadoOuNão)
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    let somaNotas = 0
    const footTabela = document.querySelector('td#teste')

    for (let i = 0; i < arreyNotas.length; i++) {
        somaNotas += arreyNotas[i]
    }
    let mediaTotal = somaNotas/arreyNotas.length
    
    footTabela.innerHTML = mediaTotal.toFixed(1)
}

function atualizaAprovado() {

    let somaNotas = 0
    
    for (let i = 0; i < arreyNotas.length; i++) {
        somaNotas += arreyNotas[i]
    }

    let mediaTotal = somaNotas/arreyNotas.length
    
    if(mediaTotal >=notaMinima ) {
        aprovadoOuNão.classList.remove('reprovado')
        aprovadoOuNão.classList.add('aprovado')
        aprovadoOuNão.innerHTML = 'Aprovado'
    } else {
        aprovadoOuNão.classList.add('reprovado')
        aprovadoOuNão.innerHTML = 'Reprovado'
    }
    console.log(mediaTotal)
}