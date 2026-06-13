const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-list-items a');
const userLang = navigator.language || navigator.userLanguage;







// Array of certifications with all details
const certifications = [
    {
        id: 1,
        name: "BAC STI2D",
        description: "Baccalaureate in Industrial Systems and Technologies",
        image: "./images_files/certifications/bac.jpg",
        year: 2024
    },
    {
        id: 2,
        name: "HSK 1",
        description: "Hanyu Shuiping Kaoshi (Chinese Proficiency Test) (A1)",
        image: "./images_files/certifications/hsk1.jpg",
        year: 2021
    },
    {
        id: 3,
        name: "HSK 2",
        description: "Hanyu Shuiping Kaoshi (Chinese Proficiency Test) (A2)",
        image: "./images_files/certifications/hsk2.jpg",
        year: 2021
    },
    {
        id: 4,
        name: "VirtualEdu Remote Worker",
        description: "Working remotely",
        image: "./images_files/certifications/virtualedu.jpg",
        year: 2026
    },
    {
        id: 5,
        name: "VirtualEdu Remote Manager",
        description: "Managing team works remotely",
        image: "./images_files/certifications/virtualedu.jpg",
        year: 2026
    },
    {
        id: 6,
        name: "VirtualEdu Remote Educator",
        description: "Educating Management and remote work",
        image: "./images_files/certifications/virtualedu.jpg",
        year: 2026
    },
    {
        id: 7,
        name: "edu4plastic",
        description: "Plastic recycling and sustainable practices",
        image: "./images_files/certifications/edu4plastic.jpg",
        year: 2026
    },
    {
        id: 8,
        name: "Cisco CCNA",
        description: "Networking and network administration (in progress)",
        image: "./images_files/certifications/ciscoCCNA.jpg",
        year: 2026
    },
    {
        id: 9,
        name: "Python essentials 1",
        description: "Cisco Python programming course",
        image: "./images_files/certifications/cisco_python_essentials1.jpg",
        year: 2026
    },
    {
        id: 10,
        name: "Cisco Ethical Hacker",
        description: "Cisco Ethical Hacking course",
        image: "./images_files/certifications/cisco_ethical_hacker.jpg",
        year: 2026
    },
    {
        id: 11,
        name: "Cisco Data Analytics Essentials",
        description: "Cisco Data Analytics course",
        image: "./images_files/certifications/cisco_data_analytics.jpg",
        year: 2026
    }
];





// Array of HTB Badges with all details
const htbBadges = [
    {
        id: 1,
        name: "linux fundamentals",
        description: "Linux fundamentals",
        image: "./images_files/htb_badges/linux_fundamentals.png",
        year: 2026
    },
    {
        id: 2,
        name: "windows fundamentals",
        description: "Windows fundamentals",
        image: "./images_files/htb_badges/windows_fundamentals.jpg",
        year: 2026
    },
    {
        id: 3,
        name: "macos fundamentals",
        description: "Macos fundamentals",
        image: "./images_files/htb_badges/macos_fundamentals.png",
        year: 2026
    },
    {
        id: 4,
        name: "android fundamentals",
        description: "Android fundamentals",
        image: "./images_files/htb_badges/android_fundamentals.png",
        year: 2026
    }
];









// Function to generate certifications HTML
function generateCertificationsHTML() {
    // Sort certifications by year (most recent first)
    const sortedCertifications = [...certifications].sort((a, b) => b.year - a.year);
    
    // Group certifications by year for better display
    const container = document.getElementById('certificationsContainer');
    if (!container) return;
    
    // Split certifications into two groups: first 6 and the rest
    const visibleCerts = sortedCertifications.slice(0, 6);
    const hiddenCerts = sortedCertifications.slice(6);
    
    let html = '';
    let currentRow = '';
    let colCount = 0;
    
    // Generate visible certifications
    visibleCerts.forEach((cert, index) => {
        const cardHTML = `
            <div class="my-col">
                <div class="my-card port-card">
                    <div class="image">
                        <img src="${cert.image}" alt="${cert.name} Image">
                    </div>
                    <h3 class="greet-heading white-text">${cert.name}</h3>
                    <p class="small-para white-text">${cert.description}</p>
                    <p class="small-para white-text" style="font-weight: bold; margin-top: 0.5rem;">${cert.year}</p>
                </div>
            </div>
        `;
        
        currentRow += cardHTML;
        colCount++;
        
        // Create new row every 3 certifications
        if (colCount === 3 || index === visibleCerts.length - 1) {
            html += `<div class="my-row">${currentRow}</div>`;
            currentRow = '';
            colCount = 0;
        }
    });
    
    container.innerHTML = html;
    
    // Generate hidden certifications and HTB badges if there are more than 6 certifications or HTB badges exist
    if (hiddenCerts.length > 0 || htbBadges.length > 0) {
        let hiddenHtml = '';
        let hiddenCurrentRow = '';
        let hiddenColCount = 0;
        
        // Generate hidden certifications
        hiddenCerts.forEach((cert, index) => {
            const cardHTML = `
                <div class="my-col">
                    <div class="my-card port-card">
                        <div class="image">
                            <img src="${cert.image}" alt="${cert.name} Image">
                        </div>
                        <h3 class="greet-heading white-text">${cert.name}</h3>
                        <p class="small-para white-text">${cert.description}</p>
                        <p class="small-para white-text" style="font-weight: bold; margin-top: 0.5rem;">${cert.year}</p>
                    </div>
                </div>
            `;
            
            hiddenCurrentRow += cardHTML;
            hiddenColCount++;
            
            // Create new row every 3 certifications
            if (hiddenColCount === 3 || index === hiddenCerts.length - 1) {
                hiddenHtml += `<div class="my-row">${hiddenCurrentRow}</div>`;
                hiddenCurrentRow = '';
                hiddenColCount = 0;
            }
        });
        
        // Add HTB Badges section if they exist
        if (htbBadges.length > 0) {
            // Add a heading for HTB badges
            hiddenHtml += `<div class="htb-badges-heading"><h3 class="greet-heading white-text" style="margin-top: 2rem; margin-bottom: 1rem;">HackTheBox Badges</h3></div>`;
            
            // Generate HTB badges with 4 per row
            let htbCurrentRow = '';
            let htbColCount = 0;
            
            htbBadges.forEach((badge, index) => {
                const cardHTML = `
                    <div class="my-col">
                        <div class="my-card port-card htb-badge-card">
                            <div class="image">
                                <img src="${badge.image}" alt="${badge.name} Image">
                            </div>
                            <h3 class="greet-heading white-text">${badge.name}</h3>
                            <p class="small-para white-text">${badge.description}</p>
                            <p class="small-para white-text" style="font-weight: bold; margin-top: 0.5rem;">${badge.year}</p>
                        </div>
                    </div>
                `;
                
                htbCurrentRow += cardHTML;
                htbColCount++;
                
                // Create new row every 4 HTB badges
                if (htbColCount === 4 || index === htbBadges.length - 1) {
                    hiddenHtml += `<div class="my-row htb-row">${htbCurrentRow}</div>`;
                    htbCurrentRow = '';
                    htbColCount = 0;
                }
            });
        }
        
        // Add hidden certifications and HTB badges div to container
        const hiddenContainer = document.createElement('div');
        hiddenContainer.id = 'hiddenCertificationsContainer';
        hiddenContainer.className = 'hidden-certifications-container';
        hiddenContainer.innerHTML = hiddenHtml;
        container.appendChild(hiddenContainer);
        
        // Add button to container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'certifications-button-container';
        const button = document.createElement('button');
        button.className = 'btn ghost-btn';
        button.id = 'toggleCertificationsBtn';
        button.textContent = 'Voir toutes les certifications';
        button.type = 'button';
        button.addEventListener('click', function() {
            toggleMoreCertifications();
        });
        buttonContainer.appendChild(button);
        container.appendChild(buttonContainer);
    }
}

// Function to toggle hidden certifications
function toggleMoreCertifications() {
    const hiddenContainer = document.getElementById('hiddenCertificationsContainer');
    const toggleBtn = document.getElementById('toggleCertificationsBtn');
    
    if (!hiddenContainer || !toggleBtn) return;
    
    if (hiddenContainer.classList.contains('show')) {
        hiddenContainer.classList.remove('show');
        toggleBtn.textContent = 'Voir toutes les certifications';
    } else {
        hiddenContainer.classList.add('show');
        toggleBtn.textContent = 'Masquer les certifications';
    }
}

// Initialize certifications on page load
document.addEventListener('DOMContentLoaded', function() {
    generateCertificationsHTML();
});






hamburger.addEventListener('click', function () {
    // Vérifier si le hamburger est CENSÉ être visible (mobile/tablette)
    if (window.getComputedStyle(hamburger).display === "none") {
        return; // On est sur desktop, ne rien faire
    }
    
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
    // Vérifier si on est sur mobile/tablette (hamburger visible)
    if (window.getComputedStyle(hamburger).display === "none") {
        return; // On est sur desktop, ne rien faire
    }
    
    const hamIcon = hamburger.querySelector('.hamburger-icon');
    const crossIcon = hamburger.querySelector('.cross-icon');

    crossIcon.style.display = "none";
    hamIcon.style.display = "inline-block";
    menu.style.display = "none";
}

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        fermerMenu();
    });
});

function toggleMoreProjects() {
    const hiddenProjects = document.getElementById('hiddenProjects');
    const toggleBtn = document.getElementById('toggleProjectsBtn');
    
    if (hiddenProjects.classList.contains('show')) {
        hiddenProjects.classList.remove('show');
        toggleBtn.textContent = 'Show More Projects';
    } else {
        hiddenProjects.classList.add('show');
        toggleBtn.textContent = 'Show Less Projects';
    }
}



