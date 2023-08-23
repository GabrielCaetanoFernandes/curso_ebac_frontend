document.addEventListener('DOMContentLoaded', function(){
    const nome = document.querySelector('#nome');
    const user = document.querySelector('#user');
    const repo = document.querySelector('#repo');
    const picture = document.querySelector('#picture');
    const follows = document.querySelector('#follows');
    const followers = document.querySelector('#followers');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/GabrielCaetanoFernandes')
        .then(function(result){
            return result.json();
        })
        .then(function(result){
            nome.innerText = result.name;
            user.innerText = result.login;
            repo.innerText = result.public_repos;
            follows.innerText = result.following;
            followers.innerText = result.followers;
            picture.src = result.avatar_url;
            link.href = result.html_url;
        })

})