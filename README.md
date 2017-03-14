FormPeek
========
FormPeek shows you what your users/visitors are typing in to form fields, without them having to click a submit button. Even if they delete what they started typing, you can still see what they had typed before they hit the backspace button.

At [FeedbackEngine.Com](https://www.feedbackengine.com) we wanted to see where our users were struggling or bouncing from our signup and setup process, but didn't want to implement an expensive and complicated service that has tons of other features we didn't necessarily want or need. All we wanted to see was what our users were typing, but not submitting, in our form input text fields.

So like any good developer, we built our own solution. Enter FormPeek: simple, handy, and (now) open source. We tried to make FormPeek easier to use, but literally couldn't. It's pretty damn simple. All you need to do is drop the JavaScript code in to the `<head>` of your page. Maybe the only thing we could have done is put the code on a CDN for you. If this ends up being popular, we'll work on that. :)

Installation
============

Step 1: Grab The Code
-------

Copy the javascript from the latest version of [formpeek.js](https://github.com/feedbackengine/formpeek/blob/master/formpeek.js), or (better yet) download the file to whatever directory you put these kind of files in. 

Step 2: Install The Code
-------

Edit the URL in the JavaScript code to be your target to receive the data. Protip: If you have request logging enabled on your server, you don't even need an actual script, just make sure you point it to a page that returns a 200.

Once you've updated the URL to be your own target URL, paste the formpeek.js javascript including the `<script>` and `</script>` in to your html file with the form field between the `<head>` and `</head>` tags, or if you've added the edited formpeek.js to your directory, just add `<script src="/path/to/your/formpeek.js">` in to the `<head>` section of your HTML file. We recommend the src method to keep your html cleaner, but whichever model you prefer will work.

Step 3: Add FormPeek To Your Form Field(s)
-------

In the `<input>` tag for your form that you want to track, add: `oninput="pushIt(this.value);"`

Example: `<input type="text" name="email" oninput="pushIt(this.value);">`

Here's a full HTML file with the script and input tags set up: [example.html](https://www.github.com/feedbackengine/formpeek/blob/master/example.html)

***Warning***: If you have a lot of users or traffic, this may send more requests to your target URL than you expect. You'll see a GET request every 1 second while a user is typing in your FormPeek-enabled form fields. You can edit the timer to be whatever you want-- we have the default set to 1000ms, which was perfect for our use case.

Step 4:
-------

Refresh the page in your browser and give it a try. Type some characters in to the field you've formpeek-enabled. After a (configurable) 1000ms (1 second) delay, formpeek will "fire" and send whatever you've typed off to the URL you specified. It will show up as a HTTP "GET" request this in your server log files:

/your/specified/page?input=WhateverYouTypedInTheForm

You can also create an actual script that accepts the input and does something interesting with it, like put it in a database, log it to a file, push it to slack-- whatever you want. That's what we did at [FeedbackEngine](https://www.feedbackengine.com) so we could better analyze and report on the data to improve the experience for our users.

Browser Compatibility:
-------

Note that we purposely didn't use Fetch because it is limited to more modern browser versions, and there is no reliance on any other libraries-- so while we haven't tested on every possible browser, you should expect this to work pretty well cross platform.

Contribute
-------

We'd love you to contribute. Send us a pull request!
