$(document).ready(function() {
    $('#btn-sobre').click(function() {
        const destino = $('#sobre')
        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })


    $('#link-produto').click(function() {
        const destino = $('#produtos')
        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })

    $('#produtos button').click(function(){
        const itemCick = $(this).parent().find('h3').text()
        alert(`${itemCick} adicionado ao carrinho`)
    })
})