$(document).ready(function() {
    //Header Collapse
    var headerHeight;
    $('.header-collapse').click(function() {
        $('#header, #main').addClass('collapsed');

    });

    $(window).on('wheel', function(e) {
    	var delta = e.originalEvent.deltaY;
        console.log(delta);
    	if (delta > 0) {
            $('#header, .header-inner').addClass('hide');
        } else {
            $('#header, .header-inner').removeClass('hide');
        }
    });
    //Project Toggle
    $('.project-col').click(function() {
        headerHeight = $('#header').height() + 20;
        $(this).siblings().find('.project').removeClass('active');
        $(this).find('.project').toggleClass('active');
    });
    $('.close-project').click(function(){
      $(this).removeClass('active');
      $('.project-col.active').removeClass('active');
    });
    //Load Iframe
    $('.iframe-overlay').click(function() {
        var iframeURL = $('.load-iframe').data('url');
        $('.iframe-window').attr('src',iframeURL);
        $('.load-iframe i').attr('class','fa fa-circle-o-notch fa-spin');
        $('.iframe-window').load(function(){
            $('.iframe-overlay').addClass('hide');
            $('#project-iframe').attr('style','');
            $('.iframe-window').addClass('active');
            $('.iframe-buttons').slideDown();
        });
    });
    $('.resize').click(function(){
        if ($('.enlarge').hasClass('active')) {
            $('.enlarge').removeClass('active');
            $('.minimize').addClass('active');
        } else {
            $('.enlarge').addClass('active');
            $('.minimize').removeClass('active');
        }
        $('#project-iframe, #project-body').toggleClass('active');
        $('html,body').delay('500').animate({
            scrollTop: $('#project-iframe').offset().top
        });
    });
});
