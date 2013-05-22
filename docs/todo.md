# BCASS Todo

## Sooner

* Render/style RHS bar to look like the jpg
* Constants for things like image sizes, rather than hard-coding into views
* Refactor app scss into file/folder structure (sass-globbing?)
* Write some custom JS (perhaps an ajax search?)

## Later

* Implement a "stars" rating display. Sprite?
* IE7 testing and support strategy (need to get VM XP serial/activation first)
* Consider: remove dependency on zurb-foundation gem, add foundation sass directly to project (consider upgrade path though. Temptation to tweak foundation itself?)
* Consider: sass-globbing: So you can do @import "library/**/*"
* HTML utility library for links etc
* Image service? Generating image tags?
* Model layer for things like products? Generating image elements?
* Implement a 404 handler (Oops! page)

## Done

### 2013-05-22

* Extend grunt with compass (dev: 248k, prod: 97k).
* Grab some images for the product data.
* Move featured product html into partials, hook up to images.

### 2013-05-21

* Extend grunt with jshint
* Setup gruntfile, create compiled JS, hook into base.html
* Update README.md

### 2013-05-19

* Lay out some elements in index.html to mock FE test screen.jpg (client-side only)
* Cherry pick some colours from the jpg and link with F4's semantic colours: http://foundation.zurb.com/docs/sass.html
* Setup a node.js / express server