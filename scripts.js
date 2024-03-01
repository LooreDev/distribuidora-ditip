// scripts.js
const container = document.querySelector('.container');

// Array de URLs de imágenes (puedes reemplazar estas con tus propias URLs)
const images = [
    'assets/images/berry.png',
    'imagen2.jpg',
    'imagen3.jpg',
    // Añadir más URLs de imágenes aquí...
];

// Función para generar las cards de imágenes
function generateCards() {
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Imagen de botana';

        const title = document.createElement('h2');
        title.textContent = 'Nombre de la botana';

        card.appendChild(img);
        card.appendChild(title);
        container.appendChild(card);
    });
}

// Llamamos a la función para generar las cards al cargar la página
window.onload = generateCards;
