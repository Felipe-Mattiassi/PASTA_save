const form = document.getElementById('form-atividade')
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji feliz">`
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji triste">`

let linhas = '' 


form.addEventListener('submit', function (e) {
    e.preventDefault()
    

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    const valorNota = Number(inputNotaAtividade.value)

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado: imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha

    let corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
})