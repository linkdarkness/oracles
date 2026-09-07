document.addEventListener("DOMContentLoaded", function() {
    const burgerBtn = document.querySelector(".burger-btn");
    const menu = document.getElementById("menu");

    if (burgerBtn && menu) {
        burgerBtn.addEventListener("click", function() {
            burgerBtn.classList.toggle("active");
            menu.classList.toggle("active");
        });
    }
});

const recherche = document.getElementById("barreRecherche");
const cartes = document.querySelectorAll(".carte");

// Fonction pour retirer les accents et passer en minuscules
function nettoyerTexte(chaine) {
    return chaine
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

recherche.addEventListener("keyup", function(){

    let texte = nettoyerTexte(recherche.value);

    cartes.forEach(function(carte){

        let nom = nettoyerTexte(carte.dataset.nom);

        if(nom.includes(texte)){
            carte.style.display="block";
        }
        else {
            carte.style.display="none";
        }

    });

});

