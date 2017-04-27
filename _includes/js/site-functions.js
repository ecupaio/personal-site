$(document).ready(function() {
    //Universal scrollTop
    function scrollTop(selector,offset) {
        $('body,html').animate({
            scrollTop: $(selector).offset().top - offset
        });
    }
    //Menu toggle
    $('.menu-toggle').click(function() {
        $('.menu-toggle, .toggle-line').toggleClass('open');
        $('#sidebar-menu, #wrapper, #footer').toggleClass('active');
    });
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


    //Project Slider
    if (window.location.href.indexOf('/project') > -1) {
        $('.slider').slick({
            dots: true,
            autoplay: true
        });
    }

    //Resume
    function showExperience() {
        $(this).parent().siblings().find('.experience-details').slideUp();
        $(this).parent().siblings().removeClass('active');
        $(this).siblings('.experience-details').slideToggle(300,function() {
            $(this).parent().toggleClass('active');
             $('html, body').animate({
                 scrollTop: $(this).prev('.experience-header').offset().top - 85
             }, 300);
        });
    }

    $('.experience-header').click(function() {
        $(this).parent().siblings().find('.experience-details').slideUp();
        $(this).parent().siblings().removeClass('active');
        $(this).siblings('.experience-details').slideToggle(300,function() {
            $(this).parent().toggleClass('active');
             $('html, body').animate({
                 scrollTop: $(this).prev('.experience-header').offset().top - 85
             }, 300);
        });
    });
    //Contact Form
    $('.contact-link').click(function() {
        $('.menu-toggle, .toggle-line').removeClass('open');
        $('#sidebar-menu, #wrapper, #footer').removeClass('active');
        $('#contact').addClass('active');
    });
    $('.contact-close').click(function () {
        $('#contact').removeClass('active');
    });
});
