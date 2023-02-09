const projectSwiper = new Swiper(".project-images__swiper", {
  slidesPerView: 1,
  centerInsufficientSlides: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3
    },  
    768: {
      slidesPerView: 2
    }, 
  }
});

const projectSwiperLarge = new Swiper(".project-swiper-large", {
  slidesPerView: 1,
  
  speed: 1,
  thumbs: {
    swiper: projectSwiper,
  },
  autoHeight: true,
});

const zoomOverlay = document.querySelector(".zoom-overlay");
projectSwiper.on('click', function () {
   zoomOverlay.classList.add("active");
   document.querySelector('html').classList.add('active');
  //  const activeSlide = projectSwiper.activeIndex;
  //  console.log(activeSlide);
  //  projectSwiperLarge.slideTo(activeSlide); 
})





// document.querySelectorAll(".project-slide").forEach((zoom) => {
//   zoom.onclick = () => {
//     console.log("zoom clicked");
//     zoomOverlay.classList.add("active");
//   };
// });
document.querySelector(".close-project-zoom").onclick = () => {
  document.querySelector(".zoom-overlay").classList.remove('active');
  document.querySelector("html").classList.remove("active");
};  