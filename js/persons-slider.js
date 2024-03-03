$(document).ready(function(){
  $("#persons-carousel").owlCarousel({
      stagePadding: 50,
      margin: 10,
      nav: false,
      dots: true,
      center: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3
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
  