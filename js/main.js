document.addEventListener('DOMContentLoaded', function () {
    const slider = new Swiper('.main__slider', {
        loop: false,
        slidesPerView: 1,
        effect: "fade",

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let copy = document.querySelector('.footer__copy');
    copy.innerHTML = '©Copyright <span class="footer__span">2022</span>';
}, false);