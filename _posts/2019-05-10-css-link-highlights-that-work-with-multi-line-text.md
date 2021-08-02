---
title: CSS Link Highlights that work with multi-line text
meta_img: https://images.unsplash.com/photo-1585247226801-bc613c441316?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
tags:
- Web Development
- CSS

---
I originally thought just adding a pseudo element beneath the text and growing the height would do the trick, but I figured out that they don't account for when the link wraps around a border. Fortunately, I found two ways to create that neat highlight effect across multiple lines:

#### Background Image

Using a linear-gradient background image allows us to essentially move the highlight from the bottom to the top. We will use the background-position property to lower the background image to the bottom of the link and hide the overflow. It's important that we add `background-repeat: no-repeat`so that we get that neat underline affect on the inactive state.

<p class="codepen" data-height="300" data-theme-id="20092" data-default-tab="css,result" data-user="ecupaio" data-slug-hash="gJrKvP" data-preview="true" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Multi-Line Link  Highlight: Background-Image">
<span>See the Pen <a href="https://codepen.io/ecupaio/pen/gJrKvP/">
Multi-Line Link  Highlight: Background-Image</a> by Ed Cupaioli (<a href="https://codepen.io/ecupaio">@ecupaio</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

#### Inset Box-Shadow

The inset box-shadow is less code and simpler, but doesn't get the underline quite where I want it, but this allows you to have more control over the underline size. You can also add a border-bottom if you want to add to the height. We are just adding an inset box-shadow to the link with a negative Y offset, then transitioning it to the full height of the link text (1em):
<p class="codepen" data-height="300" data-theme-id="20092" data-default-tab="css,result" data-user="ecupaio" data-slug-hash="WBwKbd" data-preview="true" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Multi-Line Link  Highlight: Box-Shadow">
<span>See the Pen <a href="https://codepen.io/ecupaio/pen/WBwKbd/">
Multi-Line Link  Highlight: Box-Shadow</a> by Ed Cupaioli (<a href="https://codepen.io/ecupaio">@ecupaio</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Feel free to fork these code pens and use the source code on your own projects.