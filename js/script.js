const navButtons = document.querySelectorAll('.nav-links button');

// Добавляем обработчик события для каждой кнопки
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Получаем URL страницы из атрибута data-url кнопки
        const url = button.getAttribute('data-url');

        // Перенаправляем пользователя на указанный URL
        window.location.href = url;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.text');
    const originalText = 'The mission if Ihlas Company is to work, creating a better quality of life for people! IHLAS is a group of companies providing a wide range of services in the construction market of Kyrgyzstan, Kazakhstan and Russia. The main activity of the company is the design, construction and sale of residential and commercial real estate.';
    const newText = 'For 21 years of work in the construction market of Kyrgyzstan, Ihlas has successfully completed the construction of 16 multi-storey buildings and other facilities. The total number of commissioned apartments was 1,437, and the number of commissioned parking spaces was 410. Our own concrete production is 1 million cubic meters per year, and the production of screening and crushed stone is 2.0 million tons per year.';
  
    let scrolled = false;
  
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 100 && !scrolled) {
        textElement.innerHTML = `<p>${newText}</p>`;
        scrolled = true;
      } else if (scrollPosition <= 100 && scrolled) {
        textElement.innerHTML = `<p>${originalText}</p>`;
        scrolled = false;
      }
    });
  });
  
        