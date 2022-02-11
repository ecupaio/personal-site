//project overlay

const selectedProject = document.querySelectorAll('.project-col');
const projectOverlay = document.querySelector('.project-overlay');
const projectSwiper = document.querySelector('.swiper-wrapper');
let swiper; 

function loadProject(projectTitle) {
  
  document.querySelector('.selected-title').innerHTML = projectTitle;
  fetch('/projects.json')
    .then(response => response.json())
    .then(projects => {
      //get project object by title
      const project = projects.find( ({ title }) => title === projectTitle);
      
      //product object data
      const projectImages = project.images;
      const projectLink = project.link;
      const projectText = decodeURIComponent(project.text).replace(/\+/g,' '); 
      const projectTech = project.tech;
      
      //insert content
      document.querySelector('.selected-tech').innerHTML = projectTech;
      document.querySelector('.about-project').innerHTML = projectText;
      if (projectLink.length > 0 ) {
        document.querySelector('.selected-link').setAttribute('href',projectLink);
        document.querySelector('.selected-link').classList.remove('hidden');
      } else {
        document.querySelector('.selected-link').setAttribute('href','#')
        document.querySelector('.selected-link').classList.add('hidden');
      }
      //add share links
      const projectOpen = window.location.origin+"/?project="+encodeURI(projectTitle);
      document.querySelector('.copy-link').setAttribute('value',projectOpen);
      const linkedinShare = 'https://www.linkedin.com/sharing/share-offsite/?url='+encodeURI(projectOpen);
      document.querySelector('.share-btn.linkedin').setAttribute('href',linkedinShare);
      //add images and init swiper
      projectImages.forEach(image => {
        const projectSlide = '<div class="swiper-slide">'+
                              '<img class="project-image" src="/images/'+image+'" />'
                              '</div>';
        projectSwiper.insertAdjacentHTML('beforeend', projectSlide);
      });
      let imageHeight;
      if (projectImages.length > 1) {
        document.querySelectorAll('.swiper-button').forEach(el => {
          el.classList.remove('hidden');
        });
        swiper = new Swiper('.swiper', {
          slidesPerView: 1,
          spaceBetween: 32,
          loop: true,
          paginationClickable: true,
          autoHeight: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            568: {
              autoHeight: false
            }
          }
        });
        swiper.on('transitionEnd', function () {
        imageHeight = document.querySelector('[data-swiper-slide-index="'+swiper.realIndex+'"] .project-image').height;
        scrollerDisplay();  
        });
        swiper.on('imagesReady', function () {
          imageHeight = document.querySelector('[data-swiper-slide-index="0"] .project-image').height;
          scrollerDisplay();  
        });
      } else {
        document.querySelectorAll('.swiper-button').forEach(el => {
          el.classList.add('hidden');
        });
        imageHeight = document.querySelector('.project-image').height;
        scrollerDisplay();
      }
      
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
    .catch(err => console.log(err));
};

selectedProject.forEach(item => {
  item.addEventListener('click', event => {
    const projectTitle = event.currentTarget.querySelector('.project-title').innerText; 
    console.log(projectTitle);
    loadProject(projectTitle);
  });  
});

//close overlay
function closeOverlay() {
  projectSwiper.innerHTML = '';
  projectOverlay.classList.remove('active');
  document.documentElement.classList.remove('active');
  if (swiper) {
    swiper.destroy(true,true);
  }
}
document.querySelector('.close-project-overlay').onclick = event => {
  closeOverlay();
};
window.onclick = event => {
  if (event.target === document.querySelector('.project-overlay')) {
    closeOverlay()
  } 
};
//load more projects 
document.querySelector('.load-more-projects').addEventListener('click', event => {
  event.preventDefault();
  const hiddenProjects = document.querySelectorAll('.project-col.hidden');
  
  hiddenProjects.forEach((element,index) => {
    if (index <= 8) {
      element.classList.remove('hidden');
    }
    
  });

  const offsetTop = window.scrollY + hiddenProjects[0].getBoundingClientRect().top;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  })
  
  if (hiddenProjects.length < 9) {
    document.querySelector('.load-more-projects').classList.add('hidden');
  }
});
//open project link
if (window.location.href.indexOf('project=') > -1) {
  const projectTitle = getParams('project');
  loadProject(projectTitle);
}
//copy link 
document.querySelector('.share-btn.copy').addEventListener('click', event => {
  event.preventDefault();
  const copyText = document.querySelector('.copy-link');
  if (!navigator.clipboard){
    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    copySuccess();
  } else{
    navigator.clipboard.writeText(copyText.value).then(
      function(){
        document.querySelector('.share-btn.copy');
        copySuccess();
      });
  }
  function copySuccess(){
    document.querySelector('.share-btn.copy').classList.add('active');
    setTimeout(() =>{
      document.querySelector('.share-btn.copy').classList.remove('active');  
    }, 1000);
  };
});
 
