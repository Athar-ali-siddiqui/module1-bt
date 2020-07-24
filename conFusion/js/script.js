$(document).ready(function () {
  $("#carousel").carousel({ interval: 500 });
  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#carousel").carousel("pause");
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#carousel").carousel("cycle");
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });
  $("#reservebtn").click(function () {
    $("#reserveModal").modal();
  });
  $(".closeModal").click(function () {
    $("#reserveModal").modal("hide");
  });
  $("#loginbtn").click(function () {
    $("#loginModal").modal();
  });
  $(".loginModalclose").click(function () {
    $("#loginModal").modal("hide");
  });
});
