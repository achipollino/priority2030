window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// function footer() {
//   const main = document.querySelector('.menu-items');
//   const footer = document.querySelector('.nav__footer');
//   if (main && footer) {
//       main.style.paddingBottom = footer.clientHeight + 'px';
//   }
// }

// window.addEventListener('load', footer);
// window.addEventListener('resize', footer);

/* function logo() {
  const
      main = document.getElementsByTagName('nav__footer')[0],
      logo = document.getElementsByTagName('menu__logo')[0]

  main.style.marginTop = logo. + '10px'
}

window.addEventListener('load', logo);
window.addEventListener('resize', logo); */