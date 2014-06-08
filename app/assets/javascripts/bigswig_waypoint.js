
$( document ).ready(function() {

$('.nav-bar').waypoint('sticky');

  $('#home-anchor').waypoint(function(direction) {
    if (direction === 'down') {
      $('#item1').addClass('active');
      $('#item2').removeClass('active');
      $('#item3').removeClass('active');
      $('#item4').removeClass('active');
    }
  }, { offset: 30 });

  $('#home').waypoint(function(direction) {
    if (direction === 'up') {
      $('#item1').addClass('active');
      $('#item2').removeClass('active');
      $('#item3').removeClass('active');
      $('#item4').removeClass('active');
    }
  }, {
    offset: function() {
      // This is the calculation that would give you
      // "bottom of element hits middle of window"
      return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
    }
  });


  $('#the_tour').waypoint(function(direction) {
    if (direction === 'down') {
      $('#item2').addClass('active');
      $('#item1').removeClass('active');
      $('#item3').removeClass('active');
      $('#item4').removeClass('active');
    }
  }, { offset: 58 });

  $('#the_tour').waypoint(function(direction) {
    if (direction === 'up') {
      $('#item2').addClass('active');
      $('#item1').removeClass('active');
      $('#item3').removeClass('active');
      $('#item4').removeClass('active');
    }
  }, {
    offset: function() {
      // This is the calculation that would give you
      // "bottom of element hits middle of window"
      return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
    }
  });

 $('#about_us').waypoint(function(direction) {
   if (direction === 'down') {
     $('#item3').addClass('active');
     $('#item2').removeClass('active');
     $('#item1').removeClass('active');
     $('#item4').removeClass('active');
   }
 }, { offset: 58 });

 $('#about_us').waypoint(function(direction) {
   if (direction === 'up') {
     $('#item3').addClass('active');
     $('#item2').removeClass('active');
     $('#item1').removeClass('active');
     $('#item4').removeClass('active');
   }
 }, {
   offset: function() {
     // This is the calculation that would give you
     // "bottom of element hits middle of window"
     return $.waypoints('viewportHeight') / 3 - $(this).outerHeight();
   }
 });

 $('#tickets').waypoint(function(direction) {
   if (direction === 'down') {
     $('#item4').addClass('active');
     $('#item2').removeClass('active');
     $('#item1').removeClass('active');
     $('#item3').removeClass('active');
   }
 }, { offset: 58 });

 $('#tickets').waypoint(function(direction) {
   if (direction === 'up') {
     $('#item4').addClass('active');
     $('#item2').removeClass('active');
     $('#item1').removeClass('active');
     $('#item3').removeClass('active');
   }
 }, {
   offset: function() {
     // This is the calculation that would give you
     // "bottom of element hits middle of window"
     return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
   }
 });
});

