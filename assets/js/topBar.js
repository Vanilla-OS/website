var body = document.querySelector('body');

window.onscroll = function() {
    if (window.pageYOffset > 95) {
        body.classList.add('scroll');
    } else {
        body.classList.remove('scroll');
    }
}