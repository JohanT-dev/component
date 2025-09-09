// JavaScript del carrusel en el index
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelector('.carousel-slides');
            const slideCount = document.querySelectorAll('.carousel-slide').length;
            let currentIndex = 0;

            function nextSlide() {
                // Incrementa el índice y vuelve a 0 si llega al final
                currentIndex = (currentIndex + 1) % slideCount;
                updateCarousel();
            }

            function updateCarousel() {
                // Mueve el contenedor de slides hacia la izquierda
                const offset = -currentIndex * 100;
                slides.style.transform = `translateX(${offset}%)`;
            }

            // Inicia el intervalo para mover el carrusel automáticamente
            setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos (3000 milisegundos)
        });