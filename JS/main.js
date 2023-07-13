$(document).ready(function(){
    
    $('#phone').mask('(00) 00000-0000', {
        placeholder: '(99) 99999-9999'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true
            },
            cpf:{
                required: true
            },
            add:{
                required: true
            },
            cep:{
                required: true
            },
        },

        messages:{
            nome: 'Por favor, insira seu nome completo.',
            email: 'Por favor, insira um e-mail válido.',
            phone: 'Por favor, insira um número de telefone válido.',
            add: 'Por favor, insira seu endereço completo.',
            cep: 'Por favor, insira o CEP de seu endereço.',
        },

        submitHandler: function(form){
            alert('Dados salvos com sucesso!')
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();

            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incompletos ou preenchidos de forma incorreta. Verifique os dados e tente novamente.`)
            }
        }
    })
})