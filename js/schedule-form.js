Calendly.initInlineWidget({
  url: 'https://calendly.com/ed-cupaioli/30min?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1',
  parentElement: document.getElementById('calendly-embed'),
  prefill: {},
  utm: {}
});
const close = document.querySelector('.schedule-overlay__close-btn'); 
const overlay = document.querySelector('.schedule-overlay');
const open = document.querySelectorAll('a[href="#open-form"]');

close.addEventListener('click', event => {
  overlay.classList.remove('active');
  document.documentElement.classList.remove('active');
});
open.forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    console.log('clicked');
    overlay.classList.add('active');
    document.documentElement.classList.add('active');
  });
});
