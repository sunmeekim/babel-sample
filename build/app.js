'use strict';

// const add = (a,b) => a+b;
//alert('test')
// import Swiper from 'swiper';
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination'
    },
    preloadImages: false,
    lazyLoading: true
});
var langSelect = function langSelect() {
    var lang = window.navigator.language;
    var el = document.querySelector('.langSelectWrap');
    if (lang !== 'ko') {
        document.querySelector('.langSelectWrap').style.display = 'none';
    }
};

var scrollEvent = function scrollEvent() {
    // var scrollValue = window.scrollY; //scrollY는 크롬만됨
    var scrollValue = function scrollValue() {
        var el = document.querySelector('.linkToMoveWrap');

        if (window.pageYOffset >= 100) el.classList.add('shown');else el.classList.remove('shown');
    };
    window.addEventListener('scroll', scrollValue, false);
    document.removeEventListener('scroll', scrollValue, false);
};
langSelect();
scrollEvent();