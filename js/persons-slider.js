$(document).ready(function(){
    $("#persons-carousel").owlCarousel({
        margin: 35,
        nav: false,
        dots: true,
        responsive: {
          1194: {
              margin: 50,
              items: 4
          },
          430: {
              items: 1,
          },
      }
    });
});

$(document).ready(function() {
    var slides = document.querySelectorAll('.person-card');
    var maxHeight = 0;
  
    // Находим максимальную высоту элемента слайдера
    slides.forEach(function(slide) {
      var slideHeight = slide.clientHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight;
      }
    });
  
    // Применяем максимальную высоту ко всем элементам слайдера
    slides.forEach(function(slide) {
      slide.style.height = maxHeight + 'px';
    });
  })
  