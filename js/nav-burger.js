"use srtict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__icon');

if (iconMenu) {
    const menuBody = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
        /* document.body.classList.toggle('_lock'); */
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

 /* if (iconMenu.classList.contains('_active')) {
    const menuBody = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
        /* document.body.classList.toggle('_lock');
        iconMenu.classList.remote('_active');
        menuBody.classList.remote('_active');
    });
} */