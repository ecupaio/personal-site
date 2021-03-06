$(document).ready(function() {
  //Universal scrollTop
  function scrollTop(selector,offset) {

      $('body,html').animate({
          scrollTop: $(selector).offset().top - offset
      });
  }
  setTimeout(function() {
    $('#hero').addClass('active');
  }, 700);
  setTimeout(function() {
    $('#portfolio').addClass('active');
  }, 1400);
  //project overlay
  $('.project-col').click(function(e) {
    $('.project-slider .slider-images').html('');
    var projectTitle = $(this).find('.project-title').text();
    var projectLink = $(this).find('.project-link').text();
    var projectTech = $(this).find('.project-tech').html();
    var projectText = $(this).find('.project-text').html();
    var projectImages = JSON.parse($(this).find('.project-images').text());

    $('.selected-title').text(projectTitle);
    $('.selected-tech').html(projectTech);
    $('.selected-link').attr('href',projectLink);
    $('.about-project').html(projectText);
    $.each(projectImages,function(i,img) {
      $('.project-slider .slider-images').append("<div class='slide'><img src='/images/"+img+"' /></div>");
    });
    if (projectImages.length < 2) {
      $('.slide-toggle').addClass('hidden');
    } else {
      $('.slide-toggle').removeClass('hidden');
    }
    $('.slide').first().addClass('active');
    $('.project-overlay, body,html').addClass('active');
    //todo: add force scroll top
  });
  
  $('.close-overlay').click(function(e) {
    $('.project-overlay, body,html').removeClass('active');
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
    if ($(this).hasClass('prev')) {
      if ($('.slide.active').prev('.slide').length > 0) {
        $('.slide.active').removeClass('active').prev('.slide').addClass('active');
      } else {
        $('.slide.active').removeClass('active');
        $('.slide').last().addClass('active');
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
