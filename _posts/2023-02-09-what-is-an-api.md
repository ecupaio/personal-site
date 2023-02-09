---
_schema: default
title: 'What is an API? '
date: 2023-02-09 11:00:22 -0800
meta_img: ''
tags:
  - Training
footer-cta:
  title: Still don't get it?
  text: I do and I'll figure it out for you.
published: false
---
![](/images/screen-shot-2023-02-09-at-11-02-55-am.png){: width="602" height="161"}

Elon Musk announced recently, as of this post, he was monetizing the free API to the dismay of&nbsp;[novelty bot accounts](https://twitter.com/ca_dmv_bot), but reneged on it and the goofy, irreverent tweets are still flowing. Outside of Musk's erratic management of the social media platform, more people asked the question: what is an API?&nbsp;

I developed many frontend tools and websites with APIs so allow me to introduce to APIs: what they are and what they do.&nbsp;

## What does API stand for?&nbsp;

API stands for Application Programming Interface, which won't really clear anything up, but now you know.&nbsp;

## What does an API Do?

![](/images/api-diagram.png){: width="643" height="163"}

APIs allow for transfers of data between a frontend like an app or a website and transfer them to a backend like a database. For example, when you login to Facebook, you send your username and password through an API and their database sends a response verifying or denying the credentials you send, eg "yup, this is a user and their password is correct!" That would be an example of a GET request, where data is sent to a backend and a response is generated. There's several types of requests: **GET**, **POST**, **PUT**, and **DELETE**. These requests are sent to an endpoint, a URL meant to receive requests, along with structured data, which can take the form of a&nbsp;**request body**&nbsp;or a **query string​**. Now that we got the terminology out of the way, let's get into what this actually looks like on a simple level.&nbsp;

For this example, I'm using a [free API](https://restful-api.dev/) that will allow me to GET, POST, PUT, and DELETE data on a backend. Let's GET a list of the data first:&nbsp;

### GET method

In this example, the endpoint is&nbsp;[https://api.restful-api.dev/objects](https://api.restful-api.dev/objects). You can click on that link and see the matrix. Just kidding, it's&nbsp; a structured data language known as [JSON](https://www.w3schools.com/js/js_json_intro.asp). All us engineers use JSON for receiving and requesting data. You don't need to know too much about other than it's the standard language we use for reading and sending data. I'm also using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)&nbsp;to get the data from the API. Again, it's just engineering things but I figured it's good to cover all of the bases. Here's a code example where I GET a list of objects from the API and display their name data on a page.&nbsp;

&nbsp; See the Pen [&nbsp; API Example](https://codepen.io/ecupaio/pen/ZEjdrEN) by Ed Cupaioli ([@ecupaio](https://codepen.io/ecupaio)) &nbsp; on [CodePen](https://codepen.io).
{: .codepen}

<script async="" src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### GET method with a query string

Next we're going to add a request body to our GET request. A parameter will allow us to narrow down the data we get. For example, if I didn't want the whole list of objects, but a specific one, I would need to add some data along with my request to say to the API, "gimme only the objects with this particular id. Let's see that in action:&nbsp;

See the Pen [API Example: GET with request body](https://codepen.io/ecupaio/pen/RwBzQjQ) by Ed Cupaioli ([@ecupaio](https://codepen.io/ecupaio)) on [CodePen](https://codepen.io).
{: .codepen}

<script async="" src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I told the API, get me only the objects with an id of 4 with the query string **?id=4**&nbsp;appended to the end of the endpoint URL and it returned me the object with an id of 4. This is the most common type of GET request as most APIs take some form of data to give a response. For example,&nbsp;[Google Maps](https://www.google.com/maps/place/Golden+1+Center/@38.5802045,-121.5018489,17z/data=!3m2!4b1!5s0x809ad12d01bf9ce7:0x3333a570477aa9a0!4m5!3m4!1s0x80e84cbc046b19bf:0x987c53711f042fa6!8m2!3d38.5802045!4d-121.4996602) takes a query string of your address and returns a location.&nbsp;

### POST method

Now that we have successfully received data, we're now going to post data to the database via the API. As I mentioned earlier, APIs can also be used to send data from a website to a database. I made a simple example below of how you can send or POST data to an API and the API will return a response to let you know if it went through. Go ahead and enter your favorite food. The data doesn't actually go anywhere so you can admit your love of pineapple pizza discretely.&nbsp;

See the Pen [API Example: GET with request body](https://codepen.io/ecupaio/pen/QWBXmRp) by Ed Cupaioli ([@ecupaio](https://codepen.io/ecupaio)) on [CodePen](https://codepen.io).
{: .codepen}

<script async="" src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

This API will accept anything so go nuts. Lots of Javascript here so let's break it down. On submit of the form, I grab the value of the favorite food input and create a JSON object:&nbsp;

```
{
  food: 'Spaghetti'
}
```

I'm telling the API, "I'm sending you this user's favorite food. Their favorite food is Spaghetti." After the data passes through the API and onto the database, the database says "That's great. We got it" and that message passed through the API and back to the website with the following data:&nbsp;

```
{
  message: 'Success'
}
```

I can now grab that message object and display the value on the page: Success.