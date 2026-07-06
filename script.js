// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark/Light Mode
  const toggle = document.getElementById("theme-toggle");
  toggle.onclick = () => {
    document.body.classList.toggle("light");
  };
  
  // Contact Form (basic)
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent! (Demo)");
  });