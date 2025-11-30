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

function telechargerPDF() {
    const pdfurlen = './images_files/CV_mathias_cassegrain_en.pdf';
    const pdfurlfr = './images_files/CV_mathias_cassegrain_fr.pdf';
    const link = document.createElement('a');
    link.href = pdfurlen;
    if (userLang.toLowerCase().startsWith('fr')) {
        link.href = pdfurlfr;
    }
    link.download = 'CV_mathias_cassegrain.pdf'; // Optional: specify a default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}


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


