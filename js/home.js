$(function() {
  //project overlay
  $('.project-overlay').click(function(e) {
    if ($(e.target).parents('.overlay-content').length == 0 && $('.project-overlay').hasClass('active')) {
      $('.project-overlay, body,html').removeClass('active');
    }
  });
  $('.project-col').click(function(e) {
    $('.project-slider .slider-images').empty();
    var projectTitle = $(this).find('.project-title').text();
    var projectLink = $(this).find('.project-link').text();
    var projectTech = $(this).find('.project-tech').html();
    var projectText = $(this).find('.project-text').html();
    var projectImages = JSON.parse($(this).find('.project-images').text());
    $('.selected-title').text(projectTitle);
    $('.selected-tech').html(projectTech);
    if (projectLink.length > 1) {
      $('.selected-link').attr('href',projectLink);
      $('.selected-link').removeClass('hidden');
    } else {
      $('.selected-link').addClass('hidden');
    }
    
    $('.about-project').html(projectText);
    $.each(projectImages,function(i,img) {
      var slide = '<div class="slide">'+
                    '<img alt="image of'+projectTitle+'" src="/images/'+img+'" />'+
                  '</div>';
      $('.project-slider .slider-images').append(slide);
    });
    if (projectImages.length < 2) {
      $('.slide-toggle').addClass('hidden');
      
    } else {
      $('.slide-toggle').removeClass('hidden');
    }
    $('.slide').first().addClass('active');
    if ($('.slide.active img').height() > 525) {  
      $('.scroller').addClass('active');  
    } else {
      $('.scroller').removeClass('active');  
    }
    $('.project-overlay, body,html').addClass('active');
    
  });
  $('.load-more-projects').click(function (e) {
    e.preventDefault();
    var firstHidden = $('.project-col.hidden').first()
    
    $('.project-col.hidden').each(function (i) {
      if (i < 9) {
        $(this).removeClass('hidden');
      } 
      
    });
    $('body,html').animate({
      scrollTop: firstHidden.offset().top
    });
    if ($('.project-col.hidden').length == 0 ) {
      $('.load-more-projects').addClass('hidden');
    }
    
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
    $('.slider-images').scrollTop(0);
    if ($('.slide.active img').height() > 525) {  
      $('.scroller').addClass('active');  
    } else {
      $('.scroller').removeClass('active');  
    }
  });
  $('.slider-images').scroll(function(e) {
    if ($(this).scrollTop()) {
      $('.scroller').removeClass('active');
    }
  });
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