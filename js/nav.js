//menu animation
const navToggle = document.querySelector('#nav-toggle');
const overlays = document.querySelector('.project-overlay, .schedule-overlay');
const body = document.querySelector('body, main');
const nav = document.querySelector('#sidebar-nav');
const navLinks = document.querySelectorAll('#sidebar-nav .nav-link-list > .nav-link');
//nav toggle click
navToggle.addEventListener('click', e => {
  navToggle.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('active');
  //display nav, freeze page
  if (nav.classList.contains('active')) {
    
    //add active class to each link
    navLinks.forEach((link,i) => {
      setTimeout(e =>{
        link.classList.add('active');
      }, i * 100);
    });
  } else {
    //remove active class from each link
    console.log(nav.classList)
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  }
    
  
});
