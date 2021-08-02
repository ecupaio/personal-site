---
title: Get a List of Unique Items in Jekyll
permalink: "/blog/:title/"
meta_img: https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80
tags:
- Jekyll
- Web Development
---

I ran into this problem when I was creating a tag filter for my blog: I needed a list of all the tags I used in my posts, but I wanted to filter out any duplicates. I also wanted tags from only published posts, so I needed to use the [where filter](https://www.siteleaf.com/blog/advanced-liquid-where/). Below is how I achieved this result:

**Example post front matter:**
{% raw %}
```
title: Get a List of Unique Items in Jekyll
published: true
tags:
- jekyll
```
{% endraw %}

**Example loop:**
{% raw %}
```
{% assign tags =  site.posts | where: 'published', 'true' | map: 'tags' | join: ','  | split: ',' | uniq %}
{% for tag in tags %}
    {{ tag }}
{% endfor %}
```
{% endraw %}

Here's what each line does:

I defined a variable for the array I'm creating so I could effectively add all the filters:  
{% raw %}
`{% assign tags = site.posts %}`
{% endraw %}

I added the `where` filter to get only the posts that are published:  
{% raw %}
`{% assign posts =  site.posts | where: 'published', 'true' %}`
{% endraw %}
The `where` operates based on an object/value pair. In the above example, I'm telling jekyll to get all posts where the published object has a value of true, e.g. `published: true`. `where` is just a filter for your frontmatter.

I added the `map` filter in order to create an array with only the tag filters:  
{% raw %}
`{% assign tags =  site.posts | where: 'published', 'true' | map: 'tags' %}`  
{% endraw %}
`map` is a useful, but [poorly documented method](https://shopify.github.io/liquid/filters/map/) like much of anything relating to arrays. I had trouble with this part, so I will explain it for you: `map` tells the loop to create a new array with only one of the objects. In the example above, I created an array with all the posts in my site: `site.posts`, then I made a new array with only the `tags` object from each post. Now I have an array of just the tags, after adding `map: 'tags'`.

The raw output of the tags array would look like this: `[["jekyll"]]` so I cleaned it up with `join` and created a comma separated string that I can create an array that jekyll will recognize:  
{% raw %}
`{% assign tags =  site.posts | where: 'published', 'true' | map: 'tags' | join: ',' %}`  
{% endraw %}
`join` creates a comma separated string of values, e.g. tag one, tag two, tag three. With `join`, I now have a string that jekyll can make an array with.

`split` creates the array from which I can use the `uniq` filter to remove any duplicate values:
{% assign tags =  site.posts | where: 'published', 'true' | map: 'tags' | join: ','  | split: ',' %}
I'm telling jekyll to parse objects into an array based on the comma separator in the line above: `split: ','`

now with the array created, I can use the `uniq` filter that will only work on arrays:  
{% raw %}
`{% assign tags =  site.posts | where: 'published', 'true' | map: 'tags' | join: ','  | split: ',' | uniq %}`
{% endraw %}

Woot! Our tags are unique and ready to be looped through:  
{% raw %}
```
{% for tag in tags %}
    {{ tag }}
{% endfor %}
```
{% endraw %}
`tags` is our array and we want to get each `tag` from the list of tags in each object.

### The other method

I discovered another method from tooling around. In this method I create an array, filter the array for unique values, then loop through that array to get my tags. Basically the same as the method above, but more complicated! I just comment above each line here for a more brief explanation:
{% raw %}
Create an empty array to add objects to:  
`{% assign tagArray = '' | split: ',' %}`  
Loop through the posts:  
`{% for post in site.posts %}`  
Get only published posts:  
`{% if post.published != "false" %}`  
    Loop through the tag lists within each post:  
    `{% for tag in post.tags %}`  
        Push each tag to the tagArray. The array has to be defined as a variable again so it can be overwritten with the new objects:    
        `{% assign tagArray = tagArray | push: tag %}`
    `{% endfor %}`  
 `{% endif %}`  
`{% endfor %}`  
Create a new array from the filtered array:  
`{% assign uniqTags = tagArray | uniq %}`  
Loop through your filtered array to get unique tags:
```
{% for tag in uniqTags %}
    {{ tag }}
{% endfor %}
```
{% endraw %}
