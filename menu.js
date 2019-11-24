$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('.container').slideToggle(500);
  });

  $(window).resize(function() {
   if (  $(window).width() > 700 ) {
  $('.container').removeAttr('style');
 }
});//end resize
});
