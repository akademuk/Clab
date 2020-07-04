$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    swipe: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});
