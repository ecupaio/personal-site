---
title: Do's and Don'ts of Data Display
meta_img: https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
tags: []
footer-cta:
  title: ''
  text: ''

---
Seeing all the charting and graphing fails on [r/dataisugly](https://www.reddit.com/r/dataisugly/) is always worth a chuckle, but I consistently see websites with some confusing, inaccessible, or just plain bad methods of displaying data to the user. In order to be successful in displaying information to a user, you first need to determine what is the purpose of displaying the information, in that what do you want the user to do after seeing the information. Follow these tips below to effectively communicate with users in order to increase your conversions.

## DON'T: Maps

[My wife is a scientist](https://jessicasandersphd.com/). Specifically she is an urban forestry expert that uses maps to display tree canopy cover across cities. This is an effective use of maps, your distribution map of store locations is not. Think about that you are trying to get the user to do: Find a store near them so they can visit your business. The user lives in Los Angeles, so why are you showing them stores in Sacramento? Furthermore, Google Maps is no longer offering a free tier of it's API that can support multiple locations so you'll need to pay for the service plus the developer hours to set it up, which is all moot because you aren't effectively helping the customer find a store near them.

Another bad example of maps I see and get asked to make are distribution maps, in which states are highlighted on a contiguous US map (sorry AK and HI, I know you exist but most comms people forget). These provide 0 value to the user and are much harder to read at a glance as opposed to text and the issue that a US map will get squeezed down on mobile to the point that users will need to squint if they're on the Northeastern Seaboard. 

# DO: List of Locations

Two ways to go with lists: On-demand geolocation or a static list of locations grouped by region. The former will cost you and the latter won't. Either way, a list of locations will help them narrow down the one that is closest to them. Users know where they are in the world, so selecting a location will not be hard unless they are buried alive in a coffin and they need to find a local excavation service to dig them out.

### On-demand geolocation

[Find my store](https://www.target.com/store-locator/find-stores/95817) is a more colloquial way to say this. The user will enter their address or allow their browser to use geolocation services to populate a list of locations in descending order from closest to furthest away. This will require the use of a geocoding service like Google Geocoding service API and a good (pricey) web developer to set it up. If you have many locations over several states than this is a good solution. Also, if you're a national corporation, you don't really need to worry about cost so let's talk about what works for the little guy.

### Static list of locations

As I mentioned earlier, users are aware of their physical location barring a major tragedy so just provide them with the details and let them find you. We created a [list of locations](https://goldriverdistillery.com/where-to-buy) and grouped them by region for a client trying to communicate to users where they could buy their products. It's just text, so the client can update the information easily and for free. If I were to optimize this page, I would add content input fields that would automatically populate google maps links to each of the address like [I did for DCGFFL](https://dcgffl.org/events/recreation-league-playoffs-and-afterparty/), but the client wanted to keep it simple and just paste in a word doc. 

### Free Embedded Map

If you still want to view your empire and weep á la Alexander the Great, you can use [Google My Maps](https://mymaps.google.com/) to create a map and embed it on your website. However, users will not be able to find the closest point to them. I made a [test map](https://www.google.com/maps/d/u/0/viewer?mid=1TeeHoHwf37HRbaExJOZRcCuNy1N9K-Kg&ll=38.567868306175214%2C-121.44627360000001&z=14) so you can try it on for size. 

## DON'T: Tables

Although HTML and CSS have multiple methods for displaying data in organized columns, I still see HTML tables like it's 1996.  Tables are not mobile optimized, thus users on their phones will not be able to read your product feature comparison that reads like a ledger. Even if you made your table mobile friendly, it's a hard way to digest information at a glance. Remember, your users don't have to read every word on your page, but you really want them to so make it engaging and simple. 

## DO: Stackable Columns

Columns can go side by side on desktop so users can compare bullet points of information at a glance, then stack on mobile so they can read in the vertical format they're used to. Columns also give you an opportunity to highlight options and insert calls to action (CTAs) for each piece of data you're presenting to the user. 

## DON'T: Number count-up animation

The reason should't add one of those [number animations](https://inorganik.github.io/countUp.js/) is, drumroll please... (wait another 2 seconds): you shouldn't obscure information you want your users to read in order to convert them. See how annoying that was? Don't obfuscate information you really want users to see at a glance. They aren't obligated to sit there and wait while a bunch of numbers flicker. If you're boasting 1.2 million users on your platform, let them know immediately while they're scrolling through the page so you can get them to read that amazing data. 

## DO: Show the numbers

Just remove the animation. There's no point to it. It doesn't catch their eye and they can't decipher digits flashing at fractions of a second. 