# 2048

*Hunter College / Google Mentorship Project 2019*

**Team members: Leo Au-Yeung, Tracey Kong, Angela Lim**


## Getting started
### Web-hosted gameplay:

This is a web browser replica of the popular game 2048.

You can view and play the game on this live link (hosted by [GitHub Pages!](https://pages.github.com/)):
<https://angelalim1010.github.io/2048/>

### Local gameplay:


You can also run this game locally in two different ways!

```
# First, clone this repo:
git clone git@github.com:angelalim1010/2048.git
```

#### Option 1: Using the basic index.html page

Simply copy the path of the `index.html` file in the root directory and visit the address in your web browser. The game should be running there!

#### Option 2: Using Google's [App Engine](https://cloud.google.com/appengine/)!

Follow this link to set up appengine using Java in your local environment:
<https://cloud.google.com/appengine/docs/standard/java/quickstart>

```
# Switch into the backend directory:
cd /backend

# Start the local Jetty web server using the Jetty Maven plugin:
mvn appengine:run

# In your web browser, visit the following address:
http://localhost:8080

# And the game should be running there!
```
