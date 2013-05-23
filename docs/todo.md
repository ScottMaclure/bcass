# BCASS Todo

## Sooner

* Setup Jasmine spec runner for app .js
* Write some custom JS (perhaps an ajax search?). Design via md doc.
* Update package.json dependencies to use specific versions, to prevent updates breaking deployment

## Later

* IE7 testing and support strategy (need to get VM XP serial/activation first)
* Implement a "stars" rating display. Sprite?
* Model layer for things like products? Generating image elements?
* Consider: remove dependency on zurb-foundation gem, add foundation sass directly to project (consider upgrade path though. Temptation to tweak foundation itself?)
* HTML utility library for links etc
* Image service? Generating image tags?
* Review/address issue with Uglify and Zepto (1.2.6 lock?)
* Replace navbar with data structure
* Image magnifier plugin?
* Touch-friendly carousel?
* Fix deprecated use of end (use done) - see node.js server log

## Done

### 2013-05-23

* Refactor app scss into file/folder structure (sass-globbing?)
* Added sass-globbing: So you can do @import "library/**/*"

### 2013-05-22

* Extend grunt with compass (dev: 248k, prod: 97k).
* Grab some images for the product data.
* Move featured product html into partials, hook up to images.
* Render/style RHS bar to look more like the jpg
* Implement a 404 handler (Oops! page)

### 2013-05-21

* Extend grunt with jshint
* Setup gruntfile, create compiled JS, hook into base.html
* Update README.md

### 2013-05-19

* Lay out some elements in index.html to mock FE test screen.jpg (client-side only)
* Cherry pick some colours from the jpg and link with F4's semantic colours: http://foundation.zurb.com/docs/sass.html
* Setup a node.js / express server