$(document).ready(function () {
  $('#intro').delay(2000).fadeOut(3000);

  $('#slideshow .slick').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplayspeed: 1000,
  });

  $('.fa-angle-down').click(function () {
    $('html, body').animate({ scrollTop: $('.fa-angle-down').offset().top }, 800);
  });
});
