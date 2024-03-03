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

    function card_rotate(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    card_rotate('.catalog-item__link');
    card_rotate('.catalog-item__back');

});