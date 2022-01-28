Calendly.initInlineWidget({
  url: 'https://calendly.com/ed-cupaioli/30min?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1',
  parentElement: document.getElementById('calendly-embed'),
  prefill: {},
  utm: {}
});
const close = document.querySelector('.schedule-overlay__close-btn'); 
const overlay = document.querySelector('.schedule-overlay');
const open = document.querySelectorAll('a[href^="#open-form"]');
var btnLocation;

close.addEventListener('click', event => {
  overlay.classList.remove('active');
  document.documentElement.classList.remove('active');
  
});
open.forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    
    overlay.classList.add('active');
    document.documentElement.classList.add('active');
    btnLocation = event.target.dataset.location;
  });
});

function isCalendlyEvent(e) {
  return e.data.event && e.data.event.indexOf('calendly') === 0;
};
 
window.addEventListener(
  'message',
  function(e) {
    if (isCalendlyEvent(e)) {
      if (e.data == 'calendly.event_scheduled' ) {
        dataLayer.push({
          event: "gaEvent",
          eventCategory: "Form",
          eventAction: "Submission",
          eventLabel: btnLocation,
        });
      } 
      
    }
  }
);