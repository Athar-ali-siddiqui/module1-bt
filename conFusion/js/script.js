(function (window) {
  var obj = {};
  obj.sendRequest = function (url, tf = true, handler) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.status == 200 && xhttp.readyState == 4) {
        obj.a = xhttp.responseText;
        console.log(obj.a);
        handler();
      }
    };
    xhttp.open("GET", url, tf);
    xhttp.send(null);
  };
  window.$obj = obj;
})(window);
// AJAX REQUEST

(function (window) {
  main = {};
  const insertHtml = function (selector, html) {
    $(selector).html(html);
  };

  const showLoading = function (selector) {
    html =
      "<div class = 'text-center'> <img src = 'img/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };
  $(document).ready(function () {
    $("#navbar-collapsebtn").blur(function () {
      const width = window.innerWidth;
      console.log(width);
      if (width < 576) {
        console.log("1");
        $("#navbar").collapse("hide");
      }
    });
    $("#loginbtn").click(function () {
      $("#loginModal").modal();
    });
    $(".loginModalclose").click(function () {
      $("#loginModal").modal("hide");
    });
    showLoading("#main-content");
    main.home = function () {
      $obj.sendRequest("../home-snippet.html", false, function () {
        $("#nav-contact").removeClass("active");
        $("#nav-about").removeClass("active");
        $("#nav-home").addClass("active");
        $insertHtml("#main-content", $obj.a);
        $("#reservebtn").show();
        $("#carousel").carousel({ interval: 500 });
        $("#carouselButton").click(function () {
          if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#carousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
          } else if (
            $("#carouselButton").children("span").hasClass("fa-play")
          ) {
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
      });
    };
    main.home();
    main.aboutus = function () {
      showLoading("#main-content");
      $obj.sendRequest("../aboutus-snippet.html", false, function () {
        $("#nav-contact").removeClass("active");
        $("#nav-home").removeClass("active");
        $("#nav-about").addClass("active");
        $insertHtml("#main-content", $obj.a);
        $("#reservebtn").hide();
      });
    };
    main.contactus = function () {
      showLoading("#main-content");
      $obj.sendRequest("../contactus-snippet.html", false, function () {
        $("#nav-home").removeClass("active");
        $("#nav-about").removeClass("active");
        $("#nav-contact").addClass("active");
        $insertHtml("#main-content", $obj.a);
        $("#reservebtn").hide();
      });
    };
  });
  window.$main = main;
  window.$insertHtml = insertHtml;
})(window);
