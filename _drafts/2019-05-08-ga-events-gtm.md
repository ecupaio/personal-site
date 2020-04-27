---
title: Use inline Google Analytics Events with Google Tag Manager
tags:
- Google Analytics
- Google Tag Manager

---
This guide was written assuming you have implemented Google Universal Analytics via Google Tag Manager. 

You can create events in Google Tag Manager; no code required, but I wanted to be able to adapt my old inline events and some events I had set up in my javascript. 

In this guide, you will create a generic event in Google Tag Manager that will trigger on a dataLayer.push event that will define variables and send the event details to Google Analytics

#### Create a generic event in Google Tag Manager

Go to Google Tag Manger and create a new tag. 

In Tag Configuration, select Google Analytics Universal Analytics, then toggle Track Type to Event. 

Next, you will create a variable for each of the Event Tracking Parameters: Category, Action, Label. 

Select the wee lego next the field to add a variable, then select the plus sign in the top corner in the new modal that pops to add a new variable. Label your variable respective to the Event Tracking Parameter (eg Category), then select Data Layer Variable as the event type. Add a label to the Data Layer Variable Name that coincides with the tracking parameter. Select Save and repeat this for each of the 

Once you have converted your existing triggers, go into [Google Analytics' Real-time view](https://support.google.com/analytics/answer/1638635?hl=en) and select Events to see if your triggers are functioning properly.