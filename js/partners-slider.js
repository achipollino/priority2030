$(document).ready(function(){
    $("#partners-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 5,
        responsive: {
            1194: {
                margin: 50,
                items: 5
            },
            430: {
                margin: 50,
                items: 2,
            },
        }
    });
});