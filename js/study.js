$(function () {
  $('.item-image').click(function () {
    const imagePosition = $(this).position();
    const imageTop = imagePosition.top - window.scrollY;
    const imageLeft = imagePosition.left - window.scrollX;
    const selectedImage = $(this).attr('src');
    $('#image-lightbox').attr('style','top: '+imageTop+'px; left: '+imageLeft+'px;');
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