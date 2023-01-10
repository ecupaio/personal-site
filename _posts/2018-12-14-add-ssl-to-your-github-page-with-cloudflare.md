---
_schema: blog-post
title: Add SSL (https) to your Github Page with CloudFlare and NameCheap
date: '2018-12-14T17:55:38+00:00'
meta_img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80'
tags:
- Jekyll
- Web Development

---
I wrote these instructions assuming you have a domain set up with NameCheap. Other domain services will allow you to modify the DNS settings, but definitely go with CloudFlare for your SSL certificate since it's free and they have a great UI and support.

### Create an account with CloudFlare

1. Go to cloudflare's website and [create your account](https://dash.cloudflare.com/sign-up)
2. Select the free option 
3. Add your site by select Add site and entering your domain
4. Upon adding your site, you will receive the Cloudflare Nameservers. Save those for later as you will need to enter them into NameCheap to properly route your site. 

### Add CNAME and A records

After you add all of the records, you should have a 1 CNAME record and 2 A records. In my experience, CloudFlare added these records from NameCheap, but I've added step-by-step instructions just in case. 

You will need to add a CNAME file to the root of your site with the domain. For example, my site's CNAME just has `edcupaioli.com` on the first line. That's all you need. 

**CNAME**

1. Select DNS from the top menu
2. Remove whatever records exist to add the proper records
3. Use the toggle to select CNAME, enter `www` for the name and enter your github domain (username.github.com) for the domain name, then Select Add Record.
   * Even if your site is served through a subfolder (username.github.com/project), you will still enter your github domain without the path for the domain name.  

**A records**

1. Select A on the dropdown and enter your domain name with no www or https (example.com) and `192.30.252.153` for the iPv4 address
2. Repeat the above but add `192.30.252.154` for the iPv4 address

### Add custom DNS to NameCheap

Take those nameservers from before. They are in the DNS panel in CloudFlare in case you closed the window from before.

1. Log in to NameCheap, go the Ac and select manage 