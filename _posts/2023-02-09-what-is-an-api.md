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

I developed many frontend tools and websites with APIs so allow me to introduce to APIs: what they are, what they do, and how they evolved throughout the years.&nbsp;

## What does API stand for?&nbsp;

API stands for Application Programming Interface, which won't really clear anything up, but now you know.&nbsp;

## What does an API Do?

APIs allow for transfers of data between a frontend like an app or a website and transfer them to a backend like a database. For example, when you login to Facebook, you send your username and password through an API and their database sends a response verifying or denying the credentials you send, eg "yup, this is a user and their password is correct!" That would be an example of a GET request, where data is sent to a backend and a response is generated. There's several types of requests: **GET**, **POST**, **PUT**, and **DELETE**. These requests are sent to an endpoint, a URL meant to receive requests, along with data, otherwise known as a **request body.&nbsp;**Now that we got the terminology out of the way, let's get into what this actually looks like on a simple level.&nbsp;

For this example, I'm using a [free API](https://restful-api.dev/) that will allow me to GET, POST, PUT, and DELETE data on a backend. Let's GET a list of the data first:&nbsp;

### GET method

In this example, the endpoint is&nbsp;[https://api.restful-api.dev/objects](https://api.restful-api.dev/objects). You can click on that link and see the matrix. Just kidding, it's&nbsp; a structured data language known as [JSON](https://www.w3schools.com/js/js_json_intro.asp). All us engineers use JSON for receiving and requesting data. You don't need to know too much about other than it's the standard language we use for reading and sending data. I'm also using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)&nbsp;to get the data from the API. Again, it's just engineering things but I figured it's good to cover all of the bases. Here's a code example where I GET a list of objects from the API and display their name data on a page.&nbsp;

&lt;p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="ZEjdrEN" data-user="ecupaio" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"&gt;<br>&nbsp; &lt;span&gt;See the Pen &lt;a href="https://codepen.io/ecupaio/pen/ZEjdrEN"&gt;<br>&nbsp; API Example&lt;/a&gt; by Ed Cupaioli (&lt;a href="https://codepen.io/ecupaio"&gt;@ecupaio&lt;/a&gt;)<br>&nbsp; on &lt;a href="https://codepen.io"&gt;CodePen&lt;/a&gt;.&lt;/span&gt;<br>&lt;/p&gt;<br>&lt;script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"&gt;&lt;/script&gt;

### GET method with a request body

Next we're going to add a request body to our GET request. A request body will allow us to narrow down the data we get. For example, if I didn't want the whole list of objects, but a specific one, I would need to add some data along with my request to say to the API, "gimme only the objects with this particular id. Let's see that in action:&nbsp;

I told the API, get me only the objects with an id of 4 and it returned me exactly that.&nbsp;

**&nbsp;**&nbsp;&nbsp;