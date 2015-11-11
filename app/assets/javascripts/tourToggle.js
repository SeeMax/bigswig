$( document ).ready(function() {

    var toggleOne = $('.tour-toggle-one')
        toggleTwo = $('.tour-toggle-two')
        sectionOne = $('.tour-one')
        sectionTwo = $('.tour-two');

    $(toggleTwo).click( function() {
      console.log('ok');
      $(this).removeClass('tour-toggle-hidden')
      $(toggleOne).addClass('tour-toggle-hidden')
      $(sectionTwo).removeClass('section-hidden')
      $(sectionOne).addClass('section-hidden')
    });


    $(toggleOne).click( function() {
      console.log('ok');
      $(this).removeClass('tour-toggle-hidden')
      $(toggleTwo).addClass('tour-toggle-hidden')
      $(sectionOne).removeClass('section-hidden')
      $(sectionTwo).addClass('section-hidden')
    });
});