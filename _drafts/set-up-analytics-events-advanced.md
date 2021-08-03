---
title: 'set up analytics events, advanced '
meta_img: ''
tags: []

---
#### Event

Now if you don't have a confirmation page, you're going to need to **select the Event type**. This set up is a wee bit more complicated but I can walk you through it. Take a deep breath, we're going to do some light javascript. Don't worry, you can copy/paste it in, which is actually what most of us engineers do (shh, keep it a secret!).

After you select continue, you will see the Goal details panel, where you will **enter in the Goal Category, Action, and Label fields**:

Like the name, you can enter what ever words for each of the fields. **Category** is your top level condition and the hierarchy descends from there with **Action** next and **Label** as the last. Here's how I would do the labels for a newsletter signup:

* **Name:** Newsletter Sign Up
* **Category:** Form
* **Action:** Submission
* **Label:** Newsletter

There's no requirement for what fields you need to fill it just has to be at least one. We're going leave the Value field blank for this example here since it's a bit advanced.

**Select Save** and now you have set up Google Analytics to read your goal. In the next part, we will set up the Goal to trigger.

##### Determine Google Analytics Installation Type

Before we hack into the Matrix, we need to make sure we have the correct setup for our Goal trigger method.

* Open you website in the Chrome browser
* Right-click anywhere on the page and select View Page Source
* Press control/command + F and type in "gtm.js"
  * If the finder locates that text, then you have Google Analytics installed via Google Tag Manager. Go to the Google Tag Manager Event
  * If not, then type in "gtag.js". If the finder locates that script, you have Universal Analytics installed. Go the the Universal Analytics Event

##### Google Tag Manager Event

In order to to 

##### Universal Analytics Event