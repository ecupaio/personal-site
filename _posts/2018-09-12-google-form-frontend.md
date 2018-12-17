---
title: How to create a custom front-end for a Google Form
date: 2018-09-12 18:25:38 +0000
permalink: "/blog/google-form-front-end/"
tags:
- Google Apps
- jQuery

---
**Problem:** you have a Google Form but you don't want an ugly embed on your site.

**Solution:** Create your own HTML form and use an AJAX request to transfer data to Google.

This tutorial was intended for novices so if you're a javascript master, you can just check out [my codepen](https://codepen.io/ecupaio/pen/QVrQov) where I have everything laid out.

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

Make the form to your desire, but make sure it has a submit input and a selector (class or ID) that we can use to submit the data to Google Forms. Also make sure you add the input name attributes to the corresponding fields. Most importantly, add all of your [form validation](https://www.w3schools.com/tags/att_input_required.asp) since we are going to make a blind request to Google. Here's my example form:

    <form id="my-form">
      <input name="entry.1746887209" type="text" required/>
      <input type="submit" />
    </form>

In the example above, I added a selector to the form (`id="my-form`) and I added the input name attribute from the Google form I made. I've also added a submit input so that end-users can trigger the form submission to Google.

### Create the AJAX request

With your form structure in the site, we can create the AJAX request to post data to the Google form. jQuery AJAX is a method by which we can request and post data. In this case we are posting data to Google.

#### Get the form URL

Before we create the funciton, we need the URL to post the data to:

Open the form in the enduser format like before:

https://docs.google.com/forms/d/e/1FAIpQLScfJY0v7xNhp6fyFdmiX6vPiAVgoldqPDNvf1PU1OCVxIu1jg/viewform

Remove the **/viewform** from the end of the url and replace it with **/formResponse**

#### Add it to the boiler plate function

I created the formula for you, but I still want you to understand what's going on so I commented each line.

    //selector from your HTML form
    $('#my-form').submit(function(e) {
      //prevent the form from submiting so we can post to the google form
      e.preventDefault();
      //AJAX request
      $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScfJY0v7xNhp6fyFdmiX6vPiAVgoldqPDNvf1PU1OCVxIu1jg/formResponse',     //The public Google Form url, but replace /view with /formResponse
        data: $('#my-form').serialize(), //Nifty jquery function that gets all the input data
        type: 'POST', //tells ajax to post the data to the url
        dataType: "json", //the standard data type for most ajax requests
        statusCode: { //the status code from the POST request
          0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
            //success
            $('#form-success').text('hooray!');
          },
          200: function(data) {//200 is a success code. it went through!
            //success
            $('#form-success').text('hooray!');
          },
          403: function(data) {//403 is when something went wrong and the submission didn't go through
            //error
            alert('Oh no! something went wrong. we should check our code to make sure everything matches with Google');
          }
        }  
      });
    });

This is non-standard AJAX request function since Google will through an error because you're sending the request from a domain that isn't Google (e.g. a CORS error). I'm using the statusCode response since the standard `success` and `error` responses will turn up an `error` each time because of the CORS error I mentioned earlier. `200` is good, `0` is when we get that CORS error but Google still gets the data somehow, and `403` is when no data went through.

### Send a test submission

Go ahead and plug some data into your HTML form and check on the Google Form submissions backend to see if it went through!

The other way you can test is to take the /formResponse url you made earlier and add the input name attributes as URL parameters:

Add a question mark to the form response URL like so:

`https://docs.google.com/forms/d/e/1FAIpQLScfJY0v7xNhp6fyFdmiX6vPiAVgoldqPDNvf1PU1OCVxIu1jg/formResponse?`

This tells the URL that we are going to add some information (parameters) to the request.

`entry.1746887209` is my (only) input name attribute that I created with Google, so I add that after the question mark:

`https://docs.google.com/forms/d/e/1FAIpQLScfJY0v7xNhp6fyFdmiX6vPiAVgoldqPDNvf1PU1OCVxIu1jg/formResponse?entry.1746887209`

Now all I need to do is add the data for the input with an equal sign:

`https://docs.google.com/forms/d/e/1FAIpQLScfJY0v7xNhp6fyFdmiX6vPiAVgoldqPDNvf1PU1OCVxIu1jg/formResponse?entry.1746887209=test`

Open that [url](https://docs.google.com/forms/d/e/1FAIpQLScfJY0v7xNhp6fyFdmiX6vPiAVgoldqPDNvf1PU1OCVxIu1jg/formResponse?entry.1746887209) in a broswer and you will see the Google form success screen!

If you have more than one input, add each parameter with an ampersand (`&`)
