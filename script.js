// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to open drawing app
function openDrawingApp() {
    // Placeholder function - replace with actual drawing app URL or path
    alert('La app de dibujo se abrirá aquí.\n\nPara integrar tu app:\n1. Coloca los archivos de tu app en una carpeta (ej: /dibujo/)\n2. Actualiza esta función para redirigir: window.location.href = "/dibujo/"');
    
    // Example: Uncomment and modify when you have your drawing app ready
    // window.location.href = '/dibujo/';
    // Or open in new tab:
    // window.open('/dibujo/', '_blank');
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Add some interactivity to placeholder cards
document.querySelectorAll('.card-placeholder').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Console welcome message
console.log('%c🎮 Bienvenido a Kora Game! 🎮', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cEsta es tu plataforma para juegos y apps de diseño', 'color: #ec4899; font-size: 14px;');
