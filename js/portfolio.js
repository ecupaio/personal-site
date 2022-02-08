//project overlay

const project = document.querySelectorAll('.project-col');
const projectOverlay = document.querySelector('.project-overlay');
const projectSwiper = document.querySelector('.swiper-wrapper');
project.forEach(item => {
  item.addEventListener('click', event => {
    
    projectSwiper.innerHTML = '';
    const projectTitle = event.currentTarget.querySelector('.project-title').innerText;  
    document.querySelector('.selected-title').innerHTML = projectTitle;
    fetch('/projects.json')
      .then(response => response.json())
      .then(projects => {
        const projectInfo = projects.find( ({ title }) => title === projectTitle);
        const projectImages = projectInfo.images;
        const projectLink = projectInfo.link;
        
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
        const swiper = new Swiper('.swiper', {
          slidesPerView: 1,
          
          loop: true,
          paginationClickable: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          autoHeight: true
        });
        document.documentElement.classList.add('active');
        projectOverlay.classList.add('active');
      })
      .catch(err => console.log(err))
    });
});
//close overlay
document.querySelector('.close-project-overlay').onclick = event => {
  projectOverlay.classList.remove('active');
  document.documentElement.classList.remove('active');
};
window.onclick = event => {
  console.log(event.target)
  if (event.target === document.querySelector('.project-overlay')) {
    projectOverlay.classList.remove('active');
    document.documentElement.classList.remove('active');
  } 
};