$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault()
        const tarefa = $('input').val()
        const novoItem = $(`<li>${tarefa}</li>`)
        $(novoItem).appendTo('ul')
        $('input').val('')
    })
    $('ul').on('click', 'li', function() {
        $(this).addClass('click')
    })
})