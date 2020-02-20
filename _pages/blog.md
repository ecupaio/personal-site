---
title: Blog
permalink: "/blog/"
layout: default
css: blog
---
<main id="blog">
  <section id="intro">
    <div class="intro-inner">
    <h1>Blog</h1>
    <p>
      This blog is for when I figure out something and I want to remember it. I've also taken the time and consideration to write my posts free of jargon and difficult to interpret for own use functions. My code doesn't have 100 variables or special mix-ins that you have to connect to meaning like a conspiracy theorist with strings on a board.
    </p>
    </div>
  </section>
  <section id="posts">
    <ul class="post-list">
      {% for post in site.posts %}
      <li>
        <a class="post-link" href="{{ post.url }}">
          {{ post.title }}
        </a>
      </li>
      {% endfor %}
    </ul>  
  </section>
</main>
