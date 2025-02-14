$(function() {
  
  
  //hero animation
  setTimeout(function() {
    $('.home-hero').addClass('active');
    
  }, 700);
  setTimeout(function() {
    $('.home-hero__text-item').each(function(i) {
      var $this= $(this);
      setTimeout(function() {
        $this.addClass('active');
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

  