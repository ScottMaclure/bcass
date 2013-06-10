# Senior FE Assignment

## Overview

The following repo is an implementation of a Senior Frontend Engineer assignment.

See docs/install.md for instructions on getting everything set up.

See docs/todo.md for a todo list.

## Assignment

Your challenge is to replicate the attached screenshots of the homepage of a mocked store front
template. You are free to build the interface as you deem appropriate (front end frameworks; JS libs;
web standards; OOCSS).

Think of this page as part of a much larger site (i.e. don’t treat this as just the one page), and think about
how components (for example, the sidebar widget) can be easily re-used in other parts of the page and
site. 

We are expecting that your code will be ‘production like’, so take care.

Browser support: IE7+, latest Firefox, Chrome and Safari

## Core Technical Choices

* Foundation v4: this allows me to get up and running very quickly with a grid and some decent css, rather than hand-crafting everything from scratch. A few JS modules that come in handy as well. I'd customise this later.
* Node.js, Express: Server-side tech for rendering. Basic server-app, to be replaced later with some established framework, like Sails.js.
* Git: The VCS of choice.
* Grunt: For automating tasks like minification etc. Very useful swiss-army knife. Moar Node!

## Other choices and notes

* Compass: What Foundation uses for compiling its SCSS. Useful utilities like sprite generation.
* Zepto, with jQuery fallback for IE. Since conditional comments are not supported in IE10, we use document.write instead. This is a Foundation4 decision. Still need to research this in terms of IE7 support for Foundation v4.
