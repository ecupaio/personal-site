---
title: Thanks for getting in touch
permalink: /schedule-thanks/
layout: basic
---
I'm excited for our chat. We will use Google Meet to talk unless you have a preference for phone or another video conference service. Please feel free to reach out to me any time if you need to cancel or reschedule: [{{ site.data.nav.contact.email}}](mailto:{{ site.data.nav.contact.email}}).

## Meeting Details

A copy of these details will be in your inbox along with a calendar invite.

**Your Name** <span class="event-info name"></span>

**Your Email** <span class="event-info email"></span>

**Event Date/Time** <span class="event-info date-time"></span>

**What can I help you with?** <span class="event-info answer-1"></span>

**What is your timeline?** <span class="event-info answer-2"></span>

**What is your budget?** <span class="event-info answer-3"></span>

## Services

In the meantime, check out what I can do for you:
<ul>
  {% for service in site.services %}
  <li>
    <a href="{{ service.url }}">{{ service.title }}</a>
  </li>
  {% endfor %}
</ul>
