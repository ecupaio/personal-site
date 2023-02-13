---
_schema: default
title: Storyteller Overland Portal
date: 2022-12-01 16:41:00 -0800
image:
  - /images/sto-signup.jpg
  - /images/sto-case-info-attach.jpg
  - /images/sto-case-info.jpg
  - /images/sto-dealer-account-edit.jpg
  - /images/sto-dealer-account-options.jpg
  - /images/sto-dealer-account.jpg
  - /images/sto-dealer-acount-dele.jpg
  - /images/sto-dealer-add-employee.jpg
  - /images/sto-dealer-cases-van.jpg
  - /images/sto-dealer-cases-vin.jpg
  - /images/sto-dealer-edit-account.jpg
  - /images/sto-dealer-help-open.jpg
  - /images/sto-dealer-help.jpg
  - /images/sto-dealer-home.jpg
  - /images/sto-dealer-warr-reg.jpg
  - /images/sto-forgot-pass.jpg
  - /images/sto-help-vid.jpg
  - /images/sto-login.jpg
  - /images/sto-open-case-vin.jpg
  - /images/sto-open-case.jpg
  - /images/sto-owner-account-active.jpg
  - /images/sto-owner-account.jpg
  - /images/sto-owner-garage.jpg
  - /images/sto-owner-help.jpg
  - /images/sto-owner-home.jpg
  - /images/sto-owner-locations.jpg
  - /images/sto-owner-transfer.jpg
  - /images/sto-reset-pass.jpg
  - /images/sto-signup.jpg
tech:
  - Web Development
  - Web Design
  - UX
  - CRM
link: https://sto-portal.netlify.app/
layout: project
published: true
description: >-
  Storyteller Overland needed a user portal for their owners and dealers, but
  all they had was a bulleted list of actions users could take and a partially
  completed design. No problem for me as I wear many hats. I build this portal
  with Gatsby to act as a frontend for Netsuite and used Netlify Identity to
  connect users to their data without giving them Netsuite access. I worked with
  a great designer and a team of backend engineers to get this massive, but
  rewarding job done.  
---
You won't be able to get past the login or signup screens, but trust me when I say there's tons of functionality packed into this frontend. The initial challenge was to find a way to connect people in the Netsuite database without given them a seat in Netsuite which would expose internal company details. I worked with some really great Netsuite backend engineers to devise a system where we could connect an email with a record and create an auth account with a third-party integration, Netlify Identity, that would handle logging in and signing up. Once we figured that out, it was off to the races. Now owners and dealers of Storyteller Overland vans are able to reach out to support, respond to open cases, register warranties, manage dealership staff, and transfer their vans. Previously they could&nbsp; only submit cases and register warranties through a buggy hubspot form that would occasionally bungle the data.&nbsp;

Just like all of my sites, this comes with a robust CMS that will allow the staff at Storyteller Overland to make content updates to the FAQs, Van resources, and more. I built the CMS with [Sanity](https://www.sanity.io/)which allowed me to customize the CMS exactly to the portal's complex functionality.&nbsp;

I also coded some HTML emails designed by their excellent in-house designer using [Maizzle](https://maizzle.com/). I could have just used the default, plain-text templates for password recovery and confirmation, but I'm really glad we went through the extra effort to create an end-to-end branded experience for the users.&nbsp;

This was a really great project to work on since I got to wear my product manager hat and control everything from the nav bar design down to how records were related in Netsuite. I'm really proud of what I built here so take a gander at the screens to get a mere taste of the extensive functionality I packed into this user portal.&nbsp;