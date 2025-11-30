// viewer.js - Transformé en fonction réutilisable

function initMediaViewer(mediaFiles, containerId) {
    
    // 1. Récupération du conteneur principal
    const container = document.getElementById(containerId);
    if (!container || mediaFiles.length === 0) {
        console.error("Le conteneur de la visionneuse est introuvable ou les données sont vides.");
        return;
    }

    // 2. Récupération des éléments HTML à l'intérieur de ce conteneur
    const mainImage = container.querySelector('#main-image');
    const mainVideo = container.querySelector('#main-video');
    const mediaList = container.querySelector('#media-list');
    const mediaTitle = container.querySelector('#media-title');
    const prevBtn = container.querySelector('#prev-btn');
    const nextBtn = container.querySelector('#next-btn');

    let currentIndex = 0; // Index propre à cette visionneuse

    // 3. Fonction pour mettre à jour l'affichage principal
    function displayMedia(index) {
        // Bouclage
        if (index < 0) {
            currentIndex = mediaFiles.length - 1;
        } else if (index >= mediaFiles.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const currentMedia = mediaFiles[currentIndex];

        // Masquer tout par défaut et arrêter la vidéo
        mainImage.style.display = 'none';
        mainVideo.style.display = 'none';
        mainVideo.pause(); 
        mainVideo.currentTime = 0; 

        // Mettre à jour le titre
        //if (mediaTitle) {
        //    mediaTitle.textContent = currentMedia.name;
        //}
        
        if (currentMedia.type === 'image') {
            mainImage.src = currentMedia.src;
            mainImage.style.display = 'block';
        } else if (currentMedia.type === 'video') {
            mainVideo.src = currentMedia.src;
            mainVideo.style.display = 'block';
            mainVideo.load();
        }

        // Mettre à jour l'état actif des boutons de la liste
        updateActiveButton();
    }

    // 4. Fonction pour mettre en surbrillance le bouton actif
    function updateActiveButton() {
        if (!mediaList) return;
        const buttons = mediaList.querySelectorAll('button');
        buttons.forEach((button, index) => {
            if (index === currentIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // 5. Créer les boutons de la liste et les gérer
    if (mediaList) {
        // Vider la liste existante avant d'ajouter les nouveaux boutons
        mediaList.innerHTML = ''; 
        mediaFiles.forEach((media, index) => {
            const button = document.createElement('button');
            button.textContent = media.name;
            
            button.addEventListener('click', () => {
                displayMedia(index);
            });
            
            mediaList.appendChild(button);
        });
    }


    // 6. Gérer les boutons Précédent et Suivant
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            displayMedia(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            displayMedia(currentIndex + 1);
        });
    }

    // 7. Afficher le premier média au chargement
    // La fonction est appelée après le chargement du DOM dans le HTML
    displayMedia(0);
}