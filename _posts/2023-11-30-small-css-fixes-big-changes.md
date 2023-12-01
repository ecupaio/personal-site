---
_schema: default
title: Small CSS fixes, Big Changes
date: 2023-11-30 15:24:54 -0800
meta_img: ''
tags:
  - css
footer-cta:
  title: You can totally copy this code!
  text: Free to contact me if you still need some help.
published: false
---
I went to unsubscribe from the State of California's Employment Development Department's (EDD) newsletter and I was greeted with this mess:&nbsp;

![](/images/screen-shot-2023-11-30-at-2-41-13-pm.png){: width="1250" height="1140"}

* The line-spacing in the top text section is way too tight
* The text section is left aligned while the rest of the content is centered
* There's way too much space between the success message and the other section
* The CTA on the social media row is not the same font as the rest of the content.&nbsp;

Good news is that this is entirely fixable with a few CSS touch ups and I'll explain how below.&nbsp;

## Explanation my methods

For some reason, all of the content is in a table and all of the CSS is inlined exactly the same way you would create an HTML email.&nbsp; Perhaps the service they use for email subscription management just used an email template&nbsp; to create this page. I just worked within the existing framework so perhaps a certain EDD employee can copy my code. I would typically use semantic elements and only the most advanced CSS trickery to create a perfect page, but when working with other people's code, I find it's better to work within their framework instead of imposing my own styles and standards on someone else. Plus HTML email has limitations on what you can and can't use so perhaps this is generated as an email elsewhere so I want to keep within the [acceptable CSS and HTML properties and elements](https://www.campaignmonitor.com/css/)&nbsp;to avoid any compatibility issues. &nbsp;&nbsp;

Feel free to copy this code. First one is free but then you gotta pay for the next.

&lt;iframe src="https://codesandbox.io/embed/d2fqxt?view=preview&module=%2Findex.html"<br>&nbsp; &nbsp; &nbsp;style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"<br>&nbsp; &nbsp; &nbsp;title="EDD Email Unsubscribe Page"<br>&nbsp; &nbsp; &nbsp;allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"<br>&nbsp; &nbsp; &nbsp;sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"<br>&nbsp; &nbsp;&gt;&lt;/iframe&gt;



## Top text section

First let's address the top text-section. There was 50px of left padding added to this section so I removed it and made it 5px like the rest of the section. I then added text-align: center to the section so it would align with the rest of the page.&nbsp;

Next, it was time to address all that crowded text. I added a margin, a CSS property not forbidden for HTML email but very okay for websites, to the heading to give some breathing room between the title and text. I would typically make this page title an H1 element and add a margin, but as I mentioned in the previous section, I want to keep everything kosher with the vengeful Outlook gods. I just added two [br](https://www.w3schools.com/tags/tag_br.asp) elements between the title and body text elements to create some space.&nbsp;

The reason the body text looked so crowded was because the line-height was&nbsp;