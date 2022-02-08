//project overlay

const project = document.querySelectorAll('.project-col');
const projectOverlay = document.querySelector('.project-overlay');
const projectSwiper = document.querySelector('.swiper-wrapper');
let swiper; 

project.forEach(item => {
  item.addEventListener('click', event => {
    const projectTitle = event.currentTarget.querySelector('.project-title').innerText;  
    
    document.querySelector('.selected-title').innerHTML = projectTitle;
    fetch('/projects.json')
      .then(response => response.json())
      .then(projects => {
        const project = projects.find( ({ title }) => title === projectTitle);
        const projectImages = project.images;
        const projectLink = project.link;
        const projectText = decodeURI(project.text); 
        const projectTech = project.tech;
        function decodeHtml(html) {
          var txt = document.createElement("textarea");
          txt.innerHTML = html;
          return txt.value;
        }
        document.querySelector('.selected-tech').innerHTML = projectTech;
        document.querySelector('.about-project').innerHTML = decodeHtml(projectText);
        if (projectLink.length > 0 ) {
          document.querySelector('.selected-link').setAttribute('href',projectLink);
          document.querySelector('.selected-link').classList.remove('hidden');
        } else {
          document.querySelector('.selected-link').setAttribute('href','#')
          document.querySelector('.selected-link').classList.add('hidden');
        }
        
        projectImages.forEach(image => {
          const projectSlide = '<div class="swiper-slide">'+
                                '<img class="project-image" src="/images/'+image+'" />'
                               '</div>';
          projectSwiper.insertAdjacentHTML('beforeend', projectSlide);
        });
        let imageHeight;
        swiper = new Swiper('.swiper', {
          slidesPerView: 1,
          spaceBetween: 32,
          loop: true,
          paginationClickable: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        });
        document.documentElement.classList.add('active');
        projectOverlay.classList.add('active');
        //show scroller 
        const scroller = document.querySelector('.scroller');
        function scrollerDisplay() {          
          if (imageHeight && imageHeight > 520) {
            document.querySelector('.scroller').classList.add('active');
          } else {
            document.querySelector('.scroller').classList.remove('active');
          }
        }
        swiper.on('transitionEnd', function () {
          imageHeight = document.querySelector('[data-swiper-slide-index="'+swiper.realIndex+'"] .project-image').height;
          scrollerDisplay();  
        });
        swiper.on('imagesReady', function () {
          imageHeight = document.querySelector('[data-swiper-slide-index="0"] .project-image').height;
          scrollerDisplay();  
        });
        //hide scroller
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(item => {
          item.addEventListener('scroll', event => {
            if (item.scrollTop > 0) {
              document.querySelector('.scroller').classList.remove('active');
            } else {
              document.querySelector('.scroller').classList.add('active');
            }
          }); 
        });
      })
      .catch(err => console.log(err))
    });
});

//close overlay
function closeOverlay() {
  projectSwiper.innerHTML = '';
  projectOverlay.classList.remove('active');
  document.documentElement.classList.remove('active');
  swiper.destroy(true,true);
}
document.querySelector('.close-project-overlay').onclick = event => {
  closeOverlay();
};
window.onclick = event => {
  if (event.target === document.querySelector('.project-overlay')) {
    closeOverlay()
  } 
};
