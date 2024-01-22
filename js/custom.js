$('.testiinr-blk').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.main-blg').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
$('.main-blk').slick({
  dots: true,
  rows:1,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$(".tab-list li").on("click", function() {
  var tabId = ".tab-list li#" + $(this).attr("id");
  var tabDivId = ".tabs-content#content-" + $(this).attr("id");

  if (!$(this).hasClass("active")) {
    $(".tab-list li").removeClass("active");
    $(this).addClass("active");

    $(".tabs-content").removeClass("active");
    $(tabDivId).addClass("active");
  }
});


$(".tab-listt li").on("click", function() {
  var tabId = ".tab-list li#" + $(this).attr("id");
  var tabDivId = ".tabs-contentt#contentt-" + $(this).attr("id");

  if (!$(this).hasClass("active")) {
    $(".tab-listt li").removeClass("active");
    $(this).addClass("active");

    $(".tabs-contentt").removeClass("active");
    $(tabDivId).addClass("active");
  }
});


$(".tab-listtt li").on("click", function() {
  var tabId = ".tab-listtt li#" + $(this).attr("id");
  var tabDivId = ".tabs-contenttt#contenttt-" + $(this).attr("id");

  if (!$(this).hasClass("active")) {
    $(".tab-listtt li").removeClass("active");
    $(this).addClass("active");

    $(".tabs-contenttt").removeClass("active");
    $(tabDivId).addClass("active");
  }
});
