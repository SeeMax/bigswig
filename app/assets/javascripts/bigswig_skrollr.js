$(function() {
    var windowWidth = $(window).width();
     if(windowWidth > 767){
      skrollr.init({
      forceHeight: false
    });
  }
});