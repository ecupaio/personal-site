---
_schema: blog-post
title: How to Sniff Out Spam
meta_img: https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
tags:
- Security

---
I received this email today and spotted a very obvious spam email that I chucked immediately in the junk folder.

![](/images/spam-email.jpg)

But for other people who aren't extremely online like me, it might not be so obvious. Phishing attacks are becoming more common. Instead of a malicious file download, spammers are sending emails pretending to be a company on false pretenses of renewing your password or updating your payment info like the one above in order to steal your sensitive information.

Here's some tips to keep you safe:

## Check the sender address

Let's look at that above email. Though the name is Norton Billing, the actual email address is a Gmail account. Why would a huge software company have some dude named Peter send all their subscribers emails?

The spam artist did a really simple email trick to achieve this and you can do it too:

* Open your mail client
* Type in any name you want in the To field: Bob Barker
* Then hit space, and put your email address between two greater and less than signs: [youremail@gmail.com](mailto:youremail@gmail.com)
* "Put come on down!"in the subject line, and then send the email to your friends for a good laugh.

Though most desktop clients making checking the sender simple by displaying both the name and address, mobile devices just use the name field. Here's some guides below on how to check the address on mobile devices:

* [iPhone (iOS)](https://apple.stackexchange.com/a/358815)
* [Android (Gmail)](https://support.google.com/mail/thread/9692180/how-to-display-the-email-address-of-the-sender-of-an-email?hl=en)

You'll notice both of these answers are in support forums and not on the official app documentation. I'm not sure why these companies wouldn't make seeing a sender address intuitive or at the very least give the user information how to do it. Perhaps they're in cahoots with Peter, but I think the answer is that they have no incentive to help the users on a free product and engineers hate writing documentation for the products they create. Not me however, let's see the next tip!

## Check the URL/Phone Number

This email told me to give them a ring so I could conveniently give them my social security number and a map of where all my valuable belongings are stored.  Not so fast Peter! Let's first google this phone number. As you can see from the [results page](https://www.google.com/search?q=855+-+659+-+3308&sxsrf=ALeKk02lI-8aSxC2YFXUpqQgjBx8uq1ftQ%3A1627682004334&ei=1HQEYdb1E6GGwbkPnrGA8A4&oq=855+-+659+-+3308&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFQ1X5Y0ZEBYJaUAWgCcAB4AIABd4gBuQSSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz&ved=0ahUKEwjWr7P944vyAhUhQzABHZ4YAO4Q4dUDCA8&uact=5), a lot of phishy (heh) stuff comes back. If you're still not convinced, let's go to the actual [support site for Norton Security](). They make you fill out a form to get a phone number! They really want you to RTFM (a common engineer phrase: read the f-ing manual) or use their chat. Why would they give out their number and invite you to call them?

Let's say you get a more savvy hacker that uses a link (c'mon Peter, put some more effort into your hacks). Open the link in [an incognito window](https://support.google.com/chrome/answer/95464?hl=en&co=GENIE.Platform%3DDesktop) and let's look at the URL. For this example I'm using a suspicious email I received from Instagram asking me to login:

![](/images/insta-email.jpg)

This was the link from the login button:

https://www.instagram.com/_n/web_emaillogin?uid=4edutd&token=7jSnQm&auto_send=0

Whole lotta stuff going on here so let's break this url down. We'll use the slashes, dots, and question mark as our delimiters:

* **https://** is the **protocol** by which we access the site. Defined is **H**yper**T**ext **T**ransfer **P**rotocol **S**ecure. Never enter sensitive information in a site that doesn't have that extra S at the end. Your browser will display a lock icon to indicate it at least has the [Secure Sockets Layer (SSL) Certificate](https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/). Though anyone can get a cert for free so it doesn't mean they're legit.
* **www.** is the **sub-domain**. www is very common, but it can be whatever you want. The subdomain of the Norton Support page I linked earlier was support. Only the owner of the domain can create sub-domains for their site. Instagram could have hacks.instagram.com since they own the instagram.com domain.
* **instagram.com** is the **domain name**. A domain name has two levels: second-level (instagram) and top-level (.com). Only one entity can own a domain name. I own the domain for this site: edcupaioli.com, but someone could buy edcupaioli.org. We can test instagram.com in our browser and see that instragram.com redirects to  https://www.instagram.com and see all the influencers peddling their wares. A common trick hackers will do is buy a slightly misspelt domain like gooogle.com and hope you don't notice the extra o since there's a huge path and query string.
* **/_n/web_emaillogin** is the **path**. The path is the directions to the page on the website. For example, if you keep you resumé in your documents folder, the path would be My Computer > Documents > Resume.pdf. The path is going through the folders to find the HTML file it should display. Nothing nefarious here, the first three items are what you should focus on. I just wanted to make sure you knew all the parts of a URL while you're here.
* **?uid=4edutd&token=7jSnQm&auto_send=0** is the query string. You'll see these a lot on the links you share on twitter or facebook. The query string is just a bit of code engineers can pass along to be interpreted by their javascript programing they have on the page. It's not hacks: most of the time it's either tracking, promo codes, or a temporary login token (short living piece of code that can log you in without a password or user name). The question mark (?) is the beginning of the query. Each part, a parameter, of the query is separated by an ampersand (&). The equal sign separates the key and value of each parameter. Like the path, nothing nefarious can happen here since the domain is legit. Theses are the parameters of the query string broken down:
  * uid=4eutd
  * token=7jSnQm
  * auto_send=0

A couple of my friends received this email so I went through these steps of checking the domain and the email was a legit email warning me about someone trying to hack my account. Good thing I had multi-factor authentication set-up so I could protect my non-existent pics. I just got the account to access their API. 

## Attempt the call to action through the site

Like I demonstrated with Norton Support earlier. Go to the actual site of the company requesting your action and see if you can change your password or update your billing info or check if you even have an account with them. You can even contact support to see what the deal is. A lot of companies pay for dedicated support staffs since word of mouth about customer satisfaction is the most effect form of advertisement. I knew I didn't have a Norton account so I didn't call the number, but I did have an instagram account. I didn't click the button and logged in through their website and made sure my details hadn't changed. 

## Don't download any files

This one should be obvious, but if you get a file from someone you don't know: don't open it, don't look at it, call in the bomb squad and have it detonated. There's no reason name-bunch of numbers is sending you a million dollars in totally-not-a-virus.exe. Chuck it in the junk folder and burn some sage. 

## Bonus tip: Enable Multi-Factor Authentication on your accounts

The best way to avoid someone logging into your account that has swiped your login credentials is to enable Multi-Factor Authentication (MFA). I call it mother f-ing auth as a silly joke, but it is a serious security layer. How it works is that upon entering your login credentials, another test occurs: most commonly a text or an email with a 6-character code. An even more secure way and better experience to get this second layer of security is using an authenticator software from [Google](https://support.google.com/accounts/answer/1066447?hl=en&co=GENIE.Platform%3DAndroid) or [LastPass](https://lastpass.com/auth/). However you choose to secure your account, please do enable MFA on every account you use to protect yourself. 