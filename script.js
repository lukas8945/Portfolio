// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        if (!targetSelector || targetSelector === '#') return;
        const target = document.querySelector(targetSelector);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Nav background on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.99)';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.97)';
        nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    }
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
