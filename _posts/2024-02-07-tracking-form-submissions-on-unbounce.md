---
_schema: default
title: Tracking Form Submissions on UnBounce
date: 2024-02-07 08:29:38 -0800
meta_img: ''
footer-cta:
  title: ''
  text: ''
published: false
---
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

https://documentation.unbounce.com/hc/en-us/articles/203814014-How-Do-I-Integrate-Google-Tag-Manager-With-Unbounce-for-Classic-Builder-Pages&nbsp;
