jQuery(document).ready(function ($) {
  $('.slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 524,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  });

  $('.next').on('click', function () {
    $('.slider').slick('slickNext');
  });

  $('.prev').on('click', function () {
    $('.slider').slick('slickPrev');
  });
});
