// const add = (a,b) => a+b;
//alert('test')
const langSelect = () => {
    const lang = window.navigator.language;
    var el = document.querySelector('.langSelectWrap');
    if(lang === 'us') {
        document.querySelector('.langSelectWrap').style.display = 'none';
    }
}

const scrollEvent = () => {
    // var scrollValue = window.scrollY;
    window.addEventListener('scroll', function() {
        var el = document.querySelector('.linkToMoveWrap');
        
        if(window.scrollY >= 100) el.classList.add('shown');
        else el.classList.remove('shown');
    });
}
langSelect();
scrollEvent();