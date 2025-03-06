document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').slice(1); // Get ID without '#'
      const targetElement = document.getElementById(targetId);
  
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
  