---
title: Helping people with technical issues
tags:
- Training
meta_img: https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?cs=srgb&dl=pexels-christina-morillo-1181472.jpg
footer-cta:
  title: Need some help from me?
  text: I'm all ears. Send me a line and let's find a solution together.

---
A little coding humor, folks:

    var forest = document.querySelectors('.tree');

See the forest for the trees, get it? It's a [running joke](https://i.redd.it/av1g54jp94i71.png) that stackoverflow, a tech help forum, is filled with awful toxic little babies, but I think we can do better. Now that people, including me, are learning code from a non-technical background, there's a lot of lingo and unwritten rules people just don't know about. The solution shouldn't be to [shun them](https://meta.stackoverflow.com/questions/289336/is-it-okay-to-downvote-questions-asking-if-some-code-could-work-but-not-actually/412023#412023) but help them along in their journey. If you're a level 99 python wizard, then please read this guide from me, an average human learning something new everyday.

## Get the big picture

Ask the person what their objective is. They might be in the weeds trying to figure out flexbox but just ask them "what's the end goal" if it isn't in their initial query. If they're trying to center a div then you have the expertise to help them. Don't be patronizing and ask "why would you do that?". I went to middle school with the most diabolical lunch table roasters. I will detail very unsavory things if you ask me that, but normal, well-adjusted people will just feel intimidated.

## Accept nuance in jargon: You are a human, not a javascript function

Just because someone said API and what you're working with is actually GraphQL shouldn't be a hurdle. They just want to sound nerdy like you and be a part of the scrum or agile or whatever acronymic framework you use for being organized and accountable. Just nod and smile and focus on the big picture as I mentioned in my last section. The alternative solution is just to not use tech jargon with stakeholders. Just say you're doing your thing and they'll accept it. True story: my old co-worker, who is a very accomplished and talented software developer, calls CSS transitions wooshy-woos and I still do it to this day. It's fun and keeps things light.

## One concept at a time

I used to teach first grade math. When a six year-old does not know what you are talking about they will disengage and become unstimulated. And when a six year-old becomes unstimulated they will find something to stimulate themselves with and you will not like it. Adults will be polite, but the result is the same: they will disengage and will not learn.

I was trained to find areas of confusion in my lesson plans and I always found the areas were when a new concept was introduced. If you're writing documentation on, say [how to build a Jekyll site](https://edcupaioli.com/blog/how-to-create-a-jekyll-site-with-github-pages/), I can't successfully tell people to use a gem install command without first explaining how to install ruby. Assume your audience just started coding yesterday. They said "hello world" and now they want to create something great. You're here to help them along not prove that slapper or whatever "powerful" tool you use is the greatest. They don't care, they want to make the thing. Take them through the steps as if Amelia Bedelia herself following the tutorial.

## They asked you to help them; help them

If someone does not understand the solution you gave them, they are not stupid. You have simply failed to explain the solution in a way they can understand it. Everyone learns differently. My old boss gave me a PDF of an O'Reilly book, but it didn't work for me. I'm a tertiary learner so I asked for projects that helped me better understand javascript. He gave me the room to grow and learn and it payed off: I now can code javascript without wanting to throw my computer out the window and live life off the grid less than three times a day. As the teacher, it's on you to find the best way to help them not the other way around. If you don't see all the info you need to help them, ask them to provide that specific information, not "I don't know what you're talking about." I get it, sometimes tickets or emails come across as vague or confusing to you, but try to empathize and break down the steps and how you can best help them.

## Case Study: Replying to a question on StackOverflow

[This question](https://stackoverflow.com/questions/23516533/jquery-index-start-at-1-not-0/69761994#69761994) is a great example of how unhelpful technical people can be when they forget they are interacting with a human and not a line of code. The person seeking help here asks how they get an index to start at 1 instead of 0. This is odd behavior since most languages start counting at 0, but the person might have an odd scenario and it's not our place to inquire about that. Our mission here should be to answer the question at hand: how do they get an index to start at 1 instead of 0 using jQuery. Here's how people responded: 

![people on StackOverflow being very unhelpful in the comments](/images/so-responses.jpg)

Let's know roast these responses individually since the mods will edit my unkind responses: 

_Index() starts from Zero_ — Rohit Batham

No shit, Sherlock. They already know that information. They asked how he can start it at one. Are you Jay Query? No, you're Rohit Batham. Be a human. You don't explain atmospheric pressure and wind patterns when someone asks you the weather. 

_No. JS uses 0-based indices. —_ Scimonster

Another javascript facts guy. Here's another fact: Scimonster took time out of his day to say the exact same thing as above which still didn't answer the question at hand. Go touch grass. 

_By adding 1 to the value reported by index()? But what problem is this meant to solve, or is it because you don't like counting from zero for some reason? — David Thomas_

Oh Dave, you had it! All you needed to do was provide some code and you would've helped out our fellow struggler here. But no, you needed to be a "why are you doing that?" guy. Maybe they needed to count the amount of times you needed to be punched in the face for being a jerk. Anyways, I'm glad they're [tearing down your monument](https://www.washingtonpost.com/local/trafficandcommuting/dave-thomas-circle/2021/02/02/e41ab174-6547-11eb-8c64-9595888caa15_story.html). 

_You can always add 1 if its really needed. You can also write a plugin that returns index()+1 - like $(this).indexFrom1() — techfoobar_

techfoobar is trying but they're also assuming the person asking the question will know how to write a plugin. They also don't leave any code for said plugin so the person asking the question can't really do anything with that information unless they dive deeper in stackoverflow/google. 

_Its important to know how you gona use accordianNo_ — Satpai

_It's_ important to use proper spelling and punctation if you're _gonna_ to be a jerk Satpai. It doesn't matter how the person asking the question is going to use their code. They want the indexes for accordianNo to start at one. Nothing else matters. 

### How to answer the question

[I answered the question](https://stackoverflow.com/a/69761994/3411192) complete with code. They asked how to start counting at 1 instead of 0 and I modified their code to show how this is done. I also gave them well wishes but a StackOverflow mod didn't like positivity and deleted my comment:

![Mod editing out "I hope this helps" with the reason being Stackoverflow is assumed to be helpful.](/images/so-edit.jpg)