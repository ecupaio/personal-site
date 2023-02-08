---
_schema: default
title: Washington Independent Review of Books
date: 2022-03-15 14:11:00 -0700
image:
  - /images/wirb-nav-desk.jpg
  - /images/wirb-nav-search.png
  - /images/wirb-nav-desk-subscribe.jpg
  - /images/wirb-nav-mobile.png
  - /images/wirb-nav-mobile-active.jpg
tech:
  - Web Design
  - Web Development
  - SEO
  - UX
link: https://www.washingtonindependentreviewofbooks.com/
layout: project
published: true
description: >-
  WIRB had a large navigation bar that took up half the screen on mobile so I
  was hired to design and develop a navigation bar that was sleek and
  functional. After improving the navigation bar, I added some code to
  automatically generate schema to feed into the Google Search Console instance
  I added for their site. This resulted in a 640% increase in impressions for
  their content. 
---
[WIRB's old navigation](https://web.archive.org/web/20220201115659/https://www.washingtonindependentreviewofbooks.com/) was clunky and took up way too much space on both desktop and mobile. Calls to action were there, but all shown at once so the user needed to orient themself before choosing a path. It was hardly the ideal experience for an element that is purposed expressly for navigating the user through the site.&nbsp;

The initial challenge with this project was packing all of the functionality of a search bar and a newsletter signup in addition to the site navigation. With my knowledge of code and UX, I was able to tuck the search and newsletter subscription inputs into elements that will be exposed on click. This prevents the user from getting overwhelmed with options so they can choose their path at a glance.&nbsp;

WIRB wanted more readers but I noticed when I tested queries for their content, they were well beyond the top 10 results. I initially installed Google Search Console and generated a sitemap from their ExpressionEngine based site to see what the issues were. There were some mobile usability issues that I was able to fix easily with some CSS magic, but the glaring issue was the lack of [schema or structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)&nbsp;that Google uses to know what's on the page and plug it into their search algorithms. I worked within ExpressionEngine to programmatically generate schema for each review so that content editors could post their reviews and Google Search Console could read the data and log it for search results. After the first month of implementation search impressions for WIRB pages went from ~3,000 to ~22,000, a 640% increase!&nbsp;