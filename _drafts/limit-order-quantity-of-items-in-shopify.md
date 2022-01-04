---
title: Limit order quantity of items in Shopify
meta_img: https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
tags: []
footer-cta:
  title: 'Need help with your Shopify store? '
  text: 'Hit me up. I clearly know my way around. '

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

Before we add the script to check for the cookies and the product present in the cart, we need to add the cookie to the user's browser. This solution won't work if the user browses incognito or switches devices/browsers when shopping a second time. The only way to prevent this behavior for sure will be to create a webhook that pings the customer data and validates that this is their first and only trial pack. 

Navigate to the Checkout settings in your admin dashboard: Settings > Checkout or mystore.myshopify.com/admin/settings/checkout

Scroll to the [Order status page section](https://help.shopify.com/en/manual/orders/status-tracking) and paste the following code into the text box: 

    <script>
    var hasTrialPack;
    {% assign trial-pack = checkout.line_items | where: "product_id", XXXXXXXX %}
    {% if trial-pack.size == 0 %}
    hasTrialPack = false;
    {% else %} 
	hasTrialPack =  true;
    {% endif %}
    var hasTrialPack = {{ hasTrialPack }};
    if (hasTrialPack == true ) {
      //change this to your product name
      document.cookie = "has_product_name=true;";  
    }
    </script>

The code will be on your thank you page when the customer has completed their order and they get the details about shipping and what not.

First, we'll create the hasTrialPack variable. We are going to assign it a true or false value in order to determine if the cookie needs to be added. 

On line 3, I create an array and filter again, but I don't need to pull out an object. We are also using the [checkout object](https://shopify.dev/api/liquid/objects/checkout), but still using the [line\_items](https://shopify.dev/api/liquid/objects/line_item) object in order to scan the product\_id property for the trial pack. 

Now that I have an array only made of products that match the product ID, I can see if the array is populated. On line 4, I run a [liquid conditional](https://shopify.github.io/liquid/basics/truthy-and-falsy/) that checks for how many objects are in the array: [size](https://shopify.github.io/liquid/filters/size/). If there's no objects in the array that is only trial packs, then  

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

In this formula we will check if there are trial packs