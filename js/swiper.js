const mySwiper = new Swiper(".idc-swiper", {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".idc-swiper .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});
