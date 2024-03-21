$(document).ready(function(){
    $("#partners-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5,
                margin: 60,
            }
        }
    });
});