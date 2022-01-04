---
title: Limit order quantity of items in Shopify
meta_img: https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
tags: []
footer-cta:
  title: ''
  text: ''

---
[Skip to the snippets](#shopify-code-section)

I ran in to this issue with [my client](https://mikunafoods.com/) the other week. They are offering a [free trial pack](https://mikunafoods.com/), but they wanted to limit it to one per customer. My first solution was to install an app, [Order Limits](https://apps.shopify.com/order-limits-minmaxify), since they needed an immediate solution and there's no point in re-inventing the wheel. The app couldn't support repeat customers ordering the limited product and, worst of all, users were still adding multiple trial packs to their cart. I tried another app, [Limit Qty Purchase](https://apps.shopify.com/purchase-limit), which claimed to be able prevent the repeat customer on top of limiting the product in the cart. The issue with this app was that it would only prevent repeat customers if they were signed in. Anonymous users could go in and ship a second trial pack to their address. It seemed that building a custom webhook was the only solution, but it would take a couple of days plus the added support of having to spin up a server and maintain it  Luckily I'm an expert in the Liquid templating language and I know a thing or two about leveraging cookie data for functions so I came up with a solution that only took a day to build and test.

<h2 id="shopify-code-section">The Code</h2>