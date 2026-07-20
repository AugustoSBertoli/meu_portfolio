const topoBotao = document.getElementById('topoBotao');
const menu = document.getElementById('cabecalho-menu');
const hamburguer = document.getElementById('hamburguer');

window.addEventListener('scroll', () => {
  topoBotao.classList.toggle('visivel', window.scrollY > 400);
});

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => menu.classList.remove('ativo'));
});

const elementos = document.querySelectorAll('.revelar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    setTimeout(() => entry.target.classList.add('visivel'), i * 80);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

elementos.forEach(el => observer.observe(el));