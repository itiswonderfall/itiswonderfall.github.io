$(function() {
    $('.index-recommend .single-item').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('.responsive').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
        ]
    });
    $(".pricing-box").hover(function(){
        $(".pricing-box").removeClass("pricing-highlight")
        $(this).addClass("pricing-highlight");
        $(".pricing-box .btn-diagonal").removeClass("btn-minor")
        $(this).find(".btn-diagonal").addClass("btn-minor");
    },function(){
        // $(this).removeClass("pricing-highlight");
    });
});

