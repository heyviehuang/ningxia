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
        spaceBetween: 30,
        slidesPerGroup: 3,
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
});