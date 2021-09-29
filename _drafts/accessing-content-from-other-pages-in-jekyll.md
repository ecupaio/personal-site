---
title: Accessing Content from Other Pages in Jekyll
meta_img: ''
tags:
- Jekyll
- Liquid
footer-cta:
  title: Find a better way? Let me know!
  text: 'I really like talking with fellow coders on that grind. My inbox is open. '

---
**Scenario:** You want to feed in content from another page into your homepage. You frantically googled this title and my post came up in the search results after all the unhelpful jerks in StackOverflow. Welcome! I'll sort you out right and you can always contact me if you have questions.

In this example, we will pull in front matter content from the about page (about.html) into the home page (index.html). Specifically we're going to pull in the link to the about page and the intro text.

**about.html**

    ---
    title: About
    permalink: /about/
    intro: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    ---

**index.html**

    ---
    title: Home
    permalink: /
    ---
    <section id="about-section">
      <h2>About</h2>
      <div class="about-intro">
      	<div class="intro-text"></div>
        <a class="about-link" href="">Learn more</a>
      </div>
    </section>

## Create a variable with the page content

    {% assign about-page = site.pages | where: "path", "about.html" | first %}

Let's break this down. You already know how to [create a variable](https://shopify.github.io/liquid/tags/variable/), so we'll skip that. What I did above was create an array, then filtered it and finally selected the item. 

[site.pages](https://jekyllrb.com/docs/variables/#site-variables) is an array of all the pages in your site. 

[where](https://shopify.github.io/liquid/filters/where/) ([Jekyll specific docs](https://jekyllrb.com/docs/liquid/filters/)) is an array filter that you pass and object/value pair into. I use [path ](https://jekyllrb.com/docs/variables/#page-variables)since it's easily changeable like a permalink or page title. Then I input the exact page path: about.html. 

[first]() grabs the first object of the array. Since it's only one object you could use last too, but the big picture here is that we need the exact object so we don't have to loop through the array. 

Now let's see it in practice: 

**index.html**

    ---
    title: Home
    permalink: /
    ---
    <section id="about-section">
      <h2>About</h2>
      <div class="about-intro">
      	{% assign about-page = site.pages | where: "path", "about.html" | first %}
      	<div class="intro-text"></div>
        <a class="about-link" href="">Learn more</a>
      </div>
    </section>
    