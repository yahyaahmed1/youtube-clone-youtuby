$(function () {
  $(".first-element").addClass("active");
  // -- navbar script...
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".search-icon").click(function () {
    $(".search-input").slideToggle("slow");
  });
  // ----------------------------------------------------------------------
  // -- sidebar script...
  $("#bar-btn").click(function () {
    $(".sidebar").toggleClass("show");
    var right = $(".sidebar").css("right");
    if (right == "0px") {
      $(".sidebar").css({ "right": "-30rem" });
      $(".layer").fadeOut();
    }
    else {
      $(".sidebar").css({ "right": "0px" });
      $(".layer").fadeIn();
    }
    $(".layer").click(function () {
      $(".sidebar").css({ "right": "-30rem" });
      $(".layer").fadeOut();
    });
  });
});
