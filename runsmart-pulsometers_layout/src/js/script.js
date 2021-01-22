// Slider

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
    autoHeight: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

// Tabs

$(document).ready((function () {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


// Tabs slider

    function toggleSlider(item) {
        $(item).each(function (i) {
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

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn(100);
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #success, #order').fadeOut(100)
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn(100);
        })
    });

// validate forms

    function validateForms(form) {
        $(form).validate({
            errorClass: "invalid-input",
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 9
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите свое имя",
                    minlength: "Пожалуйсте, введите минимум 2 буквы"
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                    minlength: "Введите как минимум 9 цифр"
                },
                email: {
                    required: "Пожалуйста, введите свой Email",
                    email: "Неправильно введен адрес почты :("
                }
            }
        });
    }

    validateForms('#consultation .feed-form');
    validateForms('#order .feed-form');
    validateForms('#consultation-form');

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find('input').val("");
            $('#consultation, #order').fadeOut(100);
            $('.overlay, #success').fadeIn(100);
            $('form').trigger('reset')
        });
        return false;
    });

// smooth scroll and pageup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn(300);
        } else {
            $('.pageup').fadeOut(300);
        }
    })

    $("a[href='#up']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });

    new WOW().init()
}));
