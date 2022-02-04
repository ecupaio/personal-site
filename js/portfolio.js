//project overlay

const project = document.querySelectorAll('.project-col');
const projectOverlay = document.querySelector('.project-overlay');
project.forEach(item => {
  item.addEventListener('click', event => {
    projectOverlay.classList.add('active');
    const projectTitle = event.target.querySelector('.project-title').innerText; 
    console.log(projectTitle);
    fetch('/projects.json')
      .then(response => response.json())
      .then(projects => {
        const projectInfo = projects.find( ({ title }) => title === projectTitle);
        const projectImages = projectInfo.images;
        projectImages.forEach(image => {
          const projectSlide = '<div class="swiper-slide">'+
                                '<img class="project-image" src="/images/'+image+'" />'
                               '</div>';
        });
        const swiper = new Swiper('.swiper', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      })
      .catch(err => console.log(err))
    });
});
  