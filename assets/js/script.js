/*
* Animation des compétences
*/
// Déclaration des variables
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.skillContents');
let selectedTab = 0;

//Fonctions permettant de changer le contenu en fonction de l'onglet cliqué
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    //Si l'onglet où l'on clique est déjà sélectionné ne rien faire sinon lui ajouté la classe activeTab
    if (tab.classList.contains('activeTab')) {
      return;
    } else {
      tab.classList.add('activeTab');
    }

    //On donne l'attribut de data-animation à la variable selectedTab
    selectedTab = tab.getAttribute('data-animation');

    //Si l'attribut des onglets est différente de la valeur de selectedTab alors on enlève la classe "activeTab"
    for (i = 0; i < tabs.length; i++) {
      if (tabs[i].getAttribute('data-animation') != selectedTab) {
        tabs[i].classList.remove('activeTab');
      }
    }

    //Si l'attribut du contenu est égal à la valeur de selectedTab alors on affiche sinon on masque
    for (j = 0; j < contents.length; j++) {
      if (contents[j].getAttribute('data-animation') == selectedTab) {
        contents[j].classList.add("d-block");
        contents[j].classList.remove("d-none");
      } else if (contents[j].getAttribute('data-animation') != selectedTab) {
        contents[j].classList.add("d-none");
      }
    }
  })
})


/*
* Animation de la timeline
*/
AOS.init();

/*
* Animation du carousel
*/
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


/*
* Animation des contacts
*/
phone.onmouseenter = () => {
  phone.src = "assets/img/contact/phone.gif";
}
phone.onmouseout = () => {
  phone.src = "assets/img/contact/phone.jpg";
}

mail.onmouseenter = () => {
  mail.src = "assets/img/contact/mail.gif";
}
mail.onmouseout = () => {
  mail.src = "assets/img/contact/mail.jpg";
}

linkedIn.onmouseenter = () => {
  linkedIn.src = "assets/img/contact/linkedIn.gif";
}
linkedIn.onmouseout = () => {
  linkedIn.src = "assets/img/contact/linkedIn.jpg";
}

cv.onmouseenter = () => {
  cv.src = "assets/img/contact/cv.gif";
}
cv.onmouseout = () => {
  cv.src = "assets/img/contact/cv.jpg";
}