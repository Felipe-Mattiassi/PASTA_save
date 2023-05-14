$(document).ready(function() {
    $('#carrousel-imagens').slick({
        autoplay: true,
    })
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle()
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000 (Obrigatorio)'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-de-interesse').val(nomeVeiculo)
        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })

    $('#link-sobre').click(function() {
        const destino = $('#sobre')

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })

    $('#link-destaque').click(function() {
        const destino = $('#destaques')

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })

    $('#link-promoçao').click(function() {
        const destino = $('#promoções')
        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })

    $('#link-contato').click(function() {
        const destino = $('#contato')
        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
    
})