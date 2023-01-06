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

I will use this maginificent website I created in 5 minutes to serve as our example:&nbsp;

&nbsp;

## Hide your overlay from tabbing

First step is to add a few properties that will tell screen readers to not read this quite yet:&nbsp;

aria-hiden&nbsp;