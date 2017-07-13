$(document).ready(function() {

  if($(window).width() < 1000) {
    $(".desktop-nav").hide();
    $(".mobile-nav").show();
  } else {
    $(".mobile-nav").hide();
    $(".desktop-nav").show();
  }

  $("#toggle-menu").click(function() {
    $("#dropdown").toggle();
  });

  $("#learn-more a").click(function() {
    $('html, body').animate({
        scrollTop: $("#course-details").offset().top
    }, 1000);
  });

});

$(window).resize(function() {
  if($(window).width() < 1000) {
    $(".desktop-nav").hide();
    $(".mobile-nav").show();
  } else {
    $(".mobile-nav").hide();
    $(".desktop-nav").show();
  }
})
