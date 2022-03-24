$(document).ready(function() {
    $('.btnTop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('#bookNow-date-checkIn, #bookNow-date-checkOut').datepicker();
    // $('#bookNow-date-numOfPeople').selectmenu();

    var swiper = new Swiper(".index-popular-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        // loopFillGroupWithBlank: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
    });


    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        console.log(scrollPos);
        //bg scroll
        $('.img-bg-bubble').css('transform', 'translateY(' + -scrollPos / 2 + 'px)');
        $('.img-bg-bubble2').css('transform', 'translateY(' + -scrollPos / 5 + 'px)');
        $(".img-bg-orange, .img-bg-orange2").css('transform', 'translateY(' + -scrollPos / 16 + 'px)');
    });
});