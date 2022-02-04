$(function() {
  
  
  //hero animation
  setTimeout(function() {
    $('#hero').addClass('active');
    
  }, 700);
  setTimeout(function() {
    $('#hero .text-item').each(function(i) {
      var $this= $(this);
      setTimeout(function() {
        $this.addClass('active');
      }, i * 300);
    });
  }, 1000);

  //studies slider
  $('#studies-slider').slick({
    slidesToShow: 1,
  });
  
});