//   AOS.init();


$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 90) {
            $('.navbar').addClass('navbar-shrink');
        } else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });

    // owl-carousel 
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        // dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    // owl-carousel app-screenshots 
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        // dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })


    // testimonials carousel
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        // dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    // team carousel
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        // dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // ========= scroll it =========================//
    $.scrollIt({
        topOffset: -50
    });


    //  ========== navbar colapse ================== //
    $('.nav-link').on('click', () => {
        $('.navbar-collapse').collapse('hide')
    })


    $('.togle-theme').on('click', () => {
        if ($('.togle-theme i').hasClass('fa-moon')) {
            $('.togle-theme i').removeClass('fa-moon')
            $('.togle-theme i').addClass('fa-sun')

            document.querySelector('body').classList.toggle('dark')
        } else {
            document.querySelector('body').classList.toggle('dark')
            $('.togle-theme i').removeClass('fa-sun')
            $('.togle-theme i').addClass('fa-moon')
        }
    })


    //  ============ AOS =================

    $('.section-padding').attr('data-aos', 'fade-up')
    AOS.init({
        offset: 400,
        once: true,
        duration: 1000,
        delay: 100,
    })
})

// ========== TYPED.JS ================= //
var typed2 = new Typed('#typing', {
    strings: ['For Your Business'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});