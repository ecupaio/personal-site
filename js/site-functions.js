$(document).ready(function() {
    //Header Collapse 
    var headerHeight;
    $('.header-collapse').click(function() {
        $('#header, #main').addClass('collapsed');

    });

    $(window).scroll( function(){
        
            $('#header, #main').addClass('collapsed');
        
        
    });
    
    //Load Projects
    var ds = new Miso.Dataset({
        importer: Miso.Dataset.Importers.GoogleSpreadsheet,
        parser: Miso.Dataset.Parsers.GoogleSpreadsheet,
        key: "1-nhosAH4e5I3HmXLLt-kSV9kGgN5M4cIwLuxmpHnEyU", //Add your google spreadsheet key here
        worksheet: "1" //Worksheets start counting at 1
    });
    ds.fetch({
        success: function() {
            var name,
                link,
                info,
                image;
                
            this.each(function(column) {
                
                name = column.Name ? column.Name : "";
                link = column.Link ? column.Link : "";
                info = column.Info ? column.Info : "";
                image = column.Image ? column.Image : "";

                $('.portfolio-grid').append('<div class="pure-u-1 pure-u-md-1-3 project-col"><div class="project"><img src="min_images/' + image + '" class="project-img"><div class="project-name">' + name + '</div></div><div class="project-info"><div class="info">' + info + '</div><a class="see-site" href="' + link + '" target="_blank">See Site <i class="fa fa-external-link"></i></a></div></div>');
                

            });
            //Project Toggle
            $('.project-col').click(function() {
                headerHeight = $('#header').height() + 20;
                $(this).find('.project-info').slideToggle();
                $(this).siblings().find('.project-info').slideUp();
                /*$(this).toggleClass('active');
                $(this).siblings().removeClass('active');*/
                $("body, html").animate({
                    scrollTop: $(this).offset().top - headerHeight
                },'1000', 'swing');
                
                
            });
        }
    });
});