$(window).load(function() {
  var s = skrollr.init();

  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
      skrollr.init({
          forceHeight: false
      });
  }

  smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 58, // Integer. How far to offset the scrolling anchor location in pixels
  });

});











