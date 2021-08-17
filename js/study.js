$(function () {
  $('.item-image').click(function () {
    const selectedImage = $(this).attr('src');
    $('.selected-image').attr('src',selectedImage);
    $('#image-lightbox, body,html').addClass('active');
  });
  $('.close-lightbox').click(function() {
    $('#image-lightbox, body,html').removeClass('active');
  });
  $('#image-lightbox').click(function (e) {
    if (!$(e.target).hasClass('selected-image') && !$(e.target).hasClass('image-container')) {
      $('#image-lightbox, body,html').removeClass('active');
    } else {
      
    }
  });
});