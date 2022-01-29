//embed widget
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

//close overlay
close.addEventListener('click', event => {
  overlay.classList.remove('active');
  document.documentElement.classList.remove('active');
  
});

//open overlay
open.forEach(btn => {
  btn.addEventListener('click', event => {
    event.preventDefault();
    
    overlay.classList.add('active');
    document.documentElement.classList.add('active');
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
//https://help.calendly.com/hc/en-us/articles/360040257613#information-you-can-send-in-the-redirect-url-0-0
//?assigned_to=Ed%20Cupaioli&event_type_uuid=15dba590-0377-4178-80bb-592bef526822&event_type_name=30%20Minute%20Meeting&event_start_time=2022-01-31T11%3A00%3A00-08%3A00&event_end_time=2022-01-31T11%3A30%3A00-08%3A00&invitee_uuid=e1df4b7e-41c0-4b70-8053-f2b8c6139c93&invitee_full_name=Ed%20Cupaioli&invitee_email=ed.cupaioli%40gmail.com&answer_1=test%20What%20can%20I%20help%20you%20with%3F%20%2A&answer_2=test%20What%20is%20your%20timeline%3F&answer_3=test%20What%20is%20your%20budget%3F