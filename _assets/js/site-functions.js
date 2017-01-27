$(document).ready(function() {
    //Header Collapse
    var headerHeight;
    $('.header-collapse').click(function() {
        $('#header, #main').addClass('collapsed');

    });

    $(window).scroll( function(){
        $('#header, #main').addClass('collapsed');
    });
    //Project Toggle
    $('.project-col').click(function() {
        headerHeight = $('#header').height() + 20;
        /*$(this).find('.project-info').slideToggle();
        $(this).siblings().find('.project-info').slideUp();*/
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');

        /*$("body, html").animate({
            scrollTop: $(this).offset().top - headerHeight
        },'1000', 'swing');*/

    });

    
});
