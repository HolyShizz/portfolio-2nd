newFunction();
function newFunction() {
  $(document).ready(() => {
    $('.top-slider').slick({
      arrows: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            adaptiveHeight: true,
            infinite: true
          },
        },
      ],
    });
    $('.bot-slider-content').slick({
      arrows: true,
      speed: 500,
      infinite: true,
      appendArrows: '.bot-slider-nav',
      prevArrow: '<button class="slick-arrow slick-prev"><img src="img/navl.png"></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="img/navr.png"></button>',
    });
  });


  $('div.pure-u-1-4').click(function (e) {
    e.preventDefault();
    $('div.pure-u-1-4').removeClass('active-menu');
    $(this).addClass('active-menu');
  });
}

