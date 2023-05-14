$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    /*$('form').on('reset', function() {
        $('form').slideUp()
    })
    
    esse jeito funciona também , para recolher o formulario 
    */

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const endereçoDaNovaImg = $('#endereço-img-nova').val()
        const novoItem = $('<li style="display:none;"></li>')
        $(`<img src="${endereçoDaNovaImg}">`).appendTo(novoItem)
        $(
            `<div class="overaly-imagem-link">
            <a href="${endereçoDaNovaImg}" title="Veja a imagem em tamanho real" target="_blank">
                Veja a imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereço-img-nova').val('')

    })
})

