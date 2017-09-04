$(document).ready(function() {
  $('.carousel').carousel({
    interval: 10000
  })
  .on('click', '.carousel-control', handle_nav);

  var handle_nav = function(e) {
    e.preventDefault();
    var nav = $(this);
    nav.parents('.carousel').carousel(nav.data('slide'));
  }
  $.each( jQuery('.carousel .item'), function( i, val ) {
    $(this).css('background-image','url('+$(this).find('img').attr('src')+')').css('background-size', 'cover').find('img').css('visibility','hidden');
  });
});
