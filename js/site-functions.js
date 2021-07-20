$(document).ready(function() {
  //Universal scrollTop
  function scrollTop(selector,offset) {
      $('body,html').animate({
          scrollTop: $(selector).offset().top - offset
      });
  }
  //services form
  $('a[href="#open-form"]').click(function(e) {
    e.preventDefault();
    $('#services-form-overlay').addClass('active');
  });
  $('#close-form').click(function() {
    $('#services-form-overlay').removeClass('active');
  });
  $('#service-form .radio-options .option').click(function() {
    var optionInput = $(this).text();

    $(this).addClass('active')
    $(this).siblings('.option').removeClass('active');
    $(this).parents('.radio-options').find('.option-input').val(optionInput);
    
    if ($(this).parents('.form-input.active').next('.form-input').length > 0) {
      $(this).parents('.form-input.active').removeClass('active');
      $(this).parents('.form-input').next('.form-input').addClass('active');
    }
  });
  $('#service-form .form-section').each(function() {
    var section = $(this).data('section')
    $('#service-form .progress-tracker').append('<div data-section="'+section+'" class="tracker-block"></div>')
  });
  $('/')
  
  //contact form
  $('.form-input input').focus(function() {
    if ($(this).val() === '') {
      $(this).parent().find('.placeholder').addClass('active');
    }
  });
  $('.form-input input').focusout(function() {
    if ($(this).val() === '') {
      $(this).parent().find('.placeholder').removeClass('active');
    }
  });
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
