$(function () {
  // read more btn
  $("#btn-more").on("click", function () {
    readMore();
  });
  // replys display
  $(".reply").click(function () {
    $(this).parents("div.row").next("div.card-inner").toggle();
  });
});

function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var moreBtn = document.getElementById("btn-more");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreBtn.innerHTML = "عرض المزيد";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreBtn.innerHTML = "عرض عناصر أقل";
    moreText.style.display = "inline";
  }
}