
const projectSwiper = new Swiper(".project-images__swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  //loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});

const projectSwiperLarge = new Swiper(".project-swiper-large", {
  slidesPerView: 1,
  //loop: true,
  thumbs: projectSwiper,
});

const zoomOverlay = document.querySelector(".zoom-overlay");
projectSwiper.on('click', function () {
   zoomOverlay.classList.add("active");
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
};  