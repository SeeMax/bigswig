$(window).load(function() {
  ( function( $ ) {
      // Init Skrollr
      var s = skrollr.init({
          render: function(data) {
              //Debugging - Log the current scroll position.
              //console.log(data.curTop);
          }
      });

  //The options (second parameter) are all optional. The values shown are the default values.
  skrollr.menu.init(s, {
      //skrollr will smoothly animate to the new position using `animateTo`.
      animate: true,

      //The easing function to use.
      easing: 'sqrt',

      //Multiply your data-[offset] values so they match those set in skrollr.init
      scale: 2,

      //How long the animation should take in ms.
      duration: function(currentTop, targetTop) {
          //By default, the duration is hardcoded at 500ms.
          return 1000;

          //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
          //return Math.abs(currentTop - targetTop) * 10;
      },


  });
  } )( jQuery );
});











