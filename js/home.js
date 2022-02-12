document.addEventListener("DOMContentLoaded",function(){  
  //hero animation
  setTimeout(function() {
    document.querySelector('#hero').classList.add('active');
  }, 700);
  setTimeout(function() {
    document.querySelectorAll('#hero .text-item').forEach((el,i) =>{
      
      setTimeout(function() {
        el.classList.add('active');
      }, i * 300);
    });
  }, 1000);

  //studies slider
  const studiesSwiper = new Swiper('#studies-slider' , {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    paginationClickable: true,
  });  
});
  