---
title: Upgrade your Wordpress Site with Jekyll
meta_img: https://repository-images.githubusercontent.com/65252/f2b7c780-70b6-11e9-85d2-f4bda8708a2d
tags:
- Jekyll
- Wordpress
footer-cta:
  title: Ready to make the switch?
  text: 'Let''s talk about your goals and make your website work for you. '

---
You are part of or lead an organization or business, you have a website, and you just want to be able to edit it periodically and never have to worry about anything else. I get it, many moons ago I was on the other side of the javascript mines. Your website enables you to reach people in multiple ways more efficient than spinning a sign on the side of the road. So why are you worrying about about server fees, core updates, and a myriad of plugins duct-taped together to make your site barely function. It's time to ditch that Wordpress site and embrace the future with [Jekyll](https://jekyllrb.com/).

## What is Jekyll?

[Jekyll](https://jekyllrb.com/) is part of the [JAM stack](https://jamstack.org/) movement to create faster, more secure websites. It's what I made this website with and countless other websites with. It's relatively simple to develop on, free to host, and comes with several options for content management. I've spent 4 years developing an optimized template ready to launch sites in a fraction of the time of any of the [LAMP stack](https://wpshout.com/wordpress-lamp-introduction-wordpress-infrastructure/) sites like Wordpress or Drupal with no hosting fees and no maintenance. My current record for an e-commerce site is 3 days and I was able to create a landing page site in 4 hours once. I should mention here that I like most developers charge hourly.

## Wordpress requires constant updates

Wordpress generates by making pages based on PHP functions in your templates making calls to a SQL database in order to build the pages that you see. The SQL database includes your content, but it also includes your passwords and credit card info if you have any paid plugins or use e-commerce that hackers try to access by interrupting the calls between your templates and database. In non-code speak, this means that the very nature of how Wordpress works is never going to be fully secure. Fortunately, Wordpress is vigilant about these vulnerabilities, but that means you're going to need to keep up with those core updates that your hosting service reminds you about. To add another layer of complication, all of the plugins you have installed are independently maintained so if they stopped maintaining the plugin to be compatible with the newest Wordpress core version, you're SOL. Some of you have probably seen this image:

![Wordpress database error as a result of a plugin error](/images/wp-err.jpg)

The great thing about Jekyll is that it doesn't need updates or plugins to function. It's static which means that all your pages are made server side and secure from hackers. No plugins or security updates are necessary as I will code the site bespoke to your exact specifications instead of relying on someone else's code that they might forget about.

## Wordpress is slow

[Run a lighthouse test](https://developers.google.com/web/tools/lighthouse#devtools) on your Wordpress site. Under the Performance suggestions, select Eliminate render-blocking resources and you'll see something like this:

![render-blocking resources suggestion indicating Wordpress is the cause](/images/screen-shot-2021-12-03-at-11-12-00-am.png)

Wordpress is such a common culprit in slowing down load times, Google has a specific error message for them and took care to include their branding. Your Wordpress website functions with a menagerie of plugins that all require their own code (CSS and JS) to run which will load on every single page on your site regardless of if they're used or not. Also to note, Google factors in your mobile site speed in page rankings so it's very important that your site is optimized to be seen by users.

### Client-side vs Server-side

Even if you clean up your plugins, the other culprit of poor performance is the very nature of how Wordpress renders. As I mentioned earlier, Wordpress builds the pages you see by using templates to communicate with a backend database. This process occurs client-side which means every time a user views your homepage, the browser builds the page they see. This process of building the page on demand can be fast on desktop with a reliable connection, it can be quite slow for mobile users on data. Jekyll builds server-side which means when I make this blog post, my host builds the page and saves a static copy of the rendered page that can be viewed immediately. This process is better for the user because they don't have to wait for the page to build, it's better for me since the page builds within 1 second, and it's better for everyone since the static copy is un-hackable.

## Wordpress is expensive to host and requires hands-on maintenance

Introductory offers on popular hosts seem cheap until that first month passes and you notice you need more storage. That $9 a month will turn into $25, then $50, and then $100 very quick. Also you have to maintain everything on your in that you're responsible for keeping up with your core updates and plugin updates. If you're unfortunate to have your site go down, you'll be met with shoulder shrugs since most support staff is there to upsell you or remind you to update your core. I know this all too well because I've been the one to have to deal with outages and poor performance.

Jekyll is free to host with Github Pages. For people not familiar with Github it is the world's largest code repository. Every developer job has a slot in the application form for applicants to paste in their Github profile. It's a pretty big deal and one of Github's principal engineers helped develop Jekyll so they made their platform a free and reliable host for it. Plus, if I mess something up and the page isn't able to build properly, Github Pages will simply not update the site and send me a notification that it wasn't able to build because of errors. Users will still see the same old site instead of a database error message. I can then read the error logs and see what the exact issue is, fix it, and be on my way.

## Wordpress errors are difficult to diagnose

Speaking of error logs, Wordpress doesn't really give detailed error logs if something goes wrong which means much more developer hours for me spent investigating the root of the cause. Since Wordpress changes to plugin settings or content are logged into an encrypted database, I have to guess what the issue is by interrogating everyone that touched the site.

A really helpful feature of Jekyll is that every single change to the site is recorded via a commit within Github and saved as a version. I can use these versions to see exactly what happened and diagnose an error immediately. Here's how this works:

![screenshot of a commit in github in which a content editor made changes to a link ](/images/screen-shot-2021-12-03-at-11-51-19-am.png)

In this case, an editor logged into to Forestry.io, the CMS I use for my Jekyll sites, and edited a link on the [home page](https://www.republicrestoratives.com/). I can see the exact letters my content editor changed so if they used some sort of forbidden character and it caused the site to have a build failure, an error that will not effect the site, I could go in and see exactly what happened after receiving an automated message from Github. You don't even have to email me, I'll know and get to work on it immediately with full knowledge of what changes were made.

I should also take this time to mention that when I make a website, every single piece of content will be editable and Frequently asked questions

### If Jekyll is so good, why is Wordpress so popular and I've never heard of it?

Simply explained: you can build a Wordpress site without writing a single line or code and you have to know how to code when [setting up a Jekyll site](/blog/?tag=Jekyll). There's lots of drag and drop themes like Elementor and Divi where you can configure an entire site without knowing what a div tag and a class declaration are, which is a plus if you want to DIY. Unfortunately, lots of cut-rate developers take advantage of these templates and their clients, and then I have to fix these sites later because they don't include any guidance on how it all works.

### I want to manage all of my content, will I still be able to do that with Jekyll?

Absolutely. In fact, you'll be able to manage your content so much better with my Jekyll build. I customize [Forestry.io](https://forestry.io/), a free content management system, to your exact content structure by making all content editable and I include a visual guide and walkthrough as part of [my development services](/service/web-development/). Good luck navigating the Wordpress dashboard trying to update the copyright year at the bottom of your site. You'll be lucky if it isn't hardcoded into the PHP templates.

### What about my plugins?

As I mentioned before, Wordpress is great for DIY site builders with little to no knowledge about coding. As of this post, I have been coding websites and frontend tools for 8 years so the social share and contact form on this page were made by me. The future is static and every software provider gives out tools for developers like me to connect to their services or at least a secure endpoint for me to send data to. In fact, the contact form on this site was made as a [frontend to Google Forms service](/blog/google-form-front-end/). My goal for building your website is for you to not worry about tech at all, only the goals for your organization. Let me handle the facebook link shares and e-commerce store. You provide me with the information and content and I'll get you there.