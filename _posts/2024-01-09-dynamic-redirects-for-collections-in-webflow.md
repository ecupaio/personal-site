---
_schema: default
title: Dynamic Redirects for Collections in Webflow
date: 2024-01-09 15:12:11 -0800
meta_img: ''
tags:
  - webflow
footer-cta:
  title: ''
  text: ''
published: false
---
I had a situation where I wanted to create a [collection](https://university.webflow.com/lesson/structure-and-style-collection-pages?topics=cms-dynamic-content)&nbsp;where the collection content would be displayed on a page in the form of items in a [collection list](https://university.webflow.com/lesson/collection-list?topics=cms-dynamic-content), but I didn't wan't them to be displayed as pages since they linked to external sites. Since these collection pages would be published as pages, I wanted to completely rule out the scenario of a user stumbling on this blank page so I wanted the page to just be a [301 redirect](https://webflow.com/blog/301-redirects) to the external link.&nbsp; Furthermore, I did not want these collection pages to show up in search results.&nbsp;

In order to make these instructions evergreen, I'm going to link to Webflow's official documentation in case the paths and icons change.&nbsp;

## Step 1: Add external link field to collection

1. Access your&nbsp;[collection settings](https://university.webflow.com/lesson/modify-a-collection?topics=cms-dynamic-content)&nbsp;for your target collection.&nbsp;
2. Now that you're in the target collection settings, select [Add New Field](https://university.webflow.com/lesson/use-collection-fields-to-build-custom-collections?topics=cms-dynamic-content#how-to-use-collection-fields) and then select [Link](https://university.webflow.com/lesson/link-field?topics=cms-dynamic-content).&nbsp;
3. Add a label and then select Save Field.&nbsp;

In my case, I labeled my field Tool Link. Remember your label for this link field as you will use it in step 2.&nbsp;

## Step 2: Add redirect tag to collection template