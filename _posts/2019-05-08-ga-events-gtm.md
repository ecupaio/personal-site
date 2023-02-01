---
title: Use inline Google Analytics Events with Google Tag Manager
meta_img: https://images.unsplash.com/photo-1599658880436-c61792e70672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
tags:
- Google Analytics
- Google Tag Manager
published: true
---
This guide was written assuming you have implemented Google Universal Analytics via Google Tag Manager.

You can create events in Google Tag Manager; no code required, but I wanted to be able to adapt my old inline events and some events I had set up in my javascript.

In this guide, you will create a generic event in Google Tag Manager that will trigger on a dataLayer.push event that will define variables and send the event details to Google Analytics

#### Create the event tag

1. Go to Google Tag Manger and create a new tag.
2. In Tag Configuration, select Google Analytics Universal Analytics, then toggle Track Type to Event.

#### Create variables for the Event Tracking Parameters

Next, you will create a variable for each of the Event Tracking Parameters: Category, Action, Label. I never use Value, but if you do it's the same process as the previous three parameters.

1. Select the wee lego next the field to add a variable:
2. Select the plus sign in the top corner in the new modal that pops to add a new variable.
3. Label your variable respective to the Event Tracking Parameter (eg Category), then select **Data Layer Variable** as the event type
4. Add a label to the Data Layer Variable Name that coincides with the tracking parameter.
5. Select Save and repeat this for each of the tracking parameters.

![](/images/Screen Shot 2020-04-27 at 2.52.01 PM.png)

#### Create a trigger for the tag

Now that we have the variables set up to accept values, we need to add a trigger to the tag so that it will send data to Google Analytics. We are going to use the dataLayer, an array that Google Tag Manager can read when objects are added, as the trigger.

1. Select inside the Triggering box, then select the plus sign in the upper-right hand corner to create a new trigger.
2. Label the trigger, click on the Trigger configuration box, then select **Custom Event**
3. Enter "gaEvent" (or whatever you want to call your Google Analytics events) for the event name.
4. Select Save

In the end, your tag should look like this:

![](/images/Screen Shot 2020-04-27 at 3.20.44 PM.png)

Submit your changes and now you will be ready to convert your events to the new format.

#### Convert GA events to dataLayer

Your Google Analytics events used to look like this: `ga('send', 'event', 'Video', 'play', 'cats.mp4');`

Now they will look like this:

    dataLayer.push({
                    'event': 'gaEvent',
                    'eventCategory':'Category',
                    'eventAction': 'Action',
                    'eventLabel':'Label'
                  });

You will notice that the variables we created earlier are in there. Google Tag Manager will read the `event` object to trigger the Google Analytics Event Tag and will fill in the data for the tracking parameters (category, action, label) that you have a corresponding object defined for each.

#### Testing

Once you have converted your existing triggers, go into [Google Analytics' Real-time view](https://support.google.com/analytics/answer/1638635?hl=en) and select Events to see if your triggers are functioning properly.
