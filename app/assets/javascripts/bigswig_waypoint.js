$( document ).ready(function() {

  $('#home').waypoint(function(direction) {
    $('#item1').addClass('active', direction === 'down');
    $('#item2').removeClass('active', direction === 'down');
    $('#item3').removeClass('active', direction === 'down');
    $('#item4').removeClass('active', direction === 'down');
  }, { offset: -1 });

  $('#the_tour').waypoint(function(direction) {
    $('#item2').addClass('active', direction === 'down');
    $('#item1').removeClass('active', direction === 'down');
    $('#item3').removeClass('active', direction === 'down');
    $('#item4').removeClass('active', direction === 'down');
  }, { offset: 100 });

  $('#about_us').waypoint(function(direction) {
    $('#item3').addClass('active', direction === 'down');
    $('#item1').removeClass('active', direction === 'down');
    $('#item2').removeClass('active', direction === 'down');
    $('#item4').removeClass('active', direction === 'down');
  }, { offset: 100 });

  $('#tickets').waypoint(function(direction) {
    $('#item4').addClass('active', direction === 'down');
    $('#item1').removeClass('active', direction === 'down');
    $('#item2').removeClass('active', direction === 'down');
    $('#item3').removeClass('active', direction === 'down');
  }, { offset: 100 });
});
