$(document).ready(function () {
    $('.lab-head').click(function () {
        $(this).next().toggle();
        if ($(this).next().css('display') === 'block') {
            $(this).parent().css('background-color', '#D9D9D9');
            $(this).css('width', '100%');
        } else {
            $(this).parent().css('background-color', '#F1F1F1');
            $(this).css('width', '350px');
        }
    });
});