// //   AOS.init();

$(document).ready(function () {

    // NAVBAR ON SCROLL
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 90) {
            $('.navbar').addClass('navbar-shrink');
        } else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });

    // VIDEO POPUP 1
    const videoSrc = $('#player-1').attr('src')
    $('.video-area .btn-play, .video-popup').on('click', () => {

        if ($('.video-popup').hasClass('open')) {
            $('.video-popup').removeClass('open')
            $('#player-1').attr('src', '')

        } else {
            $('.video-popup').addClass('open')
            if ($('#player-1').attr('src') == '') {
                $('#player-1').attr('src', videoSrc)
            }
        }

    })



    // alumni carousel
    $('.alumni-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        // dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })

    // galeri filter
    let btns = $('.galeri-area .button-group button')
    btns.click((e) => {
        $('.project-area .button-group button').removeClass('btn-active')
        e.target.classList.add('btn-active')

        let selector = $(e.target).attr('data-filter')
        // console.log(selector)
        $('.galeri-area .grid').isotope({

            filter: selector

        })
        return false;

    })

    // Galery swipe
    // $('.project-area .button-group #btn1').trigger('click')
    $('.galeri-area .galeri-foto-items .our-galeri .test-popup-link').magnificPopup({
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });



    //  ========== navbar colapse ================== //
    $('.nav-link').on('click', () => {
        $('.navbar-collapse').collapse('hide')
    })



    //     //  ============ AOS =================

    $('.section-padding').attr('data-aos', 'fade-up')
    AOS.init({
        offset: 400,
        once: true,
        duration: 500,
        delay: 100,
    })


    // ========= scroll it =========================//
    $.scrollIt({
        topOffset: -200
    });

})
// ========== END JQUERY ================= //


// ========== TYPED.JS ================= //
var typed2 = new Typed('.home-title', {
    strings: ['KASUI'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
})