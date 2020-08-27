//Calling Animation page4

$(document).ready(function () {
  //   $("div .random-fact").load(
  //     "http://numbersapi.com/" + Math.floor(Math.random() * 100),
  //     function (responseTxt, statusTxt) {
  //       if (statusTxt != "success") {
  //         $("div .random-fact").html
  //       } else {
  //         alert("error");
  //       }
  //     }
  //   );
  $("#navId a").click((e) => {
    e.preventDefault();
    $(this).tab("show");
  });

  $.ajax({
    method: "GET",
    url: "http://numbersapi.com/" + Math.floor(Math.random() * 100),
    success: function (data) {
      $(".spinner-border").hide();
      $(".random-fact").text(data);
    },
    error: function (e) {
      $(".spinner-border").hide();
      $(".random-fact").text("Error Fetching data from API");
    },
  });

  $("#getFacts").click(function (e) {
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "http://numbersapi.com/" + Math.floor(Math.random() * 100),
      success: function (data) {
        $(".spinner-border").hide();
        $(".random-fact").text(data);
      },
      error: function (e) {
        $(".spinner-border").hide();
        $(".random-fact").text("Error Fetching data from API");
      },
    });
  });
});
