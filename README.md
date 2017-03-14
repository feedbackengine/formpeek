FormPeek
========
We at [FeedbackEngine.Com](https://www.feedbackengine.com) wanted to see where users were struggling or bouncing from our signup and setup process, and didn't want to implement an expensive and complicated service that has hundreds of other features we didn't need.

Enter FormPeek. We tried to make it easier to use, but couldn't. It's pretty damn simple. All you need to do is drop the JavaScript code in to the <head> of your page.

Installation
============

Step 1:
-------

Copy the javascript from the latest version of [formpeek.js](https://github.com/feedbackengine/formpeek/formpeek.js), or download the file to your includes directory. You'll need to edit the URL to be your server and script to receive the data. Protip: If you have logging turned on, you don't even need an actual script, just make sure it's a page that returns a 200.

Step 2:
-------

Paste the formpeek.js javascript including the <script> and </script> in to your html file with the form field between the <head> and </head> tags, or if you've added formpeek.js to your directory, just add <script src="/path/to/formpeek.js"> in to the <head> section. We recommend the src method to keep your html cleaner.

Step 3:
-------

In the <input> tag for your form that you want to track, add: `oninput="pushIt(this.value);"`

Example: `<input type="text" name="email" oninput="pushIt(this.value);">`

Here's a full HTML file with the script and input tags set up: [example.html](https://www.github.com/feedbackengine/formpeek/example.html)

Step 4:
-------

Refresh the page in your browser and give it a try. Type some characters in to the field you've formpeek-enabled. After a 1000ms (1 second) delay, formpeek will "fire" and send whatever you've typed off to the URL you specified. It will show up as a HTTP "GET" request this in your server log files:

/your/specified/page?input=WhateverYouTypedInTheForm

You can also create an actual script that accepts the input and does something interesting with it, like put it in a database, log it to a file, push it to slack-- whatever you want. That's what we did at [FeedbackEngine](https://www.feedbackengine.com) so we could better analyze and report on the data to improve the experience for our users.
