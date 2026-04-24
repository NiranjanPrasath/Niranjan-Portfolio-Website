// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Fade-in animation on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if(position < screenPosition){
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});


// Initial hidden state (for animation)
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.8s";
});