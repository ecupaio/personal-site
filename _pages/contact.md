---
title: Contact
permalink: /contact/
layout: basic
hero: 
  title: Contact
  text: You can reach me by email, phone, or schedule a 30 minute meeting with me.
  button:
    text: 
    url: 
---
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/ed-cupaioli/30min" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
<br/><br/>
<a class="btn" href="mailto:{{ site.data.nav.contact.email }}"><i class="fa fa-envelope"></i> {{ site.data.nav.contact.email }}</a><br/><br/>
<a class="btn" href="tel:{{ site.data.nav.contact.phone | prepend: '+1' | remove: '.' }}"><i class="fa fa-phone"></i> {{ site.data.nav.contact.phone }}</a>