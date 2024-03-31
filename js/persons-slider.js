window.onload = function () {
  $(document).ready(function () {
    $('#persons-carousel').owlCarousel({
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 10,
          center: true,
          margin: 30,
        },
        600: {
          items: 2,
          stagePadding: 50,
          center: true,
          margin: 20,
        },
        768: {
          items: 2,
          margin: 10,
        },
        880: {
          items: 2,
          margin: 0,
        },
        992: {
          items: 3,
          margin: 15,
        },
        1200: {
          items: 4,
          margin: 20,
        },
        1550: {
          items: 4,
          margin: 40,
        },
        1770: {
          items: 5,
          margin: 40,
        },
      },
    });
  });

  $(document).ready(function () {
    // Функция для выравнивания высоты элементов слайдера
    function alignSlideHeights() {
      var slides = document.querySelectorAll('.person-card');
      var maxHeight = 0;

      // Находим максимальную высоту элемента слайдера
      slides.forEach(function (slide) {
        var slideHeight = slide.clientHeight;
        if (slideHeight > maxHeight) {
          maxHeight = slideHeight;
        }
      });

      // Применяем максимальную высоту ко всем элементам слайдера
      slides.forEach(function (slide) {
        slide.style.height = maxHeight + 'px';
      });
    }

    // Выравниваем высоту при загрузке страницы
    alignSlideHeights();

    // Выравниваем высоту при изменении размера экрана
    window.addEventListener('resize', function () {
      alignSlideHeights();
    });
  });
};
