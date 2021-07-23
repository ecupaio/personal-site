$(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://docs.google.com/forms/d/10kXaHPdQGi2R-hnklYeAw9jtW67vCu9Z1ALC6AdyzoM/formResponse',     //The public Google Form url, but replace /view with /formResponse
      data: $(this).serialize(),
      type: 'POST'
    }).always(function(data) {
      $('.form-success').addClass('active');
    });
  });
  
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
