---
title: How to Set Up Conversions with Google Analytics for Beginners
meta_img: https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80
tags:
- Google Analytics

---
For this tutorial, I am assuming your are using the Universal Analytics product for Google Analytics. You can verify information in this guide by following along with [Google's official documentation](https://support.google.com/analytics/answer/1032415?hl=en&ref_topic=6150889#zippy=%2Cin-this-article "Google's official documentation"). Fair warning Google sunsets features and changes layouts constantly and doesn't reflect the most up-to-date user interface like me. 

## Access the Goals Dashboard

First, open your [Analytics Property](https://analytics.google.com/) then navigate to the admin section by **selecting the gear icon in the bottom left corner**: 

 Now that you are in the Admin dashboard, **select the Goals link in the View column**:

## Add a New Goal

With the Goal's dashboard open, **select the New Goal button**:  

**Give your goal a Name** that you can easily know what it is. I track submissions to my form and the conversion is aptly named "Form Submission" 

Next, **select a Goal slot ID**. It should automatically select a free slot for you. This is helpful in grouping together your goals into views. So if you want to cluster conversions around certain user conversion flows, you can keep them all the in the same set. This will be helpful for viewing the Goals all in one place in your Analytics. 

### Select Goal Type

Here's the tricky part: you will need to **select a type**. The type will determine how you will set up your Goal.  

#### Destination 

For most novices, I will suggest using the **Destination Type**. Let's say you have a confirmation page after a user submits a form or purchases a product. 

Once you determine your goal page users will end up on, **enter the full URL** into the Destination field with Equals to selected in the dropdown: 

Google has [full documentation](https://support.google.com/analytics/answer/1116091?hl=en#zippy=%2Cin-this-article) on all the possibilities and parameters for entering a Destination goal URL, but you are not a computer science graduate and you just want to know how many people signed up for your newsletter on a Saturday so I suggest using the full URL (**example: https://www.mywebsite.com/thanks**) like I demonstrated above. 

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

Before we hack into the Matrix, we need to make sure we have the correct setup for our Goal trigger methods. 