window.addEventListener("DOMContentLoaded", (event) => {

    //Animation input

    const validationInput = document.querySelector('input');
    const validationClick = document.querySelector('button');

    validationInput.addEventListener('input', (e) => {

        if (e.target.value.length >= 3) { //Au bout de 3 caractère passage du border en vert
            validationInput.style.borderColor = 'green';
        } else {
            validationInput.style.borderColor = 'red';
        }

    });

    validationClick.addEventListener('click', function() {

        if (e.target.value.length >= 3) {
            console.log('Vérifie ton nom')
        }
    });

    window.addEventListener('submit', e => {
        e.preventDefault(); //Évite le chargement de la page
        var forme = new FormData(form);
        var nom = forme.get('nom')
        var prenom = forme.get('prenom')
        var telephone = forme.get('telephone')
        var mail = forme.get('mail')
        var objet = forme.get('objet')
        var message = forme.get('message')

        console.log(prenom)
        form.innerHTML = nom + " " + prenom + " " + telephone + " " + mail + " " + objet + " " + message;
    });
});