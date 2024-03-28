$(document).ready(function () {
    //open/close primary navigation
    $('.menu-link').on('click', function (e) {
        e.preventDefault();
        $('.menu-line').toggleClass('is-clicked');
        $('.navigation').toggleClass('is-visible');
    });

    $('.menu-items a').click((e) => {
        $('.menu-line').removeClass('is-clicked');
        $('.navigation').removeClass('is-visible');
    });

    new WOW({
        animateClass: "animate__animated",
    }).init();

    $('.ui-accordion .ui-accordion-header').click(function () {
        $(this).next().toggle('slow');
        $(this).toggleClass('ui-accordion-header-active');
        return false;
    }).next().hide();

    let popup = $('.popup');
    $('.order').click(() => {
        popup.show();
    });

    $('.close').click(() => {
        popup.hide();
        $('.form-input').val('');
    });

    $('.header-btn').click(() => {
        popup.show();
    });

    $('.program-btn').click(function () {
        popup.show();
        let section = $(this).closest('.program').attr('id');
        $('#program').val(section);
    });
});