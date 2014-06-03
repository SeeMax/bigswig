$( document ).ready(function() {
  smoothScroll.init({
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
      offset: 115, // Integer. How far to offset the scrolling anchor location in pixels
      callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
      callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
  });

  ( function( $ ) {
      // Init Skrollr
      var s = skrollr.init({
          render: function(data) {
              //Debugging - Log the current scroll position.
              //console.log(data.curTop);
          }
      });
  } )( jQuery );

});