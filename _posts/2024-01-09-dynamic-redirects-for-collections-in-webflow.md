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
I had a situation where I wanted to create a [collection](https://university.webflow.com/lesson/structure-and-style-collection-pages?topics=cms-dynamic-content)&nbsp;where the collection content would be displayed on a page in the form of items in a [collection list](https://university.webflow.com/lesson/collection-list?topics=cms-dynamic-content), but I didn't wan't them to be displayed as pages since they linked to external sites. Since these collection pages would be published as pages, I wanted to completely rule out the scenario of a user stumbling on this blank page so I wanted the page to just be a [301 redirect](https://webflow.com/blog/301-redirects) to the external link.&nbsp; Furthermore, I did not want these collection pages to show up in search results so I will need to hide this collection directory from search engine crawlers as well as my internal site search.&nbsp;&nbsp;

In order to make these instructions evergreen, I'm going to link to Webflow's official documentation in case the UI paths and icons change. Plus, Webflow has really great documentation with all the images and videos necessary for you to complete the steps I listed below.&nbsp;

## Step 1: Add external link field to collection

In order to have a dynamic redirect destination based on the collection page the user accesses, we need to add a field within the collection. We will use the [Link](https://university.webflow.com/lesson/link-field?topics=cms-dynamic-content) field as it will enforce proper URL format for our content editors.&nbsp;

1\. Access your&nbsp;[collection settings](https://university.webflow.com/lesson/webflow-collections-overview?topics=cms-dynamic-content#how-to-edit-a-collection)&nbsp;for your target collection.&nbsp;

2\. Now that you're in the target collection settings, select [Add New Field](https://university.webflow.com/lesson/use-collection-fields-to-build-custom-collections?topics=cms-dynamic-content#how-to-use-collection-fields) and then select [Link](https://university.webflow.com/lesson/link-field?topics=cms-dynamic-content).&nbsp;

3\. Add a label and then select Save Field.&nbsp;

4\.&nbsp;[Edit your collection pages](https://university.webflow.com/lesson/modify-a-collection?topics=cms-dynamic-content#how-to-edit-individual-collection-items)&nbsp;with the links you want redirect users to.&nbsp;

In my case, I labeled my field Tool Link. Remember your label for this link field as you will use it in step 2.&nbsp;

## Step 2: Add redirect tag to collection template

Now that you have a link field in your collection, it's time to add the redirect tag to our collection template.&nbsp;

1\. Access the [collection page settings](https://university.webflow.com/lesson/structure-and-style-collection-pages?topics=cms-dynamic-content#collection-page-settings)&nbsp; for your target collection

2\. Scroll to the Custom Code section and enter the following script in the Inside &lt;head&gt; tag section:

`<meta http-equiv="refresh" content="0; URL=[YOUR LINK FIELD]" />`

3\. Next you will [add your link field from your collection](https://university.webflow.com/lesson/use-collection-fields-in-custom-code-embeds?topics=cms-dynamic-content) in the \[YOUR LINK FIELD\] placeholder I added:

![](/images/screenshot-2024-01-09-at-4-09-11-pm.png){: width="640" height="153"}

4\. Hit the Save button and you're set.&nbsp;

## Step 3: Exclude collection from site search

While still in the Collection settings, follow the directions for [Excluding Collection pages](https://university.webflow.com/lesson/site-search#excluding-collection-pages).

## Step 4:&nbsp; Prevent crawling of collection path

1\. First, get your collection path from the [General panel](https://university.webflow.com/lesson/structure-and-style-collection-pages?topics=cms-dynamic-content#collection-page-settings) in the collection settings. They will have a link displayed that will be in this format:&nbsp;

www.yoursite.com/\[COLLECTION PATH\]/item-slug

2\. Now that you have your path, access the [site settings and find the robots.txt field](https://university.webflow.com/lesson/disable-search-engine-indexing?topics=site-settings#how-to-enable-or-disable-indexing-of-site-pages).&nbsp;

3\. Within that field you will add the following code:&nbsp;

`Disallow: /[YOUR COLLECTION PATH]/*`

In my case, I wrote Disallow: /tools/\* since /tools is my collection path and I added the extra /\* as a catch all to tell Google and the rest to ignore any page&nbsp;