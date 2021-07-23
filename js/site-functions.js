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
    $('#services-form-overlay, body,html ').addClass('active');
  });
  $('#close-form').click(function() {
    $('#services-form-overlay').removeClass('active');
  });
  //service select 
  $('#service-form .service').click(function() {
    var serviceSection = $(this).data('section');
    $(this).parents('.form-section').removeClass('active');
    $('#service-form .form-section[data-section="'+serviceSection+'"]').addClass('active');
    //progress tracker
    $('#service-form .form-section[data-section="'+serviceSection+'"] .form-input').each(function() {
      var section = $(this).data('section')
      $('#service-form .progress-tracker').append('<div class="tracker-block"></div>');
    });
    $('#service-form .form-section[data-section="'+serviceSection+'"] .form-input:eq(0)').addClass('active');
    $('#service-form .progress-tracker').removeClass('hidden');
    //toggles 
    $('#service-form .toggle.prev, #service-form .toggle.next').removeClass('hidden');
    
  });
  //radio options
  $('#service-form .radio-options .option').click(function() {
    var optionInput = $(this).text();
    $(this).addClass('active')
    $(this).siblings('.option').removeClass('active');
    $(this).parents('.radio-options').find('.option-input').val(optionInput);
    setTimeout(function() {
      nextInput();
    }, 500);
  });
  
  
  //auto input
  $('#service-form .auto-input').click(function() {
    var inputText = $(this).text();
    var inputIndex = $(this).parents('.form-input').index();
    $(this).prev('.input-field').val(inputText);
    setTimeout(function() {
      nextInput();
    }, 500);
  });
  //next input
  function nextInput(item) {
    var currentIndex = $('.form-section.active .form-input.active').index();
    var currentInput = $('.form-section.active .form-input:eq('+currentIndex+')');
    var nextIndex = currentIndex + 1;
    var nextInput = $('.form-section.active .form-input:eq('+nextIndex+')');
    if (nextInput.length > 0) {
      
      nextInput.addClass('active');
      currentInput.removeClass('active');
    } else {
      currentInput.removeClass('active');
      currentInput.parents('.form-section').removeClass('active');
      $('.form-section[data-section="contact"], .form-section[data-section="contact"] .form-input').addClass('active');
      $('#service-form .toggle.next').addClass('hidden');
    }
    $('.tracker-block:eq('+currentIndex+')').addClass('active');
  }
  //form toggles
  $('#service-form .toggle.next').click(function() {
    if ($('.form-section.active .form-input.active input,.form-section.active .form-input.active textarea').val().length > 0) {
      $('.form-error').slideUp();
      nextInput();
    } else {
      $('.form-error').slideDown();
    }
  });
  $('#service-form .toggle.prev').click(function() {
    prevInput();
  });
  //prev input 
  function prevInput() {
   
    var currentIndex = $('.form-section.active .form-input.active').index();
    var currentInput = $('.form-section.active .form-input:eq('+currentIndex+')');
    var prevIndex = currentIndex - 1;
    var prevInput = $('.form-section.active .form-input:eq('+prevIndex+')');
    if (currentIndex == 0) {
      currentInput.removeClass('active');  
      currentInput.parents('.form-section').removeClass('active');
      $('.form-section[data-section="get-started"]').addClass('active');
    } else {      
      prevInput.addClass('active');
      currentInput.removeClass('active');
    }
    $('.tracker-block:eq('+prevIndex+')').removeClass('active');
  }

  
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
