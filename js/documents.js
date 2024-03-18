$(document).ready(function () {
  $('.programs:not(.development)').hide();

    let filterTitle = $('.filter-title');

    filterTitle.click(function () {
        filterTitle.removeClass('active');
        $(this).addClass('active');
        $('.programs').hide();
        $('.' + this.id).show();
    });
});
