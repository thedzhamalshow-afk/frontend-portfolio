document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const menuLinks = document.querySelectorAll('.header__link');

  // Функция переключения меню
  const toggleMenu = () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Блокируем скролл сайта при открытом меню
    document.body.classList.toggle('no-scroll');
  };

  // Клик по бургеру
  burger.addEventListener('click', toggleMenu);

  // Закрытие меню при клике на ссылку
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (burger.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
});

const button = document.querySelector(".hero__btn");

button.addEventListener("click", () => {
  window.location.href = "tel:+79991234567";
});