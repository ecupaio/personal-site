---
_schema: default
title: 'Migrating to Google Analytics 4 '
date: 2023-01-30 16:45:00 -0800
meta_img: ''
tags:
  - Google Analytics
  - Google Tag Manager
footer-cta:
  title: ''
  text: ''
published: false
---
Google Analytics 4 is here and Universal Analytics is [set to end on July 1, 2023](https://support.google.com/analytics/answer/11583528)&nbsp;so let's take advantage of the update and set up Google Tag Manager. In this guide, I will cover how to set up a Google Analytics 4 property. You can skip\[ANCHOR LINK\] to the instructions if you don't want to read all about the new changes.&nbsp; &nbsp;

## About Google Analytics 4

Google Analytics 4 (GA4) is the latest iteration of Google Analytics. A lot has changed in how events get tracked and how to view your site's data. GA4 added some automatic tracking for page scrolling, file downloads, and clicks. You will still likely need to configure custom events, but they added some recommended events with parameters specific to the event instead of the old system that was limited to action, category, and label. If you're not enthralled by these new features or don't know what in the heck I'm talking about, that's okay. Google Analytics 4 will be the only way for you to track analytics on your website (via Google for free) so like it or not you need to set it up on your site.&nbsp;

## About Google Tag Manager

If you don't already know, Google Tag Manager (GTM) is the best way to configure your analytics and events, add tracking pixels and other code to the head of your site, and take advantage of Google Suite products like Ads or Search Console. Google Tag Manager makes it so that you don't ever have to touch your site's code again, after installation of course. You can trigger events based on link text and drop in tracking pixel code with ease. Plus it's what all us elite, level 9000 javascript-fu masters use so more than likely the integrations you need will play nice with GTM and have docs to support it.&nbsp;

## Steps

### Create a Google Analytics 4 Property and Get Measurement ID

As of writing this (before the July 1, 2023 deadline), Google Analytics has added a [setup assistant](https://support.google.com/analytics/answer/9744165?hl=en#zippy=%2Cin-this-article) that will assist you in creating a GA4 property that makes creating a new property simple. If you're reading this past July 1, 2023, Google has automatically created a GA4 property for you so you can skip to the Create a Google Tag Manager Property\[ANCHOR LINK\] instructions

1\. Go to your [analytics dashboard](https://analytics.google.com/) and select the wee gear icon to go the admin menu:

![](/images/screen-shot-2023-03-04-at-4-18-49-pm.png){: width="240" height="75"}

2\. Once in the Admin menu, make sure your Account is selected in the Account Column:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-20-36-pm.png){: width="462" height="332"}

3\. Make sure your current UA account is selected, then select GA4 Setup Assistant:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-32-56-pm.png){: width="453" height="130"}

4\. Select Get Started on the Setup Assistant panel that appears to, guess what, get started:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-36-41-pm-1.png){: width="868" height="390"}

5\. Select **Create and Continue** to create your GA4 property:

![](/images/screen-shot-2023-03-04-at-4-38-32-pm.png){: width="780" height="441"}

That's it! You will now see the Setup Assistant for GA4, but ignore that for now. We're going to set up Google Tag Manager to implement GA4 tracking on your site.&nbsp;

### Create a Google Tag Manager Property

### Create a Google Tag Manager Container

### Create a Google Analytics 4 Tag

#### Copy your Google Analytics 4 Measurement ID

1\. Go back to your [Analytics Dashboard](https://analytics.google.com) and select Admin.&nbsp;

2\. Select Data Streams under your property:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-51-53-pm.png){: width="232" height="278"}

3\. Your website should be in the table of Data streams. Select it to get your property information:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-56-39-pm.png){: width="877" height="128"}

**Note:** If your website is not shown in the table. Select Add Stream &gt; Web, enter your&nbsp; URL, add a name, then select Create stream. [Google has a guide](https://support.google.com/analytics/answer/9304153?hl=en#zippy=%2Cweb) for this as well.&nbsp;

4\. In the Web steam details panel, hit the copy icon (two stacked rectangles) next to your measurement ID:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-59-41-pm.png){: width="891" height="177"}

You now have your Measurement ID to add to your Google Analytics 4 Tag.&nbsp;

5\. Paste that Measurement ID into the corresponding field.&nbsp;

### Configure the Google Analytics 4 Tag Trigger

### Installing the Google Tag Manager Container

### Test Configuration