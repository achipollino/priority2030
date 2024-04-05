$(document).ready(function () {
  $("#photos-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      376: {
        items: 1,
        margin: 30,
      },
      576: {
        items: 1,
        margin: 30,
      },
      768: {
        items: 2,
        margin: 60,
      },
      992: {
        items: 2,
        margin: 60,
      },
      1200: {
        items: 3,
        margin: 60,
      },
      1770: {
        items: 3,
        margin: 60,
      },
    },
  });
});
