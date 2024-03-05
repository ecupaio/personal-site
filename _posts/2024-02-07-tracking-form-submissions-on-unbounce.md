---
_schema: default
title: Tracking Form Submissions on Unbounce
date: 2024-02-07 08:29:38 -0800
meta_img: ''
footer-cta:
  title: ''
  text: ''
published: false
---
## Background

Unbounce provides a drag and drop editor and forms to make landing pages, but their GA4 integeration doesn't track form submissions since the data is transfered via Javascript and not the form action handler. Further complicating matters, they don't have a public event handler for form submissions, but [another developer uncovered one](https://documentation.unbounce.com/hc/en-us/articles/203814014-How-Do-I-Integrate-Google-Tag-Manager-With-Unbounce-for-Classic-Builder-Pages). I readched out to their support to see if the event handler is documented but it's not, meaning this method will work now but there's no guarantees it will work in the future so take this with a grain of salt. The salt being some console log commands you can mask in your inspector window.  

If you don't know what I just said, that's okay you can just skip to the steps section and copy paste the code. 

## Requirements 
- Unbounce account with admin access
- GA4 account with admin access
- GTM account with admin access  

## Steps 
In the steps below, I will guide you on how to trigger a script on Unbounce that will tell GTM to send an event to GA4 along with the data about the form. 

For this solution, I am using Google Tag Manager (GTM) since it allows us to reuse the event trigger in case you want to add more than just Google Analytics events, e.g. ad pixels. If you don't want to go through GTM and just submit data directly to GA4, you can just [install GA4 directly to Unbounce](https://documentation.unbounce.com/hc/en-us/articles/9924205453076-Integrating-Unbounce-with-Google-Analytics-4-GA4), then paste the following script into the [custom scripts manager](https://documentation.unbounce.com/hc/en-us/articles/360035250491-Adding-Your-Custom-Scripts-Using-Script-Manager): 

 ```
<script>
  window.ub.hooks.afterFormSubmit.push(function() { 
    const pageName = window.ub.page.name;
    gtag('event', 'generate_lead',
      { 
        "value": 0, //required parameter for generate_lead
        "currency": "USD", //required parameter for generate_lead
        "form_name": pageName //optional parameter used to identify form by page it's embedded on. 
      }
    );
    });
</script>
```

### Connect GTM to Unbounce 

Save me bandwith on screenshots and follow Unbounce's documentation for this step: [How Do I Integrate Google Tag Manager With Unbounce for Classic Builder Pages?](https://documentation.unbounce.com/hc/en-us/articles/203814014-How-Do-I-Integrate-Google-Tag-Manager-With-Unbounce-for-Classic-Builder-Pages)

### Connect GA4 to GTM
In cause you don't already have your GA4 account linked to GTM, you'll need to add it. Follow Google's documentation: [[GA4] Configure Google Analytics 4 in Google Tag Manager](https://support.google.com/tagmanager/answer/9442095?hl=en)

Also, to make things easier down the line, [create a variable](https://support.google.com/tagmanager/answer/7683362?hl=en) for your [Measurement ID](https://support.google.com/analytics/answer/12270356). Choose [constant](https://support.google.com/tagmanager/answer/7683362?hl=en) for the variable type and you'll be good to go. 

### Create Event trigger


```
<script>
  window.ub.hooks.afterFormSubmit.push(function() { 
    const pageName = window.ub.page.name;
    window.dataLayer?.push(
      { 
        "event": "generate_lead", //GA4 recommended event: https://developers.google.com/analytics/devguides/collection/ga4/reference/events?sjid=15058574496981631888-NA&client_type=gtag#generate_lead
        "value": 0, //required parameter for generate_lead
        "currency": "USD", //required parameter for generate_lead
        "form_name": pageName //optional parameter used to identify form by page it's embedded on. 
      }
    );
    });
</script>
```

```
{
  "page": {
    "id": "",
    "variantId": "",
    "usedAs": "",
    "name": "", //This is where we get the page name
    "url": "",
    "dimensions": {
      "desktop": {
        "height": 0,
        "width": 0
      },
      "mobile": {
        "height": 0,
        "width": 0
      },
      "mobileMaxWidth": 0
    },
    "lightboxTriggers": [],
    "webFonts": [],
    "visitorId": ""
  },
  "hooks": {
    "beforeFormSubmit": [],
    "afterFormSubmit": [] //This is where we call our trigger
  },
  "visitorId": "",
  "routingStrategy": "",
  "domain": {},
  "lightbox": {}
}
```
