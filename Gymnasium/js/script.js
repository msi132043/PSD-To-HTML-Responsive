$(function () {

    //banner slider
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        dots: true,
        cssEase: 'linear',
        pauseOnHover: true,
        //fade: true,
    });


    //about video
    $('.venobox').venobox();


    //Team Part
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        dots: false,
        cssEase: 'linear',
        pauseOnHover: true,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    //testimonial slider
    $('.testimonial_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        //autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        dots: true,
        cssEase: 'linear',
        pauseOnHover: true,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    //Counter Up
    $('.counter').counterUp({
        delay: 50,
        time: 1500
    });


    //sponsor slider
    $('.sponsor_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: true,
        dots: false,
        cssEase: 'linear',
        pauseOnHover: true,
        prevArrow: '.prevArrow',
        nextArrow: '.nextArrow',

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

});