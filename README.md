# 2048
### Team members: Leo Au-Yeung, Tracey Kong, Angela Lim
This is a web browser replica of the popular game 2048

You can view and play the game on this link:
<https://angelalim1010.github.io/2048/>

You can also run this game locally in two different ways!

First, clone this repo:
`git clone git@github.com:angelalim1010/2048.git`

#### Option 1: Go to the basic index.html page

Simply copy the path of the `index.html` file in the root directory and visit the address in your web browser

#### Option 2: Using Google's App Engine! (https://cloud.google.com/appengine/)

Follow this link to set up appengine using Java in your local environment:
https://cloud.google.com/appengine/docs/standard/java/quickstart

Switch into the `backend` directory:
`cd /backend`

Start the local Jetty web server using the Jetty Maven plugin:
`mvn appengine:run`

In your web browser, visit the following address:
`http://localhost:8080`

And the game should be running there!
