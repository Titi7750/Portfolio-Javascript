window.addEventListener("DOMContentLoaded", (event) => {

    var displayButton = document.querySelector('button');
    var profil = document.querySelector('img');
    profil.className = 'hide'; //className = class dans HTML

    displayButton.addEventListener('click', function() {
        if (displayButton.textContent === 'Afficher') {
            displayButton.textContent = 'Masquer';
            profil.className = '';
        } else {
            displayButton.textContent = 'Afficher';
            profil.className = 'hide';
        }
    });

    var form = document.getElementById('form');
    var div = document.getElementById('inserter');

    form.addEventListener('submit', e => { // évènement du bouton submit
        e.preventDefault(); // évite le chargement de la page
        var forme = new FormData(form);
        var prenom = forme.get('prenom');
        var nom = forme.get('nom');

        div.innerHTML = prenom + " " + nom;
    });
});

/*var img = document.createElement('img')
    img.src = 'photo.png';
    var monId = document.getElementById("photo");
    monId.appendChild(img);*/


/*var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}*/