// Smooth scroll to section links (if you add anchor links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in elements on scroll
const fadeElements = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.3,
});

fadeElements.forEach(el => {
  observer.observe(el);
});

// Hide/show navbar on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.top = "0";
    return;
  }

  if (currentScroll > lastScroll) {
    // scrolling down
    navbar.style.top = "-80px";
  } else {
    // scrolling up
    navbar.style.top = "0";
  }

  lastScroll = currentScroll;
});