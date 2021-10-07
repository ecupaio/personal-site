$(document).ready(function() {
  //Universal scrollTop
  function scrollTop(selector) {
      $('body,html').animate({
          scrollTop: $(selector).offset().top
      });
  }
  //Link scroll top
  $('a[href^="#"]').click(function(e) {
    if ($(this).attr('href').length > 1) {
      e.preventDefault();
      var selector = $(this).attr('href');
      scrollTop(selector);
    }
    
  })
  

  
  //menu
  $('#nav-toggle').click(function() {
    $('.project-overlay, body').removeClass('active');
    $('#nav-toggle, #sidebar-nav, main').toggleClass('active');
    if ($('#sidebar-nav').hasClass('active')) {
      $('#sidebar-nav .nav-link').each(function(i) {
        var $this = $(this);
        setTimeout(function() {
          $this.addClass('active');
        },i * 100);
      });
    } else {
      $('#sidebar-nav .nav-link').removeClass('active');
    }

  });
  $('.nav-link').click(function(e) {
    $('#nav-toggle, #sidebar-nav, main').removeClass('active');
  });
  //on scroll top sections

  $(window).scroll(function() {
    function elementScrolled(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    if ($('.skill-grid').length > 0) {
      if (elementScrolled('.skill-grid')) {

        $('.skill-grid .skill').each(function(i) {
          var that = this;
           var t = setTimeout(function() {

               $(that).addClass('active');
           }, 250 * i);
        });
      }
    }

    if ($('#post-content').length > 0) {
      if ($(window).scrollTop() > $('#post-content').offset().top) {
        $('.blog-topbar').addClass('active');
      } else {
        $('.blog-topbar').removeClass('active');
      }
    }
  });
});
