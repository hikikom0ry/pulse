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
    $('.catalog__tabs').on('click', 'div:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('.container').find('.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
    });

    //Tabs content switching
    


});