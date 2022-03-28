$(document).ready(function() {
    $('.btnTop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('.productList-item-btnAddCart').click(function(event) {
        event.preventDefault();
        alert('已將商品加入購物車!');
    });

    $('.menu-tab-productCategory li').click(function(event) {
        event.preventDefault();
        $(this).find('button').addClass('productCategory-item-active').parent().siblings().find('button').removeClass('productCategory-item-active');
    });

    $('.size-buttonList li').click(function(event) {
        event.preventDefault();
        $(this).find('button').toggleClass('size-item-active').parent().siblings().find('button').removeClass('size-item-active');
    });

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
        $('.img-bg-orange, .img-bg-orange2, .img-bg-orange3, .img-bg-orange4, .img-bg-orange5').css('transform', 'translateY(' + -scrollPos / 16 + 'px)');
    });
});