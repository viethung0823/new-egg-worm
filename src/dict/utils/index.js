document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hash) {
    setTimeout(() => {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    }, 100)
  }
});