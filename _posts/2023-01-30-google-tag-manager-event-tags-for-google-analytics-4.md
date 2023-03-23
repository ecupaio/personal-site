---
_schema: default
title: 'Google Tag Manager Event Tags for Google Analytics 4 '
date: 2023-01-30 14:46:00 -0800
meta_img: >-
  https://images.unsplash.com/photo-1633307057722-a4740ba0c5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
tags:
  - Google Analytics
  - Google Tag Manager
footer-cta:
  title: ''
  text: ''
published: true
---
Google is sunsetting Universal Analytics on July 1, 2023 so it's time to hop on the Google Analytics 4 train if you haven't already. The one key difference outside of the new UI that's somehow even more opaque,&nbsp; are how events are tracked. Previously you would add an event action, category, and label to track an event. Now you just add an event name and you're good to go unless you want to add custom and/or required parameters.

## Recommended Events and Custom Definitions

One feature to watch out for are [Recommended Events](https://support.google.com/analytics/answer/9267735?hl=en), which can have required parameters to send data. GA4 has special UI features set up for these but you need to make sure you add the required parameters or else GA4 won't recognize the event.&nbsp;

The other new&nbsp; (not actually new, but more prominent) feature is [Custom Dimensions](https://support.google.com/analytics/answer/10075209). So if you wanted to add the category and label did back in the day, you can do that with Custom Definitions.&nbsp; There's [standard dimensions](https://support.google.com/analytics/answer/9143382)&nbsp;they automatically track as well.&nbsp;

This tutorial will just cover how to set up the generic tag to trigger events without any custom definitions since those will need to be configured on an event by event basis, which makes the generic tag moot.&nbsp;

## Creating the Event Tag&nbsp;

I wanted to create a generic event tag so I didn't have to configure each and every event [just like the generic event tag I created for UA](/blog/tracking-google-analytics-events-with-google-tag-manager/). The first step to this is adding a Google Analytics 4 Event Tag. Once you select **New**&nbsp;to add a tag, select the Tag Configuration area and select **Google Analytics: GA4 Event**\:&nbsp;

![](/images/screen-shot-2023-01-30-at-3-23-43-pm.png){: width="1268" height="688"}

In the new model that pops up, you will select your Configuration tag (assuming you have that setup) then add your event name variable by selecting the wee lego piece:&nbsp;

![](/images/screen-shot-2023-01-30-at-3-30-39-pm.png){: width="670" height="670"}

## Adding the Variable

Since we want to pass different data to this tag each time (eg 'newsletter\_signup', 'search\_submission', etc.), we need to create a variable that will be able to pass that event name through the dataLayer onto Google Analytics.&nbsp;

In the Choose a variable model that pops up, select the plus icon in the upper-righthand corner to add your variable, which will open another model for the Variable Configuration.&nbsp;

Add a title for the variable: GA4 Event Name, then select the Variable Configuration to choose the variable type and select **Data Layer Variable**\:

&nbsp;![](/images/screen-shot-2023-01-30-at-3-39-09-pm.png){: width="1272" height="1176"}

Add the Data Layer Variable name: **eventName**\:&nbsp;

![](/images/screen-shot-2023-01-30-at-3-44-44-pm-1.png){: width="2314" height="1078"}

Hit save and get back to the GA4 Event Tag to see the **Event Name** field filled with your new variable.

## Setting the Trigger

Now we're ready for the trigger. Select the Triggering panel below the Tag Configuration panel to open Choose a trigger modal, and then select the plus sign in the upper-right hand corner &nbsp;to create a new trigger.&nbsp;

Let's title&nbsp; this one GA4 Event Trigger and then select the Trigger Configuration panel to open the Choose trigger type model. [Just like we did in UA](/blog/tracking-google-analytics-events-with-google-tag-manager/), we'll choose **Custom Event**\:&nbsp;

![](/images/screen-shot-2023-01-30-at-3-54-55-pm-1.png){: width="1280" height="1380"}

Add "**ga4\_event**" for the event name and leave the rest of the options at their default state. Hit save and get whisked back to the tag to see your trigger added:&nbsp;

![](/images/screen-shot-2023-01-30-at-4-00-20-pm.png){: width="1884" height="972"}

Hit save and your trigger is now ready to receive data from the dataLayer.&nbsp;

## Adding the Event&nbsp;

We will use the [dataLayer push method](https://support.google.com/tagmanager/answer/6164391?hl=en) in order to trigger the event. Add the following snippet to your javascript:&nbsp;

```
window.dataLayer.push({

 "event": "ga4_event",

 "eventName": "my_custom_event"

});
```

Let's break this down so you're not blindly copy pasting my code and getting frustrated:&nbsp;

**window.dataLayer.push()&nbsp;**is the function we use to send an object to the dataLayer. Google Tag Manager will read that data where we have triggers that will listen for and use that data to track our events.&nbsp;

**event**&nbsp;is that Custom Event firing trigger and **ga4\_event**&nbsp;was the event name we told GTM to listen for. We are telling GTM, "hey there was an event, a ga4\_event to be specific" and we have the tag set to trigger when it hears that.&nbsp;

**eventName**&nbsp;is our custom variable that we created to pass as the event name that GA4 will display in the reports. my\_custom\_event is that event name. This can be anything you want but with two exceptions:

* no spaces or other special characters. underscores, letters, and numbers only
* can't start with a number

Now this isn't human readable unless you're a javascript ninja, but Google thinks your marketing team lead is so it's just gotta be like that for now. Capital letters aren't forbidden but I avoid caps since Google's recommended and default events seem to follow an all lowercase convention.&nbsp;

## ​​Testing

Select the preview button and enter the URL you want to test your new trigger on. You should see ga4\_event in the Summary and GA4Event in the Tags Fired panel when you initiate your event:&nbsp;

![](/images/screen-shot-2023-01-30-at-4-22-48-pm.png){: width="1876" height="554"}

If you select the GA4 Event, you should be able to see all the details of the tag, including the definition of your eventName variable in the Event Name object we pass that data into:&nbsp;

![](/images/screen-shot-2023-01-30-at-4-25-40-pm.png){: width="752" height="926"}

Now lets head over to our Analytics Property and view the realtime data to see our event (Reports &gt; Realtime):&nbsp;

![](/images/screen-shot-2023-01-30-at-4-27-00-pm.png){: width="626" height="844"}

Hooray! We did it…hopefully. Please reach out if you had any issues configuring your event.&nbsp;