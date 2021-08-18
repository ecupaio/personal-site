---
title: 8 UX Trends That Need to Go Away
meta_img: "/images/computer-rage.jpg"
tags: []
footer-cta:
  title: ''
  text: ''

---
I'm a bit of a rare breed in that I really care about the performance on a site after I build it. It's the whole reason I got into coding: I want to create user-friendly experiences that help organizations achieve their goals. Your conversion rate is the only stat that matters, not if someone thinks your website design really pops. So when stakeholders ask me to do things that get in the way of people converting I typically show them lots of data and studies while their eyes glaze over. Their retort is "I think people would like it." when the data says otherwise so here's a click-bait article that I kept short and sweet to avoid these pitfalls.

## Opening Links in New Tabs

Imagine you go to a website for a restaurant. While you're perusing the menu, you see a link to a review by your local paper. You click on it because you want to read this review about the restaurant you're considering dining at. You have decided that the content that you are currently viewing is no longer relevant to your interests and you have found something else you want to view. Do you see what I'm saying here? 

### Users decide what content they want to view

In the above scenario, the user wanted to read a review. They didn't want to watch the [5 minute flash animation anymore](https://theoatmeal.com/comics/restaurant_website). They were interested in other content that was linked on the website and that's by design. It's okay for users to leave your website to view external websites that you have provided access to, like social media or reviews. You wouldn't have a new tab open up when they clicked the link to the about page because you want them to keep the home page on a back burner. 

### Your Back Button is Rendered Inoperable

You might think, "Oh but how will people get back to my site?" That big ol' left arrow next to the address bar (or left carat on the bottom of the screen for mobile) tends to do a great job at that, but you've rendered it unusable because you wanted to open a link in a new tab. Plus, how many tabs do you have open now? Good luck trying to find the site you were originally on either on desktop, or worse, on mobile. 

### Your PageView Stats will be skewed

Google Analytics starts a session when you open the page and will stop it once you exit from the page. If you are opening links in new tabs, then Google doesn't know that the user has left the page since it's still open in a tab. 

### Solution: Only open new tabs if the page needs to remain loaded

An example of this scenario is the terms and conditions link on a form. If the user selects the link then their form progress will be obliterated. That's it, that's the one circumstance. Outside of that, just open them in the same window. If the user loves your site, [they will come back](https://www.digitalstrategyconsulting.com/ecommerce-and-eretailing/savvy-shoppers-make-9-visits-to-a-retailers-site-before-deciding-to-buy/12142/). 

## Video Backgrounds

Video backgrounds look really slick but cause slow loading, cost bandwidth, and are inaccessible. 

### Videos slow down page load time

Videos are big files and loading that file can take a wee bit, especially for mobile users. According to [ZMOT](https://www.thinkwithgoogle.com/marketing-strategies/search/zmot-why-it-matters-now-more-than-ever/), Google's manifesto on website performance, users will decide whether or not they want to stay on a website within 1 second. So are they gonna wait for your background video they have to view through some text or look at cute pet pics on instagram?    

### Videos take up bandwidth 

I have used YouTube and Vimeo to offset video loading to another host in the past, but if you're using Wordpress or another site-builder, you probably are directly loading your video to your server. Loading a large video file over and over for your users 

### Video backgrounds are inaccessible

[According to WCAG](https://www.w3.org/WAI/media/av/av-content/), background videos need a pause button in case users have difficulty seeing the text in front of it. Also there's no way to guarantee the text color will sufficiently  contrast against the moving and changing background colors. Not only is it a moral imperative to provide an equal experience to all users regardless of ability, you can get sued under the Americans with Disabilities Act. Trust me when I say, that background video just ain't worth it.

### Solution: Play videos on demand

You paid for that videographer, let users see your fantastic movie about your organization or product. You can use the aforementioned video hosts to embed your video or [hire me](#open-form) to make a slick play button with a light-box. 

![Example of video lightbox](/images/lightbox.jpg)

## Full-width Image Heroes

Like the above background videos, full-width Image heroes have the same pitfalls: 

* Contrast between text and background isn't guaranteed
* Page load is impacted
* Bandwidth is used to load the large files

### Solution: Make the image the focus

Also like the video, the image should be the an accompaniment to your content, not something you stick in the back. 

![Example of image with focus](/images/side-image.jpg)

## Fade-in Content

Like I mentioned before with ZMOT, users have very short attention spans so why are you hiding content from them. Most of these content fade-ins are performed on scroll so if you're quickly skimming through a website for information or wanting to click on a button, you might not see it immediately. There's no advantage to hiding content from your users, only disadvantages so show 'em what they clicked on your website for! 

### Solution: Fade in hidden content on demand and make it quick

I have all my content ready to view on load, except for my [contact form](#open-form) since it doesn't fit snuggly anywhere. Go ahead and click on the link. Whoah! That sure looked snazzy and I didn't delay you too long.  

## Full-Screen Popups

Another scenario: you see an ad for delicious, fair-trade, expertly roasted coffee beans. You are [thinking about those beans](https://knowyourmeme.com/memes/im-thinking-about-thos-beans) so you click on the ad and there they are: a 16 oz bag of Ethiopia's finest java. But just before you click on that add to cart button a full screen popup appears on your viewport asking you to signup for a newsletter. You ain't trying to read some emails about coffee! You wanna sip that fine bean juice. You can't even exit out of it. You have to find some small hidden text that says "I hate emails and every copy writer making them and their mothers." You're so worked up you second guess your need for caffeine and leave the site. 

### Never ever ever ever prevent the user from completing a conversion

Why would you hide your primary conversion behind a secondary ask? If you pay my hourly rate, I will do it for you but I won't like it. No friction should ever come in between a user and completing a conversion unless it is legally required (eg age gate, terms agreement, etc). The quicker they can convert, the more likely they are to convert. Just stay out of the way and get their email signup after they bought something because they'll need to give their email for a receipt anyway. 

### Solution: Use a top bar

Your newsletter is still important. I get it, but there's a better way to make announcements for users. The top bar is great because it will be at a point of prominence and fixed to follow the user as they scroll, but it won't prevent them from smashing that buy button. 

![](/images/topbar-ex.jpg)

## Scroll Hints

What did you do to get to this section? You scrolled down here didn't ya? Did you need a reminder to scroll when you were up at the top? Probably not, unless you are a 19th century time traveller discovering the internet. If you are a time traveller, welcome to the 21st century: we've learned nothing just go back. 

### Users already know to scroll

If you don't need a wee animation to know to scroll, your users don't either. Always think "how would I use this site", not "I think people would like". The other case I hear for these wiggly boys is "some tech illiterate people may not know to scroll". As the defacto tech support for every person I know over the age of 40, let me tell you all of them know to scroll. Hell, our imaginary time traveller would figure it out if left to their devices. 

### Solution: Only indicate scrolling is possible when it is not immediately obvious

So the only scenario, I have run into this is where there is scrollable content embedded within a page. In my portfolio, you can see this. I took full height screenshots of my websites, but cut them off at 520px so you can easily navigate to other screenshots and see the details of each project. I have seen other examples of when websites embed terms and need users to scroll all the way to the end before agreeing. These scenarios are rare and it's best you leave the shivering chevron out. 

![Example of scroll hint](/images/scroll-hint.jpg)

## Scroll Jacking

Surfing the web is fun, but have you ever tried surfing the web [on weeeeed](https://www.youtube.com/watch?v=j0B7bzP-Gog&ab_channel=bcmca). When you scroll on a mouse-wheel, trackpad, or touchscreen you expect to navigate with the save velocity as you swiped, but CSS3 allowed developers to add a [chopped and screwed property to scrolling](https://thinkbear.net/). Worse yet some developers use [javascript to disable the scroll](https://www.bertani.net/) all together and make scrolls just go from one section to the next. 

### Let users go at their own speed

As I mentioned in the last no-no, scrolling is the default action users will take when they visit a website so don't augment that behavior for them. If a user is trying to scroll to a buy button, why make it hard? Or worse, why give them the potential to miss their target? 

### Solution: Don't jack the scroll

There's no use case for changing the default behavior of scrolling. It's an awful experience and will cost you lots of developer hours to achieve the effect. 

## Social Media Feeds

I have built custom feeds for Twitter and Instagram before that pulled in content from their respective API (raw data from the sites' databases), but they're all broken now. Why? Because the APIs were sunset and they sunset the APIs because Twitter and Instagram wanted users viewing their content on their site. 

### Social media sites want users on their sites to show ads to

Now some plugin authors have found some non-public backchannels to get that data and I myself have used those backchannels but Instagram is smart and started blocking IPs and disabling access. These plugins will eventually crash and you'll be left with a bunch of [blank spots where images are supposed to be](https://welcome.arcadia.com/powermove). 

### Solution: Follow buttons and links to profiles

[Instagram](https://developers.facebook.com/docs/instagram/embed-button/), [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/follow-button/overview#:\~:text=The%20Follow%20button%20is%20a,into%20our%20recognizable%20Follow%20button.), and [Facebook](https://developers.facebook.com/docs/plugins/like-button/) all offer follow buttons and post embeds that you can add to your website. If the goal is to get users to follow your accounts then this is the perfect solution. If you just want users to view your social media content, then just link them out with an icon and let twitter or instagram deal with serving the images. 