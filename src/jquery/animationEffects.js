$(document).ready(function () {
  //   $("span.loader-animation-4").animate({
  //     left: 10,
  //   });
  //   $("span.loader-animation-4").animate({
  //     top: 10,
  //     opacity: 0.25,
  //   });
  //   $("span.loader-animation-4").animate({
  //     left: 0,
  //     opacity: 0.5,
  //   });
  //   $("span.loader-animation-4").animate({
  //     top: 0,
  //     opacity: 1,
  //   });
  var pageLoadSuccess = false;

  $("span.loader-animation-4").animate({
    top: 20,
  });
  $("span.loader-animation-3").animate({
    left: 10,
  });

  $("span.loader-animation-4").animate({
    right: 30,
    opacity: 0.25,
  });
  $("span.loader-animation-3").animate({
    top: 20,
    opacity: 0.25,
  });

  $("span.loader-animation-4").animate({
    top: 0,
    opacity: 1,
  });
  $("span.loader-animation-2").animate(
    {
      left: 20,
      opacity: 0.25,
    },
    "slow"
  );
  $("span.loader-animation-1").animate(
    {
      left: 30,
      opacity: 0.25,
    },
    "slow"
  );

  $("span.loader-animation-3").animate({
    left: -20,
    opacity: 0.25,
  });
  $("span.loader-animation-2").animate(
    {
      top: 20,
      opacity: 0.25,
    },
    "slow"
  );
  $("span.loader-animation-1").animate(
    {
      top: 20,
      opacity: 0.25,
    },
    "slow"
  );
  $("span.loader-animation-3").animate({
    top: 0,
    opacity: 1,
  });
  $("span.loader-animation-2").animate(
    {
      left: -10,
      opacity: 0.5,
    },
    "slow"
  );
  $("span.loader-animation-2").animate(
    {
      top: 0,
      opacity: 1,
    },
    "slow"
  );
  $("span.loader-animation-1").animate(
    {
      left: 0,
      opacity: 0.5,
    },
    "slow"
  );
  $("span.loader-animation-1").animate(
    {
      top: 0,
      opacity: 1,
    },
    "slow"
  );

  // Wrap every letter in a span
  var textWrapper = document.querySelector(".ml9 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml9 .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1),
    })
    .add({
      targets: ".ml9",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
  setTimeout(loadHome, 4500);

  function loadHome() {
    $.ajax({
      type: "GET",
      url: "home.html",
      success: function (data, textStatus) {
        if (textStatus == "success") {
          // data.redirect contains the string URL to redirect to
          location.replace("/home.html");
        } else {
          // data.form contains the HTML for the replacement form
          alert("Error while loading Home Page");
        }
      },
    });
  }
});
