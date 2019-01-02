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
  //project
  $('.project-col').click(function(e) {
    var projectTitle = $(this).find('.project-title').text();
    var projectLink = $(this).find('.project-link').text();
    var projectTech = $(this).find('.project-tech').text();
    var projectImages = JSON.parse($(this).find('.project-images').text());
    $.each(projectImages,function(i,img) {
      $('.project-slider').append("<div class='slide'><img src='/images/"+img+"' /></div>");
    });
    $('.project-overlay').addClass('active');
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
});
