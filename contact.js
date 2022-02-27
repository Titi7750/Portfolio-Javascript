window.addEventListener("DOMContentLoaded", (event) => {

    //Animation input

    const validationInput = document.querySelector('input');

    validationInput.addEventListener('input', (e) => {
        if (e.target.value.length >= 3) { //Au bout de 3 caractère passage du border en vert
            validationInput.style.borderColor = 'green';
        } else {
            validationInput.style.borderColor = 'red';
        }
    });

    //Validation des Inputs un par un

    document.getElementById('form').addEventListener('submit', function(event) {

        var nom = document.getElementById('nom');
        var prenom = document.getElementById('prenom');
        var telephone = document.getElementById('telephone');
        var mail = document.getElementById('mail');
        var objet = document.getElementById('objet')
        var message = document.getElementById('message');

        if (!message.value) {
            erreur = 'Renseigner votre message'
        }

        if (!objet.value) {
            erreur = 'Renseigner l\'objet du message'
        }

        if (!mail.value) {
            erreur = 'Renseigner votre adresse-mail'
        }

        if (!telephone.value) {
            erreur = 'Renseigner votre numéro de téléphone'
        }

        if (!prenom.value) {
            erreur = 'Renseigner votre prénom'
        }

        if (!nom.value) {
            erreur = ('Renseigner votre nom')
        }

        if (erreur) {
            event.preventDefault();
            document.getElementById('erreur').innerHTML = erreur;
            return false;
        } else {
            alert('Formulaire envoyé !');
        }
    });

    /*window.addEventListener('submit', e => {
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
    });*/
});