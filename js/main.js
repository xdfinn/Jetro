$(function(){


    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-min'
      });
      $('.slider-min').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        centerMode: false,
        focusOnSelect: true
      });

      $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
      });
      
});