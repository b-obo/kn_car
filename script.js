const fadeElements = document.querySelectorAll('.fade-up');

function showFadeElements() {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showFadeElements);

showFadeElements();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

function closeNav() {
  nav.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNav);
});