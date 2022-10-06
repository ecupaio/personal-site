---
title: Installing Sanity CMS on an existing Gatsby Project
meta_img: ''
tags: []
footer-cta:
  title: ''
  text: ''

---
## Initial setup

Create a directory called 'web' and move all your site files into there

Create a directory called 'studio' and cd into it. then run sanity init

CD into your gatsby site: cd web

run npm i gatsby-source-sanity --save

add the plugin:

    module.exports = {
      plugins: [
        {
          resolve: 'gatsby-source-sanity',
          options: {
            projectId: 'abc123',
            dataset: 'blog'
          },
        },
      ],
    }

projectId and dataset are in /studio/sanity.json