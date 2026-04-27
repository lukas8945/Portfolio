// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        if (!targetSelector || targetSelector === '#') {
            return;
        }
        const target = document.querySelector(targetSelector);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation background change on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Highlight current navigation link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', function() {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero h1');
        const heroDesc = document.querySelector('.hero p');
        if (!heroTitle || !heroDesc) {
            return;
        }
        typeWriter(heroTitle, 'Étudiant BTS SIO SISR', 80);
        setTimeout(() => {
            typeWriter(heroDesc, 'Passionné par les réseaux et l\'infrastructure informatique', 50);
        }, 2000);
    }, 2500);
});

