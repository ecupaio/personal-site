---
title: Thanks for getting in touch
permalink: /schedule-thanks/
layout: basic
---
I'm excited for our chat. We will use Google Meet to talk unless you have a preference for phone or another video conference service. Please feel free to reach out to me any time if you need to cancel or reschedule: [ed.cupaioli@gmail.com](mailto:ed.cupaioli@gmail.com).

In the meantime, check out what I can do for you: 
<ul class="services-list">
{% for service in site.services %}
<li class="services-list__item">
  <a class="services-list__link" href="{{ service.url }}">{{ service.title }}</a>
</li>
{% endfor %}
</ul>