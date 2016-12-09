//DOC ready

$(document).ready(function() {
  //Jag har provat en massa funktioner som jag lämnar kvar för att komma ihåg i framtiden
  $('body').click(function(){
    $('.navHeaderCollapse').collapse('hide');
  });
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 2000);
  var bg = jQuery("#home, #band, #contact");
  jQuery(window).resize("resizeBackground");
  function resizeBackground() {
    bg.height(jQuery(window).height() - 60);
  }
  resizeBackground();
}); // end DOC ready
