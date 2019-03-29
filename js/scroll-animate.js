$(document).ready(function(){
  $('#about').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('.sec-1').offset().top
      }, 500);
    return false;
  });
});


$(document).ready(function(){
  $('#membership').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('.sec-5').offset().top
      }, 500);
    return false;
  });
});


$(document).ready(function(){
  $('#rc-types').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('.sec-2').offset().top
      }, 500);
    return false;
  });
});


$(document).ready(function(){
  $('#gallery').on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('.sec-gallery').offset().top
      }, 500);
    return false;
  });
});



