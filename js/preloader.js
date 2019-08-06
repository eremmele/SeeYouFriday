$(window).on('load', function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(300).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(300).css({'overflow':'visible'});
})
