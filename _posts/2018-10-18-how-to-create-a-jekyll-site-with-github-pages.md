---
_schema: blog-post
title: How to create a Jekyll Site and host with Github
date: 2018-10-18 15:01:56 +0000
meta_img: https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1066&q=80
tags:
- Jekyll
- Github
- Web Development
published: true
---
In this tutorial, we're going to create a Jekyll site and host it with Github. You will need to use the command line (Applications > Utilities > Terminal) and I'm using Mac OS X for the steps below. I'm also assuming you have git installed and you have a github account so follow these instructions, if you have not: [https://help.github.com/articles/set-up-git/](https://help.github.com/articles/set-up-git/ "https://help.github.com/articles/set-up-git/")

### Install and/or update Ruby

Docs are usually terrible and written for CS graduates, but Jekyll lays out precisely how to it for all operating systems:

* [macOS](https://jekyllrb.com/docs/installation/macos/)
* [Ubuntu Linux](https://jekyllrb.com/docs/installation/ubuntu/)
* [Other Linux distros](https://jekyllrb.com/docs/installation/other-linux)
* [Windows](https://jekyllrb.com/docs/installation/windows/)

### Install Jekyll

**Open a terminal window and enter the following:**

`gem install jekyll bundler`

This will install all the necessary ruby gems (files) that Jekyll needs in order to run.

### Create Jekyll Site

**Create a folder (directory) in your username (root) directory in Finder for your projects.**  
![](/uploads/root-directory.png)

This is where you're going to put your first Jekyll website along with all your other projects. I call mine "Projects", but you can name it whatever you want, as long as it's easy to remember and type.

**Next, create a folder for your Jekyll site within your projects folder.**

Make sure there are no spaces in your site folder name, as this will cause some issues later.

**Open a terminal window and change the directory to your new site folder by entering the following:**

`cd ~/Projects-folder-name/website-name`

Now you're in your site directory and you are ready to install your jekyll site.

**In that same terminal window, enter the following:**

`jekyll new . --force`

This will create a Jekyll site within your site directory. You should see a bunch of files in your site folder.

**Run the Jekyll server to check if you're site is working, by entering the following in the same terminal window:**

`bundle exec jekyll serve --livereload`

Go to [http://localhost:4000](http://localhost:4000) to see your site!

### Create a repository on Github for your site

I am adapting the [instructions from Github](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) for this section.

**Go to** [**https://github.com/new**](https://github.com/new "https://github.com/new") **to create a new repo**

Name it the exact name as your site folder.

**Open terminal and cd into your site:**

`cd ~/Projects-folder-name/website-name`

**Initialize your repository by entering the following into your terminal window:**

`git init`

**Stage all of your site files to be committed to your local repo:**

`git add .`

**Commit your files to the local repo:**

`git commit -m "Add site files"`

**Push the local repo to the remote repo on Github:**

Github will give you the exact commands for how to do this when you create your repo under "...or push an existing repository from the command line"

Here they are below:

`git remote add origin https://github.com/your-username/site-repo.git`

`git push -u origin master`

**Refresh the repo page to see if it went through**

You should also receive confirmation in the terminal: `Branch 'master' set up to track remote branch 'master' from 'origin'.`

### Configure your Jekyll Site

Open your repo with a text editor (Atom, Sublime, etc.) for the simplest way to edit and add all of your configurations

#### Add a baseurl

Since your site is going to be served from a subdirectory of your github profile, you need to add a baseurl in order to properly serve the CSS and JS among the other assets you will add.

Open the `_config.yml` file in the root of your site repo.

Find the line that says `baseurl: ""` (line 22 at the time of publishing).

Fill in your repo's name with a beginning slash:
`baseurl: /mysite`

If you have the jekyll server still running, you will need to restart the server in order to build the changes. With the terminal window open, press control + C to stop the server, then enter `bundle exec jekyll serve --livereload` to build the site and run the server.

The site will now serve from `http://localhost/mysite`, with `mysite` being the text you just added to baseurl.

#### Add a custom layout

Jekyll comes with themes and layouts, but we want to make our very own custom site so we're going to add a custom layout.

First, create a directory named `_layout` in the root of your site

Next, add a html file to the `_layout` directory and name it `default.html`

This will be your layout for your home page. Eventually, you can add layouts for blog posts or product pages. But for now we'll stick with this one since the purpose is to get your content to display properly across the pages you create. [See Jekyll's docs](https://jekyllrb.com/docs/layouts/) for a more in-depth explanation on layouts.

Below is a boiler plate layout that will set you up for success:
<script src="https://gist.github.com/ecupaio/5fc4de0df5375af10d6403db06018932.js"></script>

#### Create a home page

Pages are added to the root of your site repo. Jekyll will add two pages for you: a home page (index.md) and an about page (about.md). They end with the `.md` attachment because they are in markdown, a language specifically for written content that's simpler to write than HTML. However, Jekyll allows for HTML to be written within the markdown, so we will leave the home page as a markdown file. For more information about markdown, [read Jekyll's docs](https://jekyllrb.com/docs/posts/).

First, change the layout in the [front matter](https://jekyllrb.com/docs/front-matter/) (the configurations at the top of the page) to default. Your front matter on index.md should look like the following:

    ---
    layout: default
    ---

Next, add your custom HTML for the homepage.

Cd into your repo, then run `bundle exec jekyll serve --livereload` and check http://localhost:4000 to see your homepage in realtime.

#### Add SCSS file structure

Now that you have your html structure for your homepage, you're going to need to add you SCSS. SCSS is like CSS but better and easier to write and template. You can write plain CSS in your SCSS files to get started, but we're gonna get set up with a proper file structure once you get more comfortable writing SCSS. [Reference the SCSS docs](https://sass-lang.com/guide) for more info.

First, add a directory named `_sass` in your website's root.

Next, add a scss sheet for your home page within the `_sass` directory named `home.scss`.

Add a directory named `css` and then add a file named `style.scss` to the directory so Jekyll can process your SCSS into CSS.

In the `style.scss` sheet, add the following lines:

    ---
    ---
    @import "home";

The dashes at the top are used for front matter, which tells jekyll it needs to process the SCSS into CSS on this page.

You will add an `@import "sheet-name"` for every SCSS sheet you add to the `_sass` directory.

In the end, your repo should look like this (plus the default files already added):

    mysite/
      _layouts/
      	default.html
      _sass/
      	home.scss
      css/
      	style.scss

#### Load CSS in the Head

With your scss strutured and ready. You can load your css in the head of the default layout.

Open your default layout located in `_layouts/default.html`

Right above the `</head>` closing tag, add the following line:

`<link rel="stylesheet" href="{{site.baseurl}}/css/styles.css">`

Now you're ready to add style to your homepage. Go to the `_scss/home.scss` sheet and  make some magic!

#### Create a JS directory

Now that your homepage is shining, you're probably going to want to add some click events and little wooshy woos (that's my way of describing CSS animations and transitions).

Create a directory in the root of your site named `js`.

Add your first script file to the `js` directory and name it `functions.js`

#### Add JS to the layout

With your JS directory and script file added, now all you need to do is add it to the layout.

Open the layout located at `_layouts/default.html` and add the following line just above the `</body>` closing tag:

`<script src="{{ site.baseurl }}/js/functions.js">`

### Publish your Jekyll Site with Github Pages

Now that you got everything set up and you're happy with your home page, it's time to publish!

Push your file changes to the remote repo:

`git add .`

`git commit -m "Set up site"`

`git push origin master`  

Open your repo in github: https://github.com/user-name/repo-name

Select settings at the top menu

Scroll to Github Pages and select master branch under Source, then select save.

Scroll back down to the Github Pages section, and your site link will be there: https://username.github.io/repo-name/.

### Purchase and Link your Domain

Once you're happy with your site, it's time to park it on a domain and share it with the world.

Go to [namecheap.com](https://www.namecheap.com/) and purchase an available domain.

Follow [Namecheap's directions](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages) on how to add a CNAME to the domain for your github page.