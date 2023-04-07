---
_schema: default
title: 'How to Track Events with Google Tag Manager and Google Analytics: No Code'
date: 2023-04-07 15:32:09 -0700
meta_img: ''
tags:
footer-cta:
  title:
  text: ''
published: false
---
I wrote previously about how to use the dataLayer to accurately track events, and while I maintain this is the best way to do it, I realize most marketers and digital staff don't have the same level of access to nor the expertise with code that I do. I wrote this guide to showcase the ability of Google Tag Manager to track events without writing a single line of code and how you can get tracking with a couple of button clicks.&nbsp;

The event we'll track is whenever a user of my website opens my calendar. This action is triggered whenever someone clicks one of the many buttons on my site, commonly labeled as Work with me.&nbsp;

## Prerequisites

Google Tag Manager must be installed on your site with Google Analytics 4 configured. If you don't have that set up, you can [read my guide](https://edcupaioli.com/blog/configuring-google-analytics-4-with-google-tag-manager/).&nbsp;

## Create a Tag

First, let's create a tag in our container.&nbsp;

1\. Open your [tag manager dashboard](https://tagmanager.google.com/) and select your container

2\. Select **Tags** from the left-hand menu, then select **New** on top of the table that appears with all your tags.:&nbsp;

![](/images/screen-shot-2023-04-07-at-3-51-54-pm.png){: width="2148" height="820"}

3\. In the new tag modal that pops up, enter an event name then select the area below **Tag Configuration** to open up get another modal.&nbsp;

![](/images/screen-shot-2023-04-07-at-3-58-46-pm.png){: width="1698" height="758"}

4\. Select **Google Analytics 4 Event&nbsp;**from the tag type modal

**![](/images/screen-shot-2023-04-07-at-4-00-54-pm.png){: width="1274" height="696"}**

5\. Select the configuration tag of your GA4 installation, then enter **click** in the Event Name field:&nbsp;

![](/images/screen-shot-2023-04-07-at-4-09-50-pm.png){: width="1476" height="1190"}

**Note:**&nbsp;GA4 automatically tracks clicks, but this is a special click that we're going to send extra data, known officially as Custom Dimensions, to GA4 so we can track this click in particular.

6\.&nbsp; &nbsp;

## Add a Trigger