const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true, // have a bug
    controls: false,
    autoplayButtonOutput: false,
    nav: false,
    touch: true,
    mouseDrag: true, // have a bug with autoplayHoverPause
    swipeAngle: false,
    autoHeight: true
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
