document.addEventListener("DOMContentLoaded", function () {
    // Swiper Manager
    new Swiper(".swiper__manager", {
        slidesPerView: 1,
        speed: 400,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

    

})