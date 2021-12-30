---
title: Do's and Don'ts of Data Display
meta_img: https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
tags: []
footer-cta:
  title: ''
  text: ''

---
Seeing all the charting and graphing fails on [r/dataisugly](https://www.reddit.com/r/dataisugly/) is always worth a chuckle, but I consistently see websites with some confusing, inaccessible, or just plain bad methods of displaying data to the user. In order to be successful in displaying information to a user, you first need to determine what is the purpose of displaying the information, in that what do you want the user to do after seeing the information. Follow these tips below to effectively communicate with users in order to increase your conversions. 

## DON'T: Embedded Maps

[My wife is a scientist](https://jessicasandersphd.com/). Specifically she is an urban forestry expert that uses maps to display tree canopy cover across cities. This is an effective use of maps, your distribution map of store locations is not. Think about that you are trying to get the user to do: Find a store near them so they can visit your business. The user lives in Los Angeles, so why are you showing them stores in Sacramento? Furthermore, Google Maps is no longer offering a free tier of it's API that can support multiple locations so you'll need to pay for the service plus the developer hours to set it up, which is all moot because you aren't effectively helping the customer find a store near them. 

# DO: List of Locations

Two ways to go with lists: On-demand geolocation or a static list of locations grouped by region. The former will cost you and the latter won't. Either way, a list of locations will help them narrow down the one that is closest to them. Users know where they are in the world, so selecting a location will not be hard unless they are buried alive in a coffin and they need to find a local excavation service to dig them out. 

### On-demand geolocation

[Find my store](https://www.target.com/store-locator/find-stores/95817) is a more colloquial way to say this. The user will enter their address or allow their browser to use geolocation services to populate a list of locations in descending order from closest to furthest away. This will require the use of a geocoding service like Google Geocoding service API and a good (pricey) web developer to set it up. If you have many locations over several states than this is a good solution. Also, if you're a national corporation, you don't really need to worry about cost so let's talk about what works for the little guy.

### Static list of locations  

[https://mymaps.google.com/](https://mymaps.google.com/ "https://mymaps.google.com/")