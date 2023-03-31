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

**NOTE: If you use drag and drop site builders like SquareSpace or Wix, you should not configure a Tag Manager container since they will have everything set up to send data to GA4 directly. You should just set up the GA4 property according to their instructions:&nbsp;[Add the tag to a website builder or CMS-hosted website (e.g., HubSpot, Shopify, etc.)](https://support.google.com/analytics/answer/9304153?hl=en#zippy=%2Cadd-the-tag-to-a-website-builder-or-cms-hosted-website-eg-hubspot-shopify-etc).&nbsp;**

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

### Create a Google Tag Manager Container

As I mentioned earlier, GTM is the best way to implement your GA4 property on your site. I do it for all my clients and my own personal site. You will create an Account in Google Tag Manager and then set up a container which will include all of your tags. Lots of jargon, but I will break it down in the instructions for you.&nbsp;

1\. Go to the [Tag Manager](https://tagmanager.google.com/) dashboard, then select Create Account in order to create an account to house your container:&nbsp;

![](/images/screen-shot-2023-03-04-at-5-12-19-pm.png){: width="1078" height="70"}

Your account will be your organization, and it will have containers for each of your sites. For example, if you have separate sites for your blog or shop, you will add containers that will implement GA4 properties for each of your sites.&nbsp;

2\. The Add a New Account panel will appear. Enter your Account Name. This can be your organization name, eg My Business.&nbsp;

3\. In the Container Setup section, add your Container name and select Web for the Target platform. This should be the URL for your site so you can instantly now where the container is installed.&nbsp;

4\. Select Create, then agree to the terms to get to your container setup.&nbsp;

You will see the installation code for your GTM container, but exit out of that for now. We will focus on creating a Google Analytics 4 Tag next.&nbsp;

### Create a Google Analytics 4 Tag

Now you should be in your workspace. You can access this at anytime by going to your [Tag Manager dashboard](https://tagmanager.google.com/#/home) and selecting your container.&nbsp;

1\. Select Tags from the left-hand menu:&nbsp;

![](/images/screen-shot-2023-03-04-at-5-26-21-pm.png){: width="233" height="394"}

2\. Select New in the Tags section:&nbsp;

![](/images/screen-shot-2023-03-04-at-5-27-00-pm.png){: width="999" height="223"}

4\. Now you should see a new panel that has two sections: Tag Configuration and Triggering. First, Add a title for your tag: GA4. Next, select anywhere within in Tag Configuration to bring up the menu of tags:&nbsp;

![](/images/screen-shot-2023-03-04-at-5-30-26-pm.png){: width="1064" height="373"}

5\. From the list of options, select Google Analytics: GA4 Configuration:&nbsp;

![](/images/screen-shot-2023-03-04-at-5-31-15-pm.png){: width="635" height="296"}

The GA4 configuration will appear with a blank input for Measurement ID. To get that, we need to head back to Google Analytics.&nbsp;

6\. Go back to your [Analytics Dashboard](https://analytics.google.com) and select Admin.&nbsp;

7\. Select Data Streams under your property:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-51-53-pm.png){: width="232" height="278"}

8\. Your website should be in the table of Data streams. Select it to get your property information:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-56-39-pm.png){: width="877" height="128"}

**Note:** If your website is not shown in the table. Select Add Stream &gt; Web, enter your&nbsp; URL, add a name, then select Create stream. [Google has a guide](https://support.google.com/analytics/answer/9304153?hl=en#zippy=%2Cweb) for this as well.&nbsp;

9\. In the Web steam details panel, hit the copy icon (two stacked rectangles) next to your measurement ID:&nbsp;

![](/images/screen-shot-2023-03-04-at-4-59-41-pm.png){: width="891" height="177"}

You now have your Measurement ID to add to your Google Analytics 4 Tag.&nbsp;

10\. Go back to you Tag Manager screen and paste that Measurement ID into the corresponding field:&nbsp;

![](/images/screen-shot-2023-03-04-at-5-37-11-pm.png){: width="369" height="269"}&nbsp;

11\. Finally we're going to setup the debugger so we can test our analytics configuration. Select the user properties, then type **debug\_mode** under **Property Name&nbsp;**and type&nbsp;**true&nbsp;**under **Value**.

![](/images/screen-shot-2023-03-31-at-1-56-52-pm.png){: width="1828" height="396"}

Now we're ready to set our trigger.&nbsp;

### Configure the Google Analytics 4 Tag Trigger

GTM listens to triggers to fire the tag. In this scenario, we're going to tell GTM to listen for when any page loads on our website to trigger the Google Analytics 4 tag. This will successfully load GA4 on your website so you can track those views.&nbsp;

I'm assuming you still have the tag open, but if you don't then go to Tag Manager,&nbsp; select your container, select Tags from the lefthand menu, then select your GA4&nbsp; tag (or whatever you named it) from the tags table.&nbsp;

1\. Select anywhere in the area within Triggering&nbsp; to open the triggers menu:&nbsp;

![](/images/screen-shot-2023-03-04-at-5-42-31-pm.png){: width="927" height="284"}

2\. From the triggers menu, select **All Pages**\:&nbsp;

![](/images/screen-shot-2023-03-04-at-5-44-50-pm.png){: width="576" height="218"}

In this tag, we're telling GTM to load this GA4 configuration when any page of your website loads.&nbsp;

3\. Select **Save** in the top right corner.

4\. After the tag minimizes, select Submit to bring up the Publish menu. Then select Publish to see a [silly high school yearbook quote](https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fwww.analyticsmania.com%2Fpost%2Fgoogle-tag-manager-reaction-gifs-3%2F&amp;psig=AOvVaw3G0gmNVVkctJ2syhUG2gbZ&amp;ust=1680382121748000&amp;source=images&amp;cd=vfe&amp;ved=0CA8QjRxqFwoTCIiTl6-Fh_4CFQAAAAAdAAAAABAE). It will ask you to name your version, but you can just hit skip or type "Installed GA4 all by myself! Shout out Ed!".&nbsp;

Now your GTM container is setup and GA4 is set to load on our site. Let's get GTM installed on your website.&nbsp;

### Installing the Google Tag Manager Container

We got your GA4 property set up, our Tag Manager container ready with our GA4 tag and page load trigger, now it's time to install the container onto your website. The best way is to manually install the scripts within your code, but I respect that some people don't have access to their code and most likely use Wordpress so I added instructions for both.&nbsp;

More than likely, you're a Wordpress user.&nbsp;&nbsp;

### Test Configuration