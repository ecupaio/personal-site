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
        $(this).siblings().find('.project-info').slideUp();
        $(this).find('.project-info').slideToggle();
        $(this).siblings().find('.project').removeClass('active');
        $(this).find('.project').toggleClass('active');
    });
    $('.close-project').click(function(){
      $(this).removeClass('active');
      $('.project-col.active').removeClass('active');
    });

});
