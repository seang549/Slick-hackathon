$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        dots: true,
        fade: true,
        cssEase: 'linear',
        asNavFor: ".slider-nav"
       
    })
     $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows: false,
    centerMode: true,
    focusOnSelect: true
    });
  });
