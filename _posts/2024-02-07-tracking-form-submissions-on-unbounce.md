---
_schema: default
title: Tracking Form Submissions on Unbounce
date: 2024-02-07 08:29:38 -0800
meta_img: ''
tags:
- Google Analytics
- Unbounce
footer-cta:
  title: "Don't wanna go through all that?"
  text: 'Just throw money at this problem and hire me!'
published: true
---
## Background

Unbounce provides a drag and drop editor and forms to make landing pages, but their GA4 integeration doesn't track form submissions since the data is transfered via Javascript and not the form action handler. Further complicating matters, they don't have a public event handler for form submissions, but [another developer uncovered one](https://community.unbounce.com/tips-scripts-43/how-to-run-custom-code-scripts-on-form-submission-5978). I readched out to their support to see if the event handler is documented but it's not, meaning this method will work now but there's no guarantees it will work in the future so take this with a grain of salt. The salt being some console log commands you can mash in your inspector window.  

If you don't know what I just said, that's okay you can just skip to the steps section and copy paste the code. 

## Requirements 
- Unbounce account with admin access
- GA4 account with admin access
- GTM account with admin access  

## Steps 
In the steps below, I will guide you on how to trigger a script on Unbounce that will tell GTM to send an event to GA4 along with the data about the form. 

For this solution, I am using Google Tag Manager (GTM) since it allows us to reuse the event trigger in case you want to add more than just Google Analytics events, e.g. ad pixels. 

### Directly Triggering Events to GA4

If you don't want to go through GTM and just submit data directly to GA4, you can just [install GA4 directly to Unbounce](https://documentation.unbounce.com/hc/en-us/articles/9924205453076-Integrating-Unbounce-with-Google-Analytics-4-GA4), then paste the following script into the [custom scripts manager](https://documentation.unbounce.com/hc/en-us/articles/360035250491-Adding-Your-Custom-Scripts-Using-Script-Manager): 

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

Also, to make things easier down the line, [create a variable](https://support.google.com/tagmanager/answer/7683362?hl=en) for your [Measurement ID](https://support.google.com/analytics/answer/12270356). Choose [constant](https://support.google.com/tagmanager/answer/7683362?hl=en) for the variable type and you'll be good to go:

![](/images/ga4-var.png)

### Create a Tag for the Event

Now that you have GA4 set up to recieve event data and your measurement ID conveniently in a stored variable for re-use, we can add our tag. 

[Google has detailed instructions](https://support.google.com/tagmanager/answer/13034206?hl=en) with videos where you can learn more on how to configure GA4 

#### Tag Conifiguration

The first step is to select the new button at the top of the tags list, then select Google Analyics > Google Analytics: GA4 Event for the tag type. 

Next, you'll select the wee lego with a plus sign icon in the Measurement ID field to add your variable with your measurement ID. 

Now you're set to add your Event Name and the Event Parameters. For the Event Name, I used the [generate_lead event](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?sjid=3916615413214902716-NA&client_type=gtag#generate_lead) since Google reccomends using their recommended events and the event name is descriptive of what's happening: a user is submitting their information for follow-up from a salesperson. That's lead generation if I've ever heard of it, but feel free to use the form_submission event type from enhanced measurement, or add a new custom event. My favorite analytics blogger, Julius Fedorovicius, has a very [informative article](https://www.analyticsmania.com/post/google-tag-manager-form-tracking/) with a funny decision tree that I highly recommend reading if you're having an existential crisis on what to name your event. For most unbounce forms, I would use generate_lead since it has a value paramter you can use to analyze your ad spend. 

For the Event Parameters, we're going to add some more variables so GTM can insert the values we add to the data layer. 

1. Select the Event Parameters dropdown, then select the Add Parameter button
2. Enter the string for Event Parameter input. In this example, we're going to start with one of the required parameters: value
3. Select the wee lego plus sign icon in the Value input, then select the plus sign that appears in the top right corner of the Choose a variable panel. 
4. Give your Variable a title: "GA4 Param - value" then select the Variable Configuration to bring up the Choose variable type menu. 
5. Select Data Layer Variable, then enter the parameter name in the Data Layer Variable Name input: value. 

Repeat these steps for the other required parameter, currency, and our form_name parameter we'll use to identify the form.

Your tag configuration should look like this: 

![](/images/screenshot-2024-03-05-at-10.13.08 am.png)

#### Triggering

Your event is configured, all that's left is to set up the trigger. 

1. Select the empty space below Triggering to bring up the Choose a trigger panel
2. Select the plus sign in the top right corner to add the trigger
3. Give your trigger a title: GA4 Event - generate_lead 
4. Select the empty space below Trigger Configuration to bring up the Choose trigger type menu 
5. Scroll down to Other and select Custom Event. This will read the event object you send to the dataLayer. 
6. Add generate_lead to the Event name input, then hit save and you're done.

Your Triggering should look like this: 

![](/images/screenshot-2024-03-05-at-10.23.20 am.png)

And your final tag should look like this: 

![](/images/unbounce-tag-final.png)

Save the tag and then publish the container and you're all set. Google has docs on [how to make your changes go live](https://support.google.com/tagmanager/answer/6107163?hl=en) in case you're a first time tagger. 

### Add Script to Unbounce

GA4 is installed on our GTM container, we have a tag ready to recieve data and send that data to GA4. Now all we need to do is paste the script into the script manager. 

Follow [Unbounce's instructions for adding script to your site](https://documentation.unbounce.com/hc/en-us/articles/360035250491-Adding-Your-Custom-Scripts-Using-Script-Manager). Make sure you select Before Body End Tag for placement and All for included on so the script fires properly and will trigger no matter the page. 

In the paste section for the script, insert this block of code: 

```
<script>
  window.ub.hooks.afterFormSubmit.push(function() { 
    const pageName = window.ub.page.name;
    window.dataLayer?.push(
      { 
        "event": "generate_lead", //GA4 recommended event: https://developers.google.com/analytics/devguides/collection/ga4/reference/events?sjid=15058574496981631888-NA&client_type=gtag#generate_lead
        "value": 0, //required parameter for generate_lead
        "currency": "USD", //required parameter for generate_lead. USD is for US Dollars. See Google's docs for a full list of currency codes: https://support.google.com/analytics/answer/9796179
        "form_name": pageName //optional parameter used to identify form by page it's embedded on. 
      }
    );
    });
</script>
```
Now you're all set. 

If you care to learn about what you just pasted and why it works, here's an explanation: 

First, let's look at where I got that `window.ub.hooks.afterFormSubmit.push` handler. Type window.ub into your [DevTools console](https://developer.chrome.com/docs/devtools/console) and observe the code below: 

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
I've removed all of the details but left in the punctuation so you can see what's a string, array, number, boolean, etc. There's two objects we use for our script: page.name and hooks.afterFormSubmit. 

page.name gets us the name of the page and we use that for the form_name parameter. I thought this was a good solution since you build the form on the page instead of building the form separately then embedding them on each page. Also, Unbounce does not provide human-readable names in the name attribute of their forms and does not allow you to add one manually. 

hooks.afterFormSubmit is an array we push an object to via our script. This works exactly like dataLayer in GTM. Their window.ub data layer detects changes to it's objects and you can use that listener to communicate to GTM that an event occured. 

### Observing Data in GA4 

I'm going to be blunt here: GA4's default reporting dashboards are bad. I typically create Looker Studio reports if I need to share with stakeholders/clients or create Explorations (which are not effectively shareable since they lock the date for some odd reason) if I'm just looking at the data. I can, however, provide you with the steps necessary to get an overview of the event within GA4's dashboard: 

1. Go to analytics.google.com and select your property. 
2. From the sidebar, select Reports > Engagement > Events
3. Filter for event name: generate_lead

Filtering the default Events list will only give you the event count. If you want to see the form_name parameter associated with each event, you will need to add it as an event-scoped custom dimension. Google has docs on [how to add the custom dimension](https://support.google.com/analytics/answer/14239696?sjid=5074814885421530774-NA#zippy=%2Canalyze-the-custom-dimension-in-a-report%2Canalyze-the-custom-dimension-in-an-exploration%2Cbuild-an-audience-using-the-dimension) but I'll explain below as well: 

1. Select the gear icon at the bottom of the sidebar for the admin menu
2. Once in, select Custom definitions.  
3. Select Create Dimension then insert the following data into each of the attributes: 
  * Dimension name: Form Name
  * Scope: Event
  * Description: (you can leave this blank unless you wanna describe the name of the form)
  * Event parameter: form_name

It should look like this before you hit save: 

![](/images/custom-dimension-ga4.png)

Once you have the dimension created, select go back to the events report and select the plus icon next to the event name and type in "Form Name" to add the dimension to your report and see what forms have been filled out. Again, I'll suggest going through the motions of creating a Looker Studio report or at the very least, creating an Exploration which will allow you to customize exactly the data you want and allow you to have a saved view you can pull up on demand. 

Note: Do not select the event to see the event drilldown page. On the event drilldown page, you'll see all sorts of useless information: 
  * a map of where people are clicking on the event in case you wanted to know where your bots live. Spoiler alert: 
  * events by gender. Did you know it's ladies night for page scrolls?  
  * Event parameters, the thing you'd actually want to know since we added that form_name to identify which form was filled. Oh but wait it's for only events that occurred in the last 30 minutes. You wanted useful data? This is GA4, we ain't got that! 