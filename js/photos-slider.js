$(document).ready(function(){
    $("#photos-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                margin: 30
            },
            1000: {
                items: 3,
                margin: 60,
            }
        }
    });
});