//embed widget
Calendly.initInlineWidget({
  url: 'https://calendly.com/ed-cupaioli/30min?hide_event_type_details=1',
  parentElement: document.getElementById('calendly-embed'),
  prefill: {},
  utm: {}
});
const close = document.querySelector('.schedule-overlay__close-btn'); 
const overlay = document.querySelector('.schedule-overlay');
const open = document.querySelectorAll('a[href^="#open-form"], a[href^="#open-contact"]');
var btnLocation;

//close overlay
function closeForm() {
  overlay.classList.remove('active');
  document.documentElement.classList.remove('active');
}
close.addEventListener('click', event => {
  closeForm();
});

//open overlay
function openForm() {
  overlay.classList.add('active');
  document.documentElement.classList.add('active');
}
open.forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    openForm();
    btnLocation = event.target.dataset.location;
  });
});

//track events
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

//populate Meeting details 
if (window.location.href.indexOf('/schedule-thanks/') > -1) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleString('en-US', {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    });
    
  }

  const name = params.invitee_full_name;
  const email = params.invitee_email;
  const dateTime = params.event_start_time;
  const answer1 = params.answer_1;
  const answer2 = params.answer_2;
  const answer3 = params.answer_3;
  
  

  document.querySelector('.event-info.name').innerHTML = name;
  document.querySelector('.event-info.email').innerHTML = email;
  document.querySelector('.event-info.date-time').innerHTML = formatDate(dateTime);
  document.querySelector('.event-info.answer-1').innerHTML = answer1;
  document.querySelector('.event-info.answer-2').innerHTML = answer2;
  document.querySelector('.event-info.answer-3').innerHTML = answer3;
}
//open form on load
if (
  window.location.href.indexOf("#open-form") > -1 ||
  window.location.href.indexOf("#open-contact") > -1
) {
  openForm();
}

