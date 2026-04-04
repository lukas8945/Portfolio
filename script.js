// Loading screen
window.addEventListener('load', () => {
  const loader = document.querySelector('.loading-animation');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 300);
  }
});

// Active nav link
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname;
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (current.endsWith(href) || (href === 'index.html' && (current.endsWith('/') || current.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });
});
