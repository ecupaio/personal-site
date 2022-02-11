$(document).ready(function() {
  //Universal scrollTop
  function scrollTop(selector) {
    $("body,html").animate({
      scrollTop: $(selector).offset().top,
    });
  }
  //Link scroll top
  $('a[href^="#"],a[href^="/#"]').click(function (e) {
    if ($(this).attr("id", selector).length > 1) {
      e.preventDefault();
      var selector = $(this).attr("href");
      scrollTop(selector);
    }
  });
});
//Get params 
function getParams(name) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
    
  });
  return params[name];
}
//slide toggle

const toggleLink = document.querySelectorAll('.toggle-link'); 
toggleLink.forEach(el => {
  el.addEventListener('click', function(event){
  event.preventDefault();
  this.classList.toggle('toggle-open')
  const toggleBox = this.nextElementSibling;
  if (!toggleBox.classList.contains('active')) {
    toggleBox.classList.add('active');
    toggleBox.style.height = 'auto';
    const height = toggleBox.clientHeight + 'px';
    toggleBox.style.height = '0px';
    setTimeout(function () {
      toggleBox.style.height = height;
    }, 0);
  } else {
    toggleBox.style.height = '0px';
    toggleBox.addEventListener('transitionend', event => {
      toggleBox.classList.remove('active');
    }, {
      once: true
    });
  }
  });
});
