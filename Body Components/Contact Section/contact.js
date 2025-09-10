 // Funcionalidad básica del formulario
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = document.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            // Simular envío
            btn.textContent = 'Sending...';
            btn.classList.add('loading');
            
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('loading');
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Mejorar interactividad de los iconos
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });