const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

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
    const pdfUrl = './images_files/CV_mathias_cassegrain.pdf'; // Replace with your PDF URL
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CV_mathias_cassegrain.pdf'; // Optional: specify a default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}