$( document ).ready(function() {
  $(window).scroll(function () {
      if ($(document).scrollTop() <= 18) {
          $('.nav-bar').removeClass('small-nav', 1000);
      } else {
          $('.nav-bar').addClass('small-nav', 1000);
      }
  });
});