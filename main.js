/* --- Botão Scroll ao Topo --- */
const scrollBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

/* --- Animação Fade Up ao Rolar --- */
const fades = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fades.forEach(el => observer.observe(el));

/* --- Menu Mobile --- */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isOpen = links.style.display === 'flex';

  if (isOpen) {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
    Object.assign(links.style, {
      position: 'fixed',
      top: '64px',
      left: '0',
      right: '0',
      flexDirection: 'column',
      background: 'rgba(10,10,15,0.97)',
      padding: '1.5rem 5%',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      backdropFilter: 'blur(16px)',
      zIndex: '99',
      gap: '1.25rem'
    });
  }
}

/* Fecha o menu mobile ao clicar num link */
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    links.style.display = 'none';
  });
});