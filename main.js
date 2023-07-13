$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        let conteudo = $('#nova-tarefa').val();
        let ajusteConteudo = '<li>' + conteudo + '</li>';

        $('ul').append(ajusteConteudo);
    })
    $('ul').on('click', 'li', function(){
        $(this).addClass('done');
    })
})