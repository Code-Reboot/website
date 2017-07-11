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
