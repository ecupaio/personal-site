---
title: Tracking Google Analytics Events with Google Tag Manager
meta_img: ''
tags:
- Google Tag Manager
- Google Analytics
footer-cta:
  title: Still need help?
  text: Let's find a solution together.

---
This guide is assuming you have a [Google Analytics - Universal Analytics (UA)](https://support.google.com/analytics/answer/10269537?hl=en) property for your website and it's deployed via [Google Tag Manager (GTM)](https://support.google.com/tagmanager/answer/6103696?hl=en). If you are unsure, then install the [Tag Assistant extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en) for your chrome browser and check if your Tag Manager Property is setup and Analytics are among the tags.

## Objective

I want to track whenever people click the Work with me button on this website with Google Analytics. The purpose of this demo is to show you how to track an event without touching the website's code by using Google Tag Manager.

## Configure Google Analytics Event

[Open Tag Manager](https://tagmanager.google.com/) to get started, then select your property.

### Add the Tag

Once in your Property's workspace Tags from the sidebar menu, and then select the New  button on the right side of the tags list to add a new tag

![](/images/gtm-tags-menu.jpg)

### Select a Tag Type

A window should pop-up from the right. Give your tag a name and select the Tag Configuration field

![](/images/tag-window.jpg)

A new window will pop up on the right side again, prompting you to choose a tag type. Use the search feature and **find the Google Analytics: Universal Analytics tag type**. Select it to add it to the Tag Configuration

![](/images/tag-type-select.jpg)

Now you should have **Google Analytics: Universal Analytics added to the Tag Type field**.

### Configure the Tag

Go to the dropdown under the label **Track Type and select Event**. Now you should see a new set of fields labeled **Event Tracking Parameters**. Fill out each of the Category, Action, and Label fields.

Add your Google Analytics settings variable. If you don't already have one, follow [Google's documentation](https://support.google.com/tagmanager/answer/9207621?hl=en).

The Non-Interaction Hit field can stay as False because this is an interaction and we want to count it as such for Google Analytics. [There's an explanation](https://support.google.com/analytics/answer/1033068?hl=en#NonInteractionEvents) fit for Computer Science doctorates, but for this case, it will be False.

![](/images/tracking-params.jpg)

Now that our tag is configured, let's set up the Triggering. **Select the Triggering field** below for the Choose a trigger menu to pop up. 

![](/images/triggering-field.jpg)

For this step, we'll need to add a new trigger. Select the plus sign in the upper right corner. 

![](/images/choose-trigger-1.jpg)