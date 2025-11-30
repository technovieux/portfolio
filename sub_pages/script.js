const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list-items a'); 

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }

});


function fermerMenu() {
    const hamIcon = hamburger.querySelector('.hamburger-icon');
    const crossIcon = hamburger.querySelector('.cross-icon');

    crossIcon.style.display = "none";
    hamIcon.style.display = "inline-block";
    menu.style.display = "none";
}

menuLinks.forEach(link => {
    link.addEventListener('click', fermerMenu);
});
