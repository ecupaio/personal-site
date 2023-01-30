---
_schema: default
title: 'Google Tag Manager Event Tags for Google Analytics 4 '
date: 2023-01-30 14:46:00 -0800
meta_img: ''
tags:
  - Google Analytics
  - Google Tag Manager
footer-cta:
  title: ''
  text: ''
published:
---
Google is sunsetting Universal Analytics on July 1, 2023 so it's time to hop on the Google Analytics 4 train if you haven't already. The one key difference outside of the new UI that's somehow even more opaque,&nbsp; are how events are tracked. Previously you would add an event action, category, and label to track an event. Now you just add an event name and you're good to go.

## Recommended Events and Custom Definitions

One feature to watch out for are [Recommended Events](https://support.google.com/analytics/answer/9267735?hl=en), which can have required parameters to send data. GA4 has special UI features set up for these but you need to make sure you add the required parameters or else GA4 won't recognize the event.&nbsp;

The other new feature is [Custom Definitions](https://support.google.com/analytics/answer/10075209). So if you wanted to add the category and label did back in the day, you can do that with Custom Definitions.&nbsp; There's [standard definitions](https://support.google.com/analytics/answer/9143382) they automatically track as well.&nbsp;

This tutorial will just cover how to set up the generic tag to trigger events without any custom definitions since those will need to be configured on an event by event basis, which makes the generic tag moot.&nbsp;

## Creating the Event Tag&nbsp;

I wanted to create a generic event tag so I didn't have to configure each and every event [just like the generic event tag I created for UA](/blog/tracking-google-analytics-events-with-google-tag-manager/). The first step to this is adding a Google Analytics 4 Event Tag. Once you select **New**&nbsp;to add a tag, select the Tag Configuration area and select **Google Analytics: GA4 Event**\:&nbsp;

![](/images/screen-shot-2023-01-30-at-3-23-43-pm.png){: width="1268" height="688"}

In the new model that pops up, you will select your Configuration tag (I cover how to set up GA4 on GTM here) then add your event name variable by selecting the wee lego piece:&nbsp;

![](/images/screen-shot-2023-01-30-at-3-30-39-pm.png){: width="670" height="670"}

## Adding the Variable

Since we want to pass different data to this tag each time (eg 'newsletter\_signup', 'search\_submission', etc.), we need to create a variable that will be able to pass that event name through the dataLayer onto Google Analytics.&nbsp;

In the Choose a variable model that pops up, select the plus icon in the upper-righthand corner to add your variable, which will open another model for the Variable Configuration.&nbsp;

Add a name for your variable (I named mine&nbsp; GA4 Event Name, but do whatever makes sense to you), then select the Variable Configuration to choose the variable type and select **Data Layer Variable**\:

&nbsp;![](/images/screen-shot-2023-01-30-at-3-39-09-pm.png){: width="1272" height="1176"}

Now to get&nbsp;

## Setting the Trigger

## Adding the Event&nbsp;