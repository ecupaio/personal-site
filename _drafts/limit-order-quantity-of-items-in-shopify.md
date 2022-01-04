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

### Limit products in cart

My first goal was to create a conditional that would disable the order button and display a message. Here's the code, with an explainer after:

_cart-sidebar.liquid_

    {% assign trial-pack = cart.items | where: "product_id", XXXXXXXXXX | first %}
    {% if trial-pack.quantity > 1 %}
      {% assign btn-text = "order not valid" %}
      {% assign btn-class = "disabled" %}
      {% assign err-viz = "" %}
    {% else %}
      {% assign btn-text = "check out" %}
      {% assign btn-class = "" %}
      {% assign err-viz = "hidden" %}
    {% endif %}
    <input class="mig-cart__cta {{ btn-class}}" type="submit" {% unless has_subscriptions %}name="checkout"{% endunless %} value="{{ btn-text }}" >
    <div class="trial-pack-err {{ err-viz }}">Customers are limited to only 1 trial pack. Reduce the trial pack quantity to 1 in your cart or remove the trial pack if previously purchased to proceed with your order.</div>

In line 1, I create a variable for an array of all items in the cart and filter for the specific ID of the product. Although Shopify lists an id and a product_id product_id is the only unique identifier since id will list all variants. Also, stay away from SKU since fulfillment uses SKU for shipping estimates and they can use it for multiple products. You can technically use a loop here, but loops impact performance and it's cleaner and easier to just pluck the object out of the array we want. Here's a breakdown of all the liquid methods and objects in case you don't wanna read all that:

* [assign](https://shopify.github.io/liquid/tags/variable/) creates the variable that I will use in the conditional
* [cart.items](https://shopify.dev/api/liquid/objects/cart#cart-items) is an array of all of the items in the cart.
* where is a filter I use to reduce the array to only objects that contain the product with a specific [product_id](https://shopify.dev/api/liquid/objects/line_item#line_item-product_id)
  * You can get the product ID from the product's URL in the Shopify admin: mystore.shopify.com/admin/products/PRODUCT-ID, or just run a loop and get the id from there.
* [first](https://shopify.github.io/liquid/filters/first/) plucks the first item out of the array so we can treat it as an object get the quantity from the product.

In lines 2-10, I create a conditional to define variables that I use to affect the display of the button and error message. I use the [quantity](https://shopify.dev/api/liquid/objects/line_item#line_item-quantity) object to determine if there is more than one trial pack according to its [line_item data](https://shopify.dev/api/liquid/objects/line_item). If there are no trial packs in the cart_items array then it will return empty and go to the else condition. Here's a breakdown of the variables:

* btn-text is the text of the button.
* btn-class adds or omits a class that will disable the button with CSS and add opacity to it.
* err-viz shows or hides the error message based on a CSS class affecting the display.

Though I could just conditionally add the HTML for the button and error message, I'll need the elements present in order to modify their display based on the cookies

### Limit repeat purchase

_cart-sidebar.liquid_

    <script>
        var trialPackQty; 
        {% if trial-pack.quantity %}
        trialPackQty = {{ trial-pack.quantity }};
        {% else %}
        trialPackQty = 0;
        {% endif %} 
        if (document.cookie.indexOf('has_trial_pack=true') > -1 && trialPackQty > 0) {
            $('.mig-cart__cta').addClass('disabled').val('order not valid');
            $('.trial-pack-err').removeClass('hidden');
        } 
    </script>

Now that customers can't add multiple trial packs to the cart, we need to prevent repeat customers from purchasing a trial pack twice. I added the above script at the bottom of the cart-sidebar.liquid code. Though it's better to add script at the bottom of the body tag, I only want this script to fire on pages with the cart-sidebar component so this method is most convenient. 