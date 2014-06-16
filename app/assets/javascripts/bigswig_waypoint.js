$(window).load(function() {

$('.nav-bar').waypoint('sticky');

  $('#home').waypoint(function(direction) {
    if (direction === 'down') {
      $('#item1, #item1m').addClass('active');
      $('#item2, #item2m').removeClass('active');
      $('#item3, #item3m').removeClass('active');
      $('#item4, #item4m').removeClass('active');
    }
  }, { offset: -1 });

  $('#home').waypoint(function(direction) {
    if (direction === 'up') {
      $('#item1, #item1m').addClass('active');
      $('#item2, #item2m').removeClass('active');
      $('#item3, #item3m').removeClass('active');
      $('#item4, #item4m').removeClass('active');
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
      $('#item2, #item2m').addClass('active');
      $('#item1, #item1m').removeClass('active');
      $('#item3, #item3m').removeClass('active');
      $('#item4, #item4m').removeClass('active');
    }
  }, { offset: 58 });

  $('#the_tour').waypoint(function(direction) {
    if (direction === 'up') {
      $('#item2, #item2m').addClass('active');
      $('#item1, #item1m').removeClass('active');
      $('#item3, #item3m').removeClass('active');
      $('#item4, #item4m').removeClass('active');
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
     $('#item3, #item3m').addClass('active');
     $('#item2, #item2m').removeClass('active');
     $('#item1, #item1m').removeClass('active');
     $('#item4, #item4m').removeClass('active');
   }
 }, { offset: 58 });

 $('#about_us').waypoint(function(direction) {
   if (direction === 'up') {
     $('#item3, #item3m').addClass('active');
     $('#item2, #item2m').removeClass('active');
     $('#item1, #item1m').removeClass('active');
     $('#item4, #item4m').removeClass('active');
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
     $('#item4, #item4m').addClass('active');
     $('#item2, #item2m').removeClass('active');
     $('#item1, #item1m').removeClass('active');
     $('#item3, #item3m').removeClass('active');
   }
 }, { offset: 58 });

 $('#tickets').waypoint(function(direction) {
   if (direction === 'up') {
     $('#item4, #item4m').addClass('active');
     $('#item2, #item2m').removeClass('active');
     $('#item1, #item1m').removeClass('active');
     $('#item3, #item3m').removeClass('active');
   }
 }, {
   offset: function() {
     // This is the calculation that would give you
     // "bottom of element hits middle of window"
     return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
   }
 });
});

