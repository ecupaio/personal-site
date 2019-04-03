$(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
    url: 'https://docs.google.com/forms/d/10kXaHPdQGi2R-hnklYeAw9jtW67vCu9Z1ALC6AdyzoM/formResponse',     //The public Google Form url, but replace /view with /formResponse
    data: $(this).serialize(),
    type: 'POST',
    statusCode: {
      0: function(data) {
        //success
        $('#form-success').text('hooray!');
      },
      200: function(data) {
        //success
        $('#form-success').text('hooray!');
      },
      403: function(data) {
        //error
        alert('Oh no! something went wrong. we should check our code to make sure everything matches with Google');
      }
    }
  });
  });
});
