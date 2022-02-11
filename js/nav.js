//menu animation
  // $("#nav-toggle").click(function () {
  //   $(".project-overlay, body").removeClass("active");
  //   $("#nav-toggle, #sidebar-nav, main").toggleClass("active");
  //   if ($("#sidebar-nav").hasClass("active")) {
  //     $("#sidebar-nav .nav-link").each(function (i) {
  //       var $this = $(this);
  //       setTimeout(function () {
  //         $this.addClass("active");
  //       }, i * 100);
  //     });
  //   } else {
  //     $("#sidebar-nav .nav-link").removeClass("active");
  //   }
  // });
  // $(".nav-link").click(function (e) {
  //   $("#nav-toggle, #sidebar-nav, main").removeClass("active");
  // });
const navToggle = document.querySelector('#nav-toggle');
const overlays = document.querySelector('.project-overlay, .schedule-overlay');
const body = document.querySelector('body, main');
const nav = document.querySelector('#sidebar-nav');
const navLinks = document.querySelectorAll('#sidebar-nav .nav-link');
navToggle.addEventListener('click', e => {
  document.querySelectorAll('#nav-toggle, #sidebar-nav, main,html').forEach(el =>{
    el.classList.toggle('active');
    if (nav.classList.contains('active')) {
      navLinks.forEach((link,i) => {
        setTimeout(e =>{
          link.classList.add('active');
        }, (i+1) * 100);
      });
    } else {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
    }
    
  });
});
