$(document).ready(function() {
  //Universal scrollTop
  function scrollTop(selector,offset) {
      $('body,html').animate({
          scrollTop: $(selector).offset().top - offset
      });
  }
  setTimeout(function() {
    $('#home .hero-text').addClass('active');
  }, 1000);
  //project overlay
  $('.project-col').click(function(e) {
    $('.project-slider .slider-images').html('');
    var projectTitle = $(this).find('.project-title').text();
    var projectLink = $(this).find('.project-link').text();
    var projectTech = $(this).find('.project-tech').text();
    var projectImages = JSON.parse($(this).find('.project-images').text());
    console.log(projectTitle);
    $('.info-title').text(projectTitle);
    $.each(projectImages,function(i,img) {
      $('.project-slider .slider-images').append("<div class='slide'><img src='/images/"+img+"' /></div>");
    });
    if (projectImages.length < 2) {
      $('.slide-toggle').addClass('hidden');
    } else {
      $('.slide-toggle').removeClass('hidden');
    }
    $('.slide').first().addClass('active');
    $('.project-overlay, body').addClass('active');
  });
  $('.project-overlay').click(function(e) {
    if ($(e.target).hasClass('project-overlay')) {
      $('.project-overlay, body').removeClass('active');
    }
  });
  $('.slide-toggle').click(function() {
    if ($(this).hasClass('next')) {
      if ($('.slide.active').next('.slide').length > 0) {
        $('.slide.active').removeClass('active').next('.slide').addClass('active');
      } else {
        $('.slide.active').removeClass('active');
        $('.slide').first().addClass('active');
      }
    }
  });
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
    $('#nav-toggle, #sidebar-nav, #wrapper').toggleClass('active');
  });
  $('.nav-link').click(function() {
    $('#nav-toggle, #sidebar-nav, #wrapper').removeClass('active');
  })
});
