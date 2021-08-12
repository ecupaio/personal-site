---
title: DCGFFL Website Revamp
client: DC Gay Flag Football League
link: https://dcgffl.org/ 
intro: 
  text: |-
    DC Gay Flag Football League (DCGFFL) had a problem that was all too familiar for me: They had a Wordpress site that fell out of updates and was not intuitive to edit content for admins nor was the user experience ideal for prospective and current players. I was able to give them a website that was built to last, easy to edit content, and able to provide a linear experience for current players. Though there are many facets to DCGFFL.org, let's look at the current player experience in the League section of the site. 
  objectives: 
  - Design an intuitive experience for current players to participate in the league both on and off field.
  - Create a CMS that can be updated by referees scoring games on the field as well as board members scheduling the seasons at home.
  image: /images/dcgffl-team.jpg
problems: 
  - title: Content out of sync
    text: As a player in the DCGFFL I noticed the clunky experience for current league players looking for games and playoff results. There was a scoreboard page, a schedule page, a team page, but no syncing between them outside of hyperlinks to the team pages from the other pages. Further complicating matters, the league played in multiple locations due to field conditions and there was no clear communication to users outside of hoping their captains conveyed the info to them.
    image: /images/dcgffl-team-old.jpg
  - title: No simple way to update
    text: On the admin side, all games had to be added on a single post for each week after they happened for the scoreboard page separately from the schedule page. So not only were the content editors have to wait until all games were concluded to add them to the scoreboard, but there was also no way to add the games ahead of time. 
    image: /images/dcgffl-old-cms.jpg
solutions: 
  - title: Relational content
    text: |-
      I created three post types: Teams, Games, and Locations. At the beginning of each season, content editors will add the teams, then their respective games where they would select the team they added from a dropdown of team pages. Then they could add a location from the Locations dropdown so they wouldn't have to add the address and details a bunch of times over.
    image: 
  - title: Automated score-keeping and records
    text: |-
      The Scoreboard page was set up to feed in games as they were scored. This way content editors could enter the games for the season ahead of time and when I game score was entered through the mobile-friendly Foresty.io CMS, they would populate immediately on the scoreboard page. Wins and losses are automatically determined as well as records through the ease of coding in Liquid versus the former,cumbersome PHP of Wordpress. 
    image:   
  - title: One place for players
    text: |-
      Since all the game content was synced, team pages were now a one-stop shop for checking for results, seeing who your teammates are, seeing rankings, planning for upcoming matches. 

      I also added a League page so that players had a central hub to find out info about the season. For the content editors, they simply updated the season and week data to create site wide conditions of what results are shown throughout the site. 
    image:     
results: 
  text: |-
    Content editors are ready for the next upcoming season and referees will be able to score games live from the field. Now my beloved and sorely missed flag football league will have an updated site that can be edited without headaches. 
---
