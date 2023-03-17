---
_schema: default
title: Tracking MailChimp Embed Signup forms with GA4 and GTM
date: 2023-03-17 09:56:02 -0700
meta_img: ''
tags:
footer-cta:
  title: ''
  text: ''
published: false
---
MailChimp([kimp?](https://www.google.com/search?q=mail+kimp&amp;sxsrf=AJOqlzVbLgP1oCOunUjALfatL7YX73nrdA%3A1679073219181&amp;ei=w58UZNGxCtqwkvQPg9SC0AU&amp;ved=0ahUKEwiRn5-Wu-P9AhVamIQIHQOqAFoQ4dUDCBE&amp;uact=5&amp;oq=mail+kimp&amp;gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBggAEBYQHjIFCAAQhgM6BAgAEEc6BAgjECc6DQguEIAEEMcBENEDEAo6CggAEIAEEBQQhwI6DQgAEIAEEBQQhwIQsQM6CAgAEIAEELEDOgUILhCABDoFCAAQkQI6EAgAEIAEEBQQhwIQsQMQgwE6CwgAEIAEELEDEIMBOggIABCABBDJAzoECAAQAzoHCC4QgAQQCjoICAAQFhAeEApKBAhBGABQ6gJYkQ1ghhBoAHACeACAAagBiAHSBpIBAzAuNpgBAKABAcgBA8ABAQ&amp;sclient=gws-wiz-serp#fpstate=ive&amp;vld=cid:598e9c49,vid:GkPZP2NADYg)) has a handy signup form you can embed into your website easy-peasy, but tracking submissions is a bit more complicated. In this guide, I will show you how track MailChimp signup form submissions on your website using Google Analytics 4 and Google Tag Manager.&nbsp;

I am assuming that you have Google Analytics 4 configured with Google Tag Manager on your website along with debug view enabled. If you don't follow my guide: \[SUPPORT ARTICLE HERE\]

## Configure your Custom Event Tag

Google's [Recommended Events](https://support.google.com/analytics/answer/9267735?hl=en) doesn't have anything that would accurately capture a newsletter signup since the [signup event](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtm#sign_up)&nbsp;should be used for when a user account is created and [generate\_lead](https://developers.google.com/analytics/devguides/collection/ga4/reference/events?client_type=gtm#generate_lead)&nbsp;is better suited for actual lead forms so you can assign value to them for ad campaigns.&nbsp;

In this case, we'll call our custom event **newsletter\_signup**&nbsp;and set our GA4 tag to receive the event like so:&nbsp;

![](/images/screen-shot-2023-03-17-at-10-30-50-am.png){: width="926" height="580"}

You can get fancy and add event parameters to define the location of the signup, (eg footer or [the cursed overlay](https://edcupaioli.com/blog/8-ux-trends-that-need-to-go/)), but I'm keeping it simple here.&nbsp;

## Setting your Trigger&nbsp;

Next step is to add your trigger so the event will fire when the form successfully submits. Logically you would think that the [Form Submission trigger](https://support.google.com/tagmanager/answer/7679217?hl=en&amp;ref_topic=7679108) is the way to go, but it is not. I'm assuming it's because MailChimp uses javascript to submit the form data and prevent the default form action from redirecting the user to another page. You also shouldn't trigger the event on the [button click](https://support.google.com/tagmanager/answer/7679320?hl=en&amp;ref_topic=7679108) because MailChimp can reject the input if the email is not in the right format or the email already exists in their database. Either way, you will use the [Element Visibility trigger](https://support.google.com/tagmanager/answer/7679410?hl=en) since MailChimp displays a success message after their database accepted the data.&nbsp;&nbsp;

1\. Select **Element Visibility** for your Trigger Type:&nbsp;

![](/images/screen-shot-2023-03-17-at-10-42-03-am.png){: width="249" height="277"}

2\. Next, select ID for the Selection Method.

We're telling Google Tag Manager, watch for this element to appear on the page with this exact ID. IDs are unique to one element on the DOM, ie the webpage, so they're the best to work with if you're targeting one element.&nbsp;

3\. Enter the Element ID of the success response: **mce-success-response**&nbsp;into the Element ID field:&nbsp;

![](/images/screen-shot-2023-03-17-at-10-46-45-am.png){: width="399" height="772"}

You can leave the options as the default. I changed the When to fire this trigger to every time it appears for testing purposes, but you can leave it as once per page if you only have one form embedded on the page.&nbsp;

Now for that ID, here's how I got it. I pasted MailChimp's current code as of writing this below:&nbsp;&nbsp;

```
<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
    <form action="YOUR_FORM_ACTION_URL" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        <div class="mc-field-group"><input type="email" placeholder="Your Email" name="EMAIL" class="required email" id="mce-EMAIL"></div>
        <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
        </div><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;"><input type="text" name="b_0b5586be71b0fee16a03f5684_e41ec18eab" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
</div>
<!--End mc_embed_signup-->
```

As you go down the HTML, you'll see a div with the ID mce-success-response. Bingo! The other way you can find it is submit a valid email to the form and use [Chrome dev tools](https://developer.chrome.com/docs/devtools/) (right click the element &gt; Inspect Element) to get the success response ID when it appears.&nbsp;

4\. Hit the Save button and you're all set to test.

## Test your Tag

Now it's the moment of truth, let's test our tag by using using the Tag Assistant in Preview mode and GA4's new debug view.&nbsp;

1\. Select **Preview** in the upper right-hand corner. We don't actually have to publish our tag while testing so we should be able to see our new tag firing.&nbsp;

2\. In the new window that appear, enter your website's URL and select **Connect**\:

![](/images/screen-shot-2023-03-17-at-11-07-30-am.png){: width="1298" height="1052"}

A new window will appear with your website and there will be a wee modal that says your site is in Preview mode:&nbsp;