$(document).ready(function () {
    $('.slider').slick({
      infinite: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      variableWidth: true,
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
    });
  });