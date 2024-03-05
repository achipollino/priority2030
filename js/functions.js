window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

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