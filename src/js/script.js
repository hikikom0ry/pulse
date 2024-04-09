$(document).ready(function() {
    //slider
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots: false,
        navText: [
            '<img src="img/slider/arrow-left.png" alt="Previous">',
            '<img src="img/slider/arrow-right.png" alt="Next"></button>'
        ],
        responsive: {
            992: {
                nav: true,
                navText: [
                    '<img src="img/slider/arrow-left.png" alt="Previous">',
                    '<img src="img/slider/arrow-right.png" alt="Next"></button>'
                ],
            },
            575: {
                nav: false,
                dots: true
            },
            320: {
                nav: false,
                dots: true
            }
        }
    });
    //Tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, .modal').fadeOut();
    });

    $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn();
    })
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    })

    //form validation
    
    validateForms('#consultation form');
    validateForms('#order form');
    validateForms('#consultation-form');
    
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите ваше имя",
                    minlength: jQuery.validator.format("Имя не может быть короче {0} символов!")
                },
                phone: "Введите ваш номер телефона",
                email: {
                    required: "Введите вашу почту",
                    email: "Введен неверный email"
                }
            }
        });
    }
});