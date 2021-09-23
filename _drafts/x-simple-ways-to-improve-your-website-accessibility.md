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

Once you're at the Acecessibility section report

## Check Contrast Ratios

Make links descriptive.

## Add aria-hidden to decorative elements

## Add aria-label to icon links and form inputs

## Create a heading class to avoid sequential ordering