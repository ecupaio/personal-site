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
});