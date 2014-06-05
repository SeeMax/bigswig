$( document ).ready(function() {
  $(window).scroll(function () {
      if ($(document).scrollTop() <= 20) {
          $('.nav-bar').removeClass('small-nav', 1000);
          $('.nav-right').css("margin-left" , "30%");
      } else {
          $('.nav-bar').addClass('small-nav', 1000);
          $('.nav-right').css("margin-left" , "0%");
      }

  });
});