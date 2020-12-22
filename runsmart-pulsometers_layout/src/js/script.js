$(document).ready(function () {
    $('.carousel__inner').slick({
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel_left.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel_right.svg"/></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});
