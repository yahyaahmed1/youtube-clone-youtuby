$(function () {
  // show and hide the filter options
  $("#search-filter-icon").click(function () {
    $(".filter-column").slideToggle("slow");
  });
  // check one box in every groub
  $("input:checkbox").click(function () {
    var box = $(this);
    if (box.is(":checked")) {
      var group = `input:checkbox[name="${box.attr("name")}"]`;
      $(group).prop("checked", false);
      box.prop("checked", true);
    }

  });
});