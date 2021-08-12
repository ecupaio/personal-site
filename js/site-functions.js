$(document).ready(function() {
  //Universal scrollTop
  function scrollTop(selector,offset) {
      $('body,html').animate({
          scrollTop: $(selector).offset().top - offset
      });
  }
  
  

  
  //menu
  $('#nav-toggle').click(function() {
    $('.project-overlay, body').removeClass('active');
    $('#nav-toggle, #sidebar-nav, main').toggleClass('active');
    if ($('#sidebar-nav').hasClass('active')) {
      $('#sidebar-nav .nav-link').each(function(i) {
        var $this = $(this);
        setTimeout(function() {
          $this.addClass('active');
        },i * 100);
      });
    } else {
      $('#sidebar-nav .nav-link').removeClass('active');
    }

  });
  $('.nav-link').click(function(e) {
    $('#nav-toggle, #sidebar-nav, main').removeClass('active');
  });
  //on scroll top sections

  $(window).scroll(function() {
    function elementScrolled(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    if ($('.skill-grid').length > 0) {
      if (elementScrolled('.skill-grid')) {

        $('.skill-grid .skill').each(function(i) {
          var that = this;
           var t = setTimeout(function() {

               $(that).addClass('active');
           }, 250 * i);
        });
      }
    }

    if ($('#post-content').length > 0) {
      if ($(window).scrollTop() > $('#post-content').offset().top) {
        $('.blog-topbar').addClass('active');
      } else {
        $('.blog-topbar').removeClass('active');
      }
    }
  });
  function getNumberOfMovies(substr) {
    /*
     * Endpoint: "https://jsonmock.hackerrank.com/api/movies/search/?Title=substr"
     */
    var xmlreq = new XMLHttpRequest();
    xmlreq.onreadystatechange = function() {
        
      if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            
      }      
          
    }
    xmlreq.open("GET","https://jsonmock.hackerrank.com/api/movies/search/?Title=maze");
    xmlreq.send();
  }
  getNumberOfMovies('maze');   
  function longestEvenWord(sentence) {
    var sentArray = sentence.split(" ");
    console.log(sentArray);
    var longest = 0; 
    var longestEven = '';
    for (let i = 0; i < sentArray.length; i++) {
        if (sentArray[i].length > longest) {
            longest = sentArray[i].length;
            longestEven = sentArray[i];
            console.log(longestEven);
            
        } 
        
    }
    return longestEven;
        console.log(sentArray[i]);
        console.log(longestEven);

}
longestEvenWord('It is a pleasant day today');
});
