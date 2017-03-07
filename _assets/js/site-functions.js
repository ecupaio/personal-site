$(document).ready(function() {
    //Header Collapse
    var headerHeight;
    $('.header-collapse').click(function() {
        $('#header, #main').addClass('collapsed');

    });
    var scrollLimit = 15;
    $(window).scroll( function(){
        $('#header, #main').addClass('collapsed');
        var userScroll = $(this).scrollTop();
        console.log(userScroll);
        if (userScroll > scrollLimit) {
            //Down
            $('#header, .header-inner').addClass('hide');
        } else {
            //Up
            $('#header, .header-inner').removeClass('hide');
        }

    });
    //Project Toggle
    $('.project-col').click(function() {
        headerHeight = $('#header').height() + 20;
        $(this).siblings().find('.project-info').slideUp();
        $(this).find('.project-info').slideToggle();
        $(this).siblings().find('.project').removeClass('active');
        $(this).find('.project').toggleClass('active');
    });
    $('.close-project').click(function(){
      $(this).removeClass('active');
      $('.project-col.active').removeClass('active');
    });
    //Load Iframe
    $('.load-iframe').click(function() {
        var iframeURL = $(this).data('url');
        $('.iframe-window').attr('src',iframeURL);
        $('.iframe-window').load(function(){
            $('.iframe-overlay').addClass('hidden');
            $('.iframe-window').addClass('active');
        });


    });

});
