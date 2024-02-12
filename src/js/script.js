$(document).ready(function(){
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
  });