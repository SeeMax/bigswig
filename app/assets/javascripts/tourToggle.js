$( document ).ready(function() {

    var toggleOne = $('.tour-toggle-one')
        toggleTwo = $('.tour-toggle-two')
        sectionOne = $('.tour-one')
        sectionTwo = $('.tour-two')
        optionOne = $("#ticket-option-one")
        optionTwo = $("#ticket-option-two");

    $(optionOne).click( function() {
      $(toggleOne).removeClass('tour-toggle-hidden')
      $(toggleTwo).addClass('tour-toggle-hidden')
      $(sectionTwo).removeClass('section-hidden')
      $(sectionOne).addClass('section-hidden')
    });

    $(optionTwo).click( function() {
      $(toggleTwo).removeClass('tour-toggle-hidden')
      $(toggleOne).addClass('tour-toggle-hidden')
      $(sectionTwo).removeClass('section-hidden')
      $(sectionOne).addClass('section-hidden')
    });


    $(toggleTwo).click( function() {
      $(this).removeClass('tour-toggle-hidden')
      $(toggleOne).addClass('tour-toggle-hidden')
      $(sectionTwo).removeClass('section-hidden')
      $(sectionOne).addClass('section-hidden')
    });


    $(toggleOne).click( function() {
      $(this).removeClass('tour-toggle-hidden')
      $(toggleTwo).addClass('tour-toggle-hidden')
      $(sectionOne).removeClass('section-hidden')
      $(sectionTwo).addClass('section-hidden')
    });
});