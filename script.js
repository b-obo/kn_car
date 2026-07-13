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