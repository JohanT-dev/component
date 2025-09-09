// Configuración del Intersection Observer
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        // Crear el observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const animatedText = entry.target.querySelector('.animated-text');
                
                if (entry.isIntersecting) {
                    // Elemento visible: añadir clase de animación
                    animatedText.classList.add('visible');
                } else {
                    // Elemento no visible: remover clase para que se pueda animar de nuevo
                    animatedText.classList.remove('visible');
                }
            });
        }, observerOptions);

        // Observar todas las secciones
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Efecto adicional de scroll suave
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isScrollingDown = scrollTop > lastScrollTop;
            
            // Añadir efectos adicionales basados en la dirección del scroll
            document.body.style.setProperty('--scroll-direction', isScrollingDown ? '1' : '-1');
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });