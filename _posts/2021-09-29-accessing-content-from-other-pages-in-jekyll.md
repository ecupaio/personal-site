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
        {% raw %}{% assign about-page = site.pages | where: "path", "about.html" | first %}{% endraw %}
        <div class="intro-text"></div>
        <a class="about-link" href="">Learn more</a>
      </div>
    </section>

I added the variable onto the homepage right where I'll use it so I'm not scrolling. Remember, just like javascript, you can only use a variable after it is defined so make sure you have it above where you'll use it.

## Grab the front matter from the page content variable

Now we can just use this page variable like we would use [page variables](https://jekyllrb.com/docs/variables/#page-variables) on the page but it's for a different page.

**index.html**

    ---
    title: Home
    permalink: /
    ---
    <section id="about-section">
      <h2>About</h2>
      <div class="about-intro">
        {% raw %}{% assign about-page = site.pages | where: "path", "about.html" | first %}{% endraw %}
        <div class="intro-text">{% raw %}{{ about-page.intro }}{% endraw %}</div>
        <a class="about-link" href="{%raw%}{{ about-page.url }}{% endraw %}">Learn more</a>
      </div>
    </section>

In the above snippet I have brought in the front matter from the about page.

{% raw %}{{ about-page.intro }}{% endraw %} is from the intro: front matter on the about.html page. 

{%raw%}{{ about-page.url }}{% endraw %} is the link to the about.html page. I use the url variable here because I don't want the link to break if we change the permalink to /our-story/ or whatever. 

## Let's run it back!

In order to access content from other pages into a page, you need to:

* Create a variable with the page content
  * Create an array of all pages
  * Filter the array for the single page
  * Use first filter to grab the specific page object
* Grab the front matter from the page content variable
  * Just use dot notation like you would for a page but use the variable instead

Thanks for tuning in for another Jekyll lesson! 

PS: If you want to show Jekyll page variables as plain strings, use the [raw](https://jekyllrb.com/docs/liquid/tags/) liquid tag.