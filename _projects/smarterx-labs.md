---
_schema: default
title: SmarterX Labs
date: 2024-01-29 08:28:23 -0800
image:
  - /images/smarter-labs-2.png
  - /images/smarter-labs-1.png
tech: []
link: 'https://smarterx.webflow.io/labs'
layout: project
published: false
description: 'Made in Webflow, this page utilizes their collections feature to make adding content a breeze.'
---
I had the wonderful opporunity to work with one of my former Arcadia colleagues and on a webflow instance. I had dabbled in webflow before, but never built anything in the platform before so this was a fun use case of the drag and drop framework. 

I always strive to make my sites fully-editable by content editors so I needed to find a solution to enable content editors to easily add items to Tools and Data sections. I could have just created some reusable modules they could drop in, but I recieved feedback that their page builder wasn't accessible to everyone and it was difficult to use. I opted to use the collections feature where content editors could simply add new pages of content and it would feed in automatically. The items in the Data section were just blog posts with a specific tag, which was simple enough to integrate. The Tools section was much more complicated in that I needed these pages to redirect to other sites that hosted front-end tools. I created a unique solution, which I [wrote about](/blog/dynamic-redirects-for-collections-in-webflow/) in my blog. Basically, we got the Tools fed into the page without any dead links or disruptions to SEO. 