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
        //$(this).siblings().removeClass('active');
        //$(this).addClass('active');
        //$('.close-project').addClass('active');
        $(this).siblings().find('.project-info').slideUp();
        $(this).find('.project-info').slideToggle();

    });
    $('.close-project').click(function(){
      $(this).removeClass('active');
      $('.project-col.active').removeClass('active');
    });

});
