$(function() {
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
  if (window.location.search.indexOf('tag') > -1) {
    var tag = decodeURIComponent(getUrlParameter('tag')).replace(/\+/g,' ');
    $('.tag-filter').append('<div class="tag-block"><span class="tag-text">'+tag+'</span><span class="remove-tag">&times;</span></span></div>').removeClass('hidden')
    $('.post').each(function (i) {
      var postTags = $(this).find('.post-tags').text()
      if (postTags.indexOf(tag) > -1) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
    $('.remove-tag').click(function () {
      $(this).parents('.tag-block').remove();
      if ($('.tag-block').length == 0) {
        $('.tag-filter').addClass('hidden');
      }
      $('.post').each(function (i) {
        $(this).removeClass('hidden');
      });  
    })
  }
  //fb share link
  $('.share-btn.fbook').click(function (e) {
    e.preventDefault();
    var link = $(this).attr('href');
    FB.ui({
      method: 'share',
      href: link    
    }, function(response){});
  });
  //copy link
  $('.share-btn.copy').click(function(e) {
    e.preventDefault();
    var copyText = $(this).find('.copy-link');
    copyText.focus();
    copyText.select();
    copyText[0].setSelectionRange(0, 99999); 
    document.execCommand("copy");
    $('.share-btn.copy').addClass('active');
    setTimeout(function(){
      $('.share-btn.copy').removeClass('active');  
    },1000);
  });
});