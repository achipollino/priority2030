$(document).ready(function () {
  $("#photos-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    nav: false,
    items: 3,
    margin: 30,
  });
});
