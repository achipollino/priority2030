$(document).ready(() => {
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    let more = $('.more');
    more.click(function () {
        $('.news-items li').removeClass('hidden');
        more.hide();
    });
});