$(document).ready(function() {
    //Header Collapse
    var headerHeight;
    $('.header-collapse').click(function() {
        $('#header, #main').addClass('collapsed');

    });

    $(window).on('wheel', function(e) {
    	var delta = e.originalEvent.deltaY;

    	if (delta > 0) {
            $('#header, .header-inner').addClass('hide');
        } else {
            $('#header, .header-inner').removeClass('hide');
        }
    });
    var scrollLimit = 15;
    $(window).scroll( function(){

        var userScroll = $(this).scrollTop();
        console.log(userScroll);
        if (userScroll > scrollLimit) {
            //Down
            //$('#header, .header-inner').addClass('hide');
        } else if (userScroll < scrollLimit) {
            //Up
            //$('#header, .header-inner').removeClass('hide');
        }

    });
    //Project Toggle
    $('.project-col').click(function() {
        $(this).siblings().find('.project').removeClass('active');
        $(this).find('.project').addClass('active');
    });
    //TODO fix close project function
    $('.close-project').click(function(){

      $('.project').removeClass('active');
    });

    //Load Iframe
    
    $('.slider').slick({
        dots: true,
        autoplay: true,
        adaptiveHeight: false
        //prevArrow: '<i class="fa fa-chevron-left"></i>',
        //nextArrow: '<i class="fa fa-chevron-right"></i>'
    });
});
