var images = document.querySelectorAll('.animate-on-scroll');

function animate() {
    images.forEach(function(image) {
        var anim = image.getAttribute('data-animation');
        if (isInViewport(image)) {
            image.classList.add('animating');
            image.classList.add('animate__animated');
            // image.classList.add('animate__faster');
            image.classList.add(`animate__${anim}`);
        }
    });
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 1100
    );
}

window.addEventListener('load', animate);
window.addEventListener('scroll', animate);

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});