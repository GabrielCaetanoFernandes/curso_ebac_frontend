const form = document.getElementById('forms');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let numA = document.getElementById('numero-a');
    numA = numA.value;
    let numB = document.getElementById('numero-b');
    numB = numB.value;
    let resposta = document.getElementById('retorno');

    if(numB > numA){
        resposta.style.display = 'block';
        resposta.classList.add('success');
        resposta.innerHTML = "Válido";
    }else if(numA === numB){
        resposta.style.display = 'block';
        resposta.classList.add('equal');
        resposta.innerHTML = "Digite números diferentes";
    }else{
        resposta.style.display = 'block';
        resposta.classList.add('error');
        resposta.innerHTML = "Inválido" ;
    };
})