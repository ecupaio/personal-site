---
title: X Simple Ways to Improve your Website Accessibility
meta_img: ''
tags: []
footer-cta:
  title: ''
  text: ''

---
## What is accessibility and why is it important?

Accessibility in the context of websites, refers to how easily someone with disabilities is able to read and interact with your website. There are standards known as [Website Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) that serve as a reference point for how to create a website that is accessible.

I believe we have a moral imperative to all do our part in creating an equitable world for all people, but there are also legal requirements under the Americans with Disabilities Act (ADA) that can leave you open to litigation if your site is not compliant. Accessibility can also impact on SEO as shown by their [push for accessibility](https://www.google.com/accessibility/). Even if you're not motivated by a sense of justice, having an inaccessible site can seriously hurt your bottom line so let's find some easy fixes.

## Use Lighthouse to measure accessibility

Google Chrome has a great tool called [Lighthouse](https://developers.google.com/web/tools/lighthouse) for you to measure accessibility. Just right click anywhere on your page and select Inspect or select View > Developer > Developer Tools to open Developer Tools. 

![Image of Inspect feature](/images/inspect-element.jpg "Use inspect")

![Image of how to open developer tools](/images/open-dev-tools.jpg "Open Developer Tools")

Once you have Developer Tools open, select the arrows at the end of the tab list and select Lighthouse. 

![Image of how to open Lighthouse from DevTools](/images/open-lighthouse.jpg)

Now you should have the Lighthouse dashboard open. Unselect Progressive Web App unless you have a fancy react app, select either Mobile or Desktop, and then select Generate report. 

![Image of Lighthouse dashboard](/images/lighthouse.jpg)

Don't worry about choosing between Desktop or Mobile as you can generate as many reports as you desire. Just select the wee dropdown that shows the time and URL of the report. 

![](/images/new-report.jpg)

Now you should see a report with a bunch of metrics. Select the Accessibility figure to scroll immediately to that section of the report.

![](/images/report-heading.jpg)

Once you're at the Accessibility section of the report, Google will give you suggestions on what you need to fix. Just select the drop-downs for each suggestion for more details. 

![Image of accessibility report](/images/accessibility-report.jpg)

Though Google has a habit of writing suggestions fit for computer science PhDs and not the average user so I have outlined some common issues and easy fixes for you below. 

## Contrast foreground and background colors

**Error:** [Background and foreground colors do not have a sufficient contrast ratio](https://web.dev/color-contrast/)

This is a very obvious one I see all the time. Colors need to contrast for visually impaired and color blind people to properly read the text. WCAG calculates the ratio between background and foreground colors and has acceptable ratios for regular or large/bold text. Fortunately, you don't have to calculate any of this since Google's Developer Tools provides a solution. With Developer Tools open, select the wee arrow in a box icon at the top of the tools dashboard, then hover over the element.

![Image of how to select Element Inspector](/images/element-inspector.jpg)

Now you should see a wee report pop up: 

![Image of an element inspection report](/images/element-inspection.jpg)

If you get green checks, you're accessible. If not then it's time to adjust those colors. Now I know what you're thinking "Our brand colors are essential to our company and will cause a disturbance in the universe if we don't adhere to the brand standards." I'm here to say after hundreds of experiments on websites that won't happen and I have a great tool to help you out. Use the [Accessible Color Generator](https://learnui.design/tools/accessible-color-generator.html) to get as close to your color as possible within the limits of WCAG contrast ratio standards. Make sure to use colors that are for the appropriate text size and weight to pass that accessibility audit. 

## Make links descriptive

**Error:** [Links do not have descriptive text](https://web.dev/link-text/) 

Would you like to click [here](https://images.squarespace-cdn.com/content/v1/574f0b9a37013b939ab0b866/1496756132867-73OIJLCK4ERLZZ9ETFQF/image-asset.png) to know more or simply just [know more](https://images.squarespace-cdn.com/content/v1/574f0b9a37013b939ab0b866/1496756132867-73OIJLCK4ERLZZ9ETFQF/image-asset.png)?  As you can see a descriptive link text is more eye-catching and it has the added benefit of being accessible.  

## Add aria-label to icon links and form inputs without labels

Now you might have a situation where using text is not an option like an x for a close button or a twitter icon to direct users to your twitter page. Fortunately there's an HTML solution that you can use to solve this conundrum: [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute). 

    <a href="https://twitter.com/user" aria-label="My Twitter Page">
    	<i class="fab fa-twitter"></i>
    </a>

In the example above I added **aria-label="My Twitter Page"** to tell the screenreader that the icon symbolizes a link to my twitter page. You can add the same attribute to form inputs that don't have labels so that the user will know which form input they are filling out:

    <input type="text" name="fname" aria-label="First Name" placeholder="First Name" />

## Add aria-hidden to decorative elements

## 

## Create a heading class to avoid sequential ordering