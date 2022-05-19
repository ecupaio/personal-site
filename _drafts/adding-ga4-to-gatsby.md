---
title: Adding GA4 to Gatsby
meta_img: ''
tags: []
footer-cta:
  title: ''
  text: ''

---
Create Property

under, Enhanced measurement make sure Page changes on browser history events in unchecked to prevent double logging

install gatsby-plugin-google-tagmanager on your gatsby site

[https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/ "https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/")

add the settings to your gatsby-config.js file

{

resolve: "gatsby-plugin-google-tagmanager",

options: {

id: "YOUR_GTM_ID",

includeInDevelopment: true,

 },

 }

the docs all of their settings displayed but we want to keep it default since we don't need to do anything fancy yet.

I also switched `includeInDevelopment` to true since we are going to test everything in local, but you can set it to false when you're ready to go live. 

add trigger: custom html event

on event name add gatsby-route-change

 [https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/#tracking-routes](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/#tracking-routes "https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/#tracking-routes")