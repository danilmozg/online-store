$(document).ready(function () {

    $('#owl-first').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 450,
        navText: ['&#8249;', '&#8250;'],
        responsive: {
            0: { items: 1 },
            768: { items: 1 },
            1200: { items: 1 }
        }
    });

    $('#owl-second').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        smartSpeed: 450
    });
});