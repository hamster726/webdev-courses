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

$(document).ready((function (){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
}))
