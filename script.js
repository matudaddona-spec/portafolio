// Menú hamburguesa (mobile)
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});

menu.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Animación de aparición al hacer scroll
const targets = document.querySelectorAll('.section__title, .card, .project, .cert, .about__grid, .timeline');
targets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
targets.forEach((el) => observer.observe(el));

// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();
