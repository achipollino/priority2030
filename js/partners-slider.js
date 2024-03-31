$(document).ready(function () {
  $('#partners-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 40,
      },
      376: {
        items: 1,
        margin: 10,
      },
      576: {
        items: 2,
        margin: 10,
      },
      768: {
        items: 2,
        margin: 70,
      },
      880: {
        items: 3,
        margin: 10,
      },
      992: {
        items: 3,
        margin: 10,
      },
      1100: {
        items: 4,
        margin: 10,
      },
      1200: {
        items: 5,
        margin: 60,
      },
    },
  });
});
