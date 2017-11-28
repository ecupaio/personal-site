---
layout: index
published: false
permalink: "/blog/:title/"
title: Get a List of Tags in Jekyll Two Ways
---

{% assign tags =  site.posts |  where: 'published', 'true' | map: 'tags' | join: ','  | split: ',' | uniq %}
                    {% for tag in tags %}
                    <div class="tag-filter active" data-tag="{{ tag }}">
                        {{ tag }}
                    </div>
                    {% endfor %}

                </div>
								way two
                {% assign tagArray = '' | split: ',' %}
                {% for post in site.posts %}
                {% if post.published != "false" %}
                    {% for tag in post.tags %}
                        {% assign tagArray = tagArray | push: tag %}
                    {% endfor %}
                 {% endif %}
                {% endfor %}
                {% assign uniqTags = tagArray | uniq %}
                {% for tag in uniqTags %}
                    {{ tag }}
                {% endfor %}