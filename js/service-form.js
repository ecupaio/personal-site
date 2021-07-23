//services form
var lastInput;
$('a[href="#open-form"]').click(function(e) {
  e.preventDefault();
  
  $('#services-form-overlay, body,html, #service-form .form-section[data-section="get-started"], #service-form .form-section[data-section="get-started"] .form-input').addClass('active');
});
$('#close-form').click(function() {
  $('#services-form-overlay, body,html').removeClass('active');
  $('#service-form .form-section, #service-form .form-section .form-input').removeClass('active');
  $('#service-form .toggle.prev, #service-form .toggle.next').addClass('hidden');
});
//open contact section 
$('.open-contact').click(function(e) {
  e.preventDefault();
  if ($('#services-form-overlay').hasClass('active')) {
    $('#service-form .form-section[data-section="get-started"]').removeClass('active');
    $('#service-form .form-section[data-section="contact"], #service-form .form-section[data-section="contact"] .form-input').addClass('active');
    $('#services-form-overlay, body,html').addClass('active');
    $('#service-form .toggle.prev').removeClass('hidden');
  } else {
    $('#service-form .form-section[data-section="get-started"]').removeClass('active');
    $('#service-form .form-section[data-section="contact"], #service-form .form-section[data-section="contact"] .form-input').addClass('active');
    $('#services-form-overlay, body,html').addClass('active');
    $('#service-form .toggle.prev').removeClass('hidden');

  }
  
});
//service select 
$('#service-form .service').click(function() {
  $('#service-form .progress-tracker').html('');
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
  //clear all inputs 
  if ($('#service-form .input-data').parents('.form-section').data('section') !== 'contact' ) {
    $('#service-form .input-data').val('');
  } 
  var serviceName = $(this).find('.service-title').text()
  $('#service-form [data-section="get-started"] .input-data').val(serviceName);
  console.log(serviceName);
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

//form toggles
$('#service-form .toggle').click(function() {
  if ($(this).hasClass('next')) {
    if ($('.form-section.active .form-input.active input,.form-section.active .form-input.active textarea').val().length > 0) {
      $('.form-error').slideUp();
      nextInput();
    } else {
      $('.form-error').slideDown();
    }
  } else if ($(this).hasClass('prev')) {
    prevInput();
  }
  
});
//prev input 
function prevInput() {
  var currentIndex = $('.form-section.active .form-input.active').index();
  var currentInput = $('.form-section.active .form-input:eq('+currentIndex+')');
  var prevIndex = currentIndex - 1;
  var prevInput = $('.form-section.active .form-input:eq('+prevIndex+')');
  $('#service-form .form-error').slideUp();
  if (lastInput) {
    if (currentInput.parents('.form-section').data('section') === 'contact') {
      lastInput.parents('.form-section').addClass('active');
      lastInput.addClass('active');
      currentInput.removeClass('active');
      currentInput.parents('.form-section').removeClass('active');
      $('#service-form .toggle.next').removeClass('hidden');
    } else if (currentIndex == 0) {
      currentInput.removeClass('active');  
      currentInput.parents('.form-section').removeClass('active');
      $('.form-section[data-section="get-started"], .form-section[data-section="get-started"] .form-input').addClass('active');
      $('#service-form .toggle').addClass('hidden');
      $('#service-form .progress-tracker').addClass('hidden');
    } else {      
      prevInput.addClass('active');
      currentInput.removeClass('active');
    }
  } else {
    $('#service-form .form-section[data-section="get-started"],#service-form .form-section[data-section="get-started"] .form-input').addClass('active');
    $('#service-form .form-section[data-section="contact"],#service-form .form-section[data-section="contact"] .form-input').removeClass('active');
    $('#service-form .toggle.prev').addClass('hidden');
  }
  
  $('.tracker-block:eq('+prevIndex+')').removeClass('active');
}
//next input
function nextInput() {
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
    lastInput = currentInput;
  }
  $('.tracker-block:eq('+currentIndex+')').addClass('active');
}
//form submission
$('#service-form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfSJvq5RgFLzQgAnhSlwKAlZihL6_vCDM2NYVw0Cn3oktrfSQ/formResponse',
    data: $(this).serialize()
  }).always(function(data) {
    $('#service-form .form-body').slideUp();
    $('service-form .form-success').slideDown();
    setTimeout(function() {
      $('#services-form-overlay, body,html').removeClass('active');
    }, 3000);
  });
});