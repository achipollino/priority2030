$(document).ready(() => {
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    let more = $('.more');
    more.click(function () {
        $('.news-items li').removeClass('hidden');
        more.hide();
    });

    $('.programs:not(.development)').hide();

    let filterTitle = $('.filter-title');

    filterTitle.click(function () {
        filterTitle.removeClass('active');
        $(this).addClass('active');
        $('.programs').hide();
        $('.' + this.id).show();
    });
});