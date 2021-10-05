$(function () {
  $('#campaigner-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSck8IBk6lODJTEgaHRsZwKAbJsV-HdFFdSe10-lTYH5qzuBtg/formResponse',
      data: $(this).serialize(),
      type: 'POST'
      
    }).always(function(data) {
      $('#campaigner-form .form-success').slideDown();
      $('#campaigner-form .form-body').slideUp();
      dataLayer.push({'event': 'gaEvent','eventCategory':'Campaigner Form','eventAction': 'Submission'});
    });
  });
  $('#campaigner-form .office-select').change(function () {
    var office = $('#campaigner-form .office-option:selected').val();
    $('#campaigner-form .office-selection').val(office);
  });
});