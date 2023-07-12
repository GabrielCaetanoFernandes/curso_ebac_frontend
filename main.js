$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        let conteudo = $('#nova-tarefa').val();
        let ajusteConteudo = '<li>' + conteudo + '</li>';

        $('ul').append(ajusteConteudo);
    })
    $('ul, li').on('click', function(){
        $('li').addClass('done');
    })
})