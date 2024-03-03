$(document).ready(function(){
  $("#persons-carousel").owlCarousel({
      margin: 10,
      nav: false,
      dots: true,
      responsive: {
          0: {
              items: 1,
              stagePadding: 50,
              center: true,
          },
          600: {
              items: 2,
              stagePadding: 50,
              center: true,
          },
          1000: {
              items: 4
          }
      }
  });
});

$(document).ready(function() {
  // Функция для выравнивания высоты элементов слайдера
  function alignSlideHeights() {
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
  }

  // Выравниваем высоту при загрузке страницы
  alignSlideHeights();

  // Выравниваем высоту при изменении размера экрана
  window.addEventListener('resize', function() {
      alignSlideHeights();
  });
});
  