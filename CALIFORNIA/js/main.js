(function () {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__nav--link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 850) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Слайдер

    const swiper = new Swiper('.phones__slider', {
        loop: true,
        allowTouchMove: false,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.phones__next',
            prevEl: '.phones__prev',
        },
    });

})()