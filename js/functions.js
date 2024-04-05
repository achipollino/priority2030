/* Синий прогресс-бар */

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/* Кнопка "Вернуться наверх" */

$('.back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800);
});

$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if(scrolled > 550) {
        $('.back-to-top').addClass('active');
    } else {
        $('.back-to-top').removeClass('active');
    }
});

/* Кнопка "Пролистать вниз" */

let scrollProgramList=0;  $(document).ready(function(){
    $("#downClick").on("click" ,function(){
        scrollProgramList=scrollProgramList+100;

      $("html, body").animate({
              scrollTop:  $("#program-list").offset().top
         });
    });

});

new WOW({
    animateClass: 'animate__animated'
}).init();

$('.results-program__graphics, .photos-event').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
    },
    zoom: {
        enabled: true,
        duration: 300
    },
});