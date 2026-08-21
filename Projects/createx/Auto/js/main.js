const swiper = new Swiper('.costumers.swiper', {
    loop: true,

    slidesPerView: 2,
    spaceBetween: 24,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        }
    }
});

const faqButtons = document.querySelectorAll('.faq__item-btn');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.closest('.faq__item');
        currentItem.classList.toggle('active');
    });
});