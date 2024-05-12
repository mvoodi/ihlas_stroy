  const menuBtn = document.querySelector('.menu-btn');
  const navlinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
      navlinks.classList.toggle('mobile-menu');
  });

  const navButtons = document.querySelectorAll('.nav-links button');

  navButtons.forEach(button => {
      button.addEventListener('click', () => {
          const url = button.getAttribute('data-url');
          window.location.href = url;
      });
});

const serviceBtn = document.getElementById("service");
serviceBtn.addEventListener('click', () => {
  window.location.href = 'bestseller.html';
});

const trailsBtn = document.getElementById("trails");
trailsBtn.addEventListener('click', () => {
  window.location.href = 'about.html';
});

const featureBtn = document.getElementById("feature");
featureBtn.addEventListener('click', () => {
  window.location.href = 'feature.html';
});

const contactBtn = document.getElementById("contact");
contactBtn.addEventListener('click', () => {
  window.location.href = 'contact.html';
});

const homeBtn = document.getElementById("home");
homeBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
