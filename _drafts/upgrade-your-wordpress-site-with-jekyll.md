---
title: Upgrade your Wordpress Site with Jekyll
meta_img: ''
tags: []
footer-cta:
  title: ''
  text: ''

---
You are part of or lead an organization or business, you have a website, and you just want to be able to edit it periodically and never have to worry about anything else. I get it, many moons ago I was on the other side of the javascript mines. Your website enables you to reach people in multiple ways more efficient than spinning a sign on the side of the road. So why are you worrying about about server fees, core updates, and a myriad of plugins duct-taped together to make your site barely function. It's time to ditch that Wordpress site and embrace the future with [Jekyll](https://jekyllrb.com/).

## What is Jekyll?

[Jekyll](https://jekyllrb.com/) is part of the [JAMStack](https://jamstack.org/) movement to create faster, more secure websites. It's what I made this website with and countless other websites with. It's relatively simple to develop on, free to host, and comes with several options for content management. I've spent 4 years developing an optimized template ready to launch sites in a fraction of the time of any of the LAMP stack sites like Wordpress or Drupal with no hosting fees and no maintenance. My current record for an e-commerce site is 3 days and I was able to create a landing page site in 4 hours once. I should mention here that I like most developers charge hourly.

## Wordpress requires constant updates

Wordpress generates by making pages based on PHP functions in your templates making calls to a SQL database in order to build the pages that you see. The SQL database includes your content, but it also includes your passwords and credit card info if you have any paid plugins or use e-commerce that hackers try to access by interrupting the calls between your templates and database. In non-code speak, this means that the very nature of how Wordpress works is never going to be fully secure. Fortunately, Wordpress is vigilant about these vulnerabilities, but that means you're going to need to keep up with those core updates that your hosting service reminds you about. To add another layer of complication, all of the plugins you have installed are independently maintained so if they stopped maintaining the plugin to be compatible with the newest Wordpress core version, you're SOL. Some of you have probably seen this image:

![Wordpress database error as a result of a plugin error](/images/wp-err.jpg)

The great thing about Jekyll is that it doesn't need updates or plugins to function. It's static which means that all your pages are made server side and un-hackable. No plugins are necessary as I will code the site bespoke to your exact specifications instead of relying on someone else's code that they might forget about.

## Wordpress is slow

[Run a lighthouse test](https://developers.google.com/web/tools/lighthouse#devtools) on your Wordpress site. Under the Performance suggestions, select Eliminate render-blocking resources and you'll see something like this: 

![render-blocking resources suggestion indicating Wordpress is the cause](/images/screen-shot-2021-12-03-at-11-12-00-am.png)

Wordpress is such a common culprit in slowing down load times, Google has a specific error message for them and took care to include their branding. Your Wordpress website functions with a menagerie of plugins that all require their own code (CSS and JS) to run which will load on every single page on your site regardless of if they're used or not. 

### Client-side vs Server-side

Even if you clean up your plugins, the other culprit of poor performance is the very nature of how Wordpress renders. As I mentioned earlier, Wordpress builds the pages you see by using templates to communicate with a backend database. This process occurs client-side which means every time a user views your homepage, the browser builds the page they see. This process of building the page on demand can be fast on desktop with a reliable connection, it can be quite slow for mobile users on data. Jekyll builds server-side which means when I make this blog post, my host builds the page and saves a static copy of the rendered page that can be viewed immediately. This process is better for the user because they don't have to wait for the page to build, it's better for me since the page builds within 1 second, and it's better for everyone since the static copy is un-hackable. 

### Wordpress is expensive to host