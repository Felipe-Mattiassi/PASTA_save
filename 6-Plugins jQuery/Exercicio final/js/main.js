$(document).ready(function(){
    $('#cep').mask('00000-000')
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')

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
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereço: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Digite um e-mail valido',
            telefone: 'Digite um numero valido',
            cpf: 'CPF invalido',
            cep: 'CEP invalido',
            enderoço: 'Digite seu endereço'
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
})