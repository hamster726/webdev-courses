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


function toggleSlider(item){
    $(item).each(function (i){
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
}
toggleSlider('.catalog-item__back');
toggleSlider('.catalog-item__link');

// Modal

$('[data-modal=consultation]').on('click', function (){
    $('.overlay, #consultation').fadeIn(100);
});

$('.modal__close').on('click', function () {
    $('.overlay, #consultation, #success, #order').fadeOut(100)
});

$('.button_mini').each(function (i) {
    $(this).on('click', function (){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        $('.overlay, #order').fadeIn(100);
    })
});
