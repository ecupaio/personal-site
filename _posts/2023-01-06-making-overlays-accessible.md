---
title: Making Overlays Accessible
permalink:
meta_img: https://images.unsplash.com/photo-1574887427561-d3d5d58c9273
tags:
  - Accessibility
  - Web Development
---
[Tab Order](https://web.dev/keyboard-access/)&nbsp;is an accessibility standard that Google Lighthouse won't automatically detect and they suggest for you to check for it manually in their updated reports:&nbsp;

![](/uploads/screen-shot-2023-01-06-at-2-43-51-pm.png){: width="720" height="146"}

If you're unfamiliar with this accessibility standard, it's there for people who are unable to use a mouse when browsing the web. &nbsp;To see if your tab order will make sense to a user, download the [Screen Reader extension](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) and tab through your page. You will hear the screen reader say what element it's focused on along with a highlight around the object. Chrome has a [great demo](https://youtu.be/cOmehxAU_4s?t=205) of this that I highly recommend watching.&nbsp;

You may notice while tabbing through your page, that you don't see the selection, but your screenreader will detect an overlay you have placed at the top of the DOM order. You will need to do two things in order to make your tab order make sense to a screen reader:&nbsp;

* Hide your overlay from tabbing
* Dynamically focus on your overlay&nbsp;

I will use this magnificent website I created in 5 minutes to serve as our example:&nbsp;

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="KKBNExG" data-user="ecupaio" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/ecupaio/pen/KKBNExG">
  Accessible Overlay - Original</a> by Ed Cupaioli (<a href="https://codepen.io/ecupaio">@ecupaio</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Hide your overlay from tabbing

First step is to add the [visibility CSS property](https://www.w3schools.com/cssref/pr_class_visibility.php) with a value of hidden which will tell screen readers to not read this while it's hidden.&nbsp;

Next, you need to add the [aria-modal property](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) with a value of true to the overlay element so that screen readers know it's outside of the page flow when you focus on it.&nbsp;

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="eYjBoYO" data-user="ecupaio" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/ecupaio/pen/eYjBoYO">
  Accessible Overlay - Step 1</a> by Ed Cupaioli (<a href="https://codepen.io/ecupaio">@ecupaio</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

You should now be able to tab from your nav bar down to the content seamlessly without getting tripped up on the overlay.&nbsp;

**Note:&nbsp;**You may see some documentation that says to use the aria-hidden property and set it to true. This will achieve in hiding your overlay, but it will not make it visible on click. Once it's set to hidden, you cannot dynamically put it back into view of the tab order. It's a similar case with setting the tab-index property to -1. Again it will set it on init and the screen reader will not detect it when you dynamically change it. The visibility property can be set dynamically and the screen reader will recognize it.&nbsp;

## Dynamically focus on your overlay&nbsp;

You're not done yet\! When users trigger their overlay, they need to know that the overlay is opened. You will need to trigger a focus event on a focusable element: a button or an input. I focus on the close button since it will allow the user to back out of the overlay if they don't wish to view the overlay and read the rest of the site. Also it's the first focusable element at the top of the overlay.&nbsp;

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="YzjpMPQ" data-user="ecupaio" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/ecupaio/pen/YzjpMPQ">
  Accessible Overlay - Step 2</a> by Ed Cupaioli (<a href="https://codepen.io/ecupaio">@ecupaio</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Now you're all set\!&nbsp;

&nbsp;