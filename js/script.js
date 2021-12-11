

const swiper2 = new Swiper('.empresasCards', {
    centeredSlides: true,
    slidesPerView: 7,
    spaceBetween: 80,
    slidesPerGroup: 1,
    loop: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    loopFillGroupWithBlank: false,
    pagination:{
        el: ".pag_empresas",
        clickeable: true,
    },
    navigation: {
        nextEl: ".next_empresas",
        prevEl: ".prev_empresas",
    }
})

