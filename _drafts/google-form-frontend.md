---
title: Google Form Front-end
date: 2018-09-12 18:25:38 +0000
undefined: ''
tags:
- Google Apps
- jQuery

---
**Problem:** you have a Google Form but you don't want an ugly embed on your site. 

**Solution:** Create your own HTML form and use an AJAX request to transfer data to Google. 

## Steps:

1. Set up your form
2. Get the input names of each field
3. Create your HTML form
4. Create the AJAX request
5. Send a test submission

### Set up your form

I you know how to create a form on Google Drive, but one crucial step that will save you lots of time and frustration is to **make all of your inputs short answer (text)**. Since we're creating a front-end, you can make whatever dropdown, radio, checkbox, etc. that you desire, but the Google Form will just need the text input which will make sending the request much smoother. We can do validation on the front-end too so just worry about setting up the inputs for data to feed into as short answer. 

**Neat fact:** Google forms also uses this logic as well. All non-text fields feed data into hidden text inputs in their form!

### Get the input names of each field

Now that you have a form, view it as an end user (Send > Link). After you open the form in your browser (for this example I'm using chrome), right click on the input and select inspect (or whatever your DevTools equivalent is for your respective browser).  Look for an `<input>` tag nested in the series of divs. In my test form, my input looks like this: 

    <input type="text" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="Test field" aria-describedby="i.desc.1957953857 i.err.1957953857" name="entry.1746887209" value="" dir="auto" data-initial-dir="auto" data-initial-value="">

The only thing we need from that mess, is the `name` attribute. The name attribute for the above example is `name="entry.1746887209"`. 

Copy that into your project and we'll use it when we are creating the form.

### Create your HTML form

Make the form to your desire, but make sure it has a submit input and a selector (class or ID) that we can use to submit the data to Google Forms. Also make sure you add the input name attributes to the corresponding fields. Here's my example form:

    <form id="my-form">
      <input name="entry.1746887209" type="text" required/>
      <input type="submit" />
    </form>

In the example above, I added a selector to the form (`id="my-form`) and I added the input name attribute from the Google form I made. I've also added a submit input so that end-users can trigger the form submission to Google. 

### Create the AJAX request

With your form structure in the 