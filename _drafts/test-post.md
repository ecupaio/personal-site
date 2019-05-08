---
title: Use inline Google Analytics Events with Google Tag Manager
tags: []

---
Assuming you have implemented [Google Analytics via Google Tag Manager](https://support.google.com/tagmanager/answer/6107124?hl=en), you will notice that triggering events with inline javascript will not work anymore. Example: `<button onclick="ga('send','event','Category', 'Action', 'Label')">Submit</button>`

In order for events to get tracked via inline script, you will need to change the script and add the Global Site Tag script. Google has comprehensive [documentation](https://developers.google.com/analytics/devguides/collection/gtagjs/migration#measure_events_with_the_default_tracker) on the subject, but I have broken it down into simple steps below: 

#### Add the gtag.js Script to your page

Add the following snippet below your Google Tag Manager script:

```
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || \[\];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics Tracking code (eg. UA-12345). If you don't know how to access your tracking code, follow Google's documentation