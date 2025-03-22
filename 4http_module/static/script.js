document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
});

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 5 + 1;
    
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = 'rgba(255, 255, 255, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    // Animation
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `float ${duration}s linear infinite`;
    
    // Create keyframes dynamically
    const keyframes = `
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: ${Math.random() * 0.5 + 0.1};
            }
            25% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                opacity: ${Math.random() * 0.5 + 0.3};
            }
            75% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
            }
            100% {
                transform: translate(0, 0) rotate(0deg);
                opacity: ${Math.random() * 0.5 + 0.1};
            }
        }
    `;
    
    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);
    
    container.appendChild(particle);
}