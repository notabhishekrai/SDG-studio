$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 16,
    dots: true,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
        0: {
            items: 1,
        },

        400: {
            items: 1,
        },

        700: {
            items: 2,
        },

        1000: {
            items: 4,
        },

        1300: {
            items: 5,
        },
    },
});
