// Smooth scrolling when navigating between sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default link behavior
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'  // Smooth scroll effect
      });
    });
  });
  