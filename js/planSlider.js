$(".js-event-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  fade: true,
  centerMode: false,
  asNavFor: ".js-slider-control",
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
$(".js-slider-control").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: ".js-event-slider",
  arrows: false,
  fade: false,
  focusOnSelect: true,
});
