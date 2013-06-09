# BC - Senior FE Assignment

The following project is my submission for the BC FE assignment.

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

* Compass: What Foundation uses for compiling its SCSS.
* Zepto, with jQuery fallback for IE. Since conditional comments are not supported in IE10, we use document.write instead. This is a Foundation4 decision. Still need to research this in terms of IE7 support for Foundation v4.

## Installation

Setup the project `git clone git@github.com:ScottMaclure/bcass.git`.

Note: May be renamed to something more generic later.

### Recommended git config

Make sure you have your name + email set:
`user.email=you@email.com`
`user.name=Your Name`

Don't do fast-forward merges, means my standard update is: git pull --ff -r (or git fetch && git rebase)
`merge.ff=false`

Only push the current branch:
`push.default=simple`

Normalise to LF when committing:
`core.autocrlf=input`

### Ruby Gems

```
[sudo] gem install sass compass zurb-foundation sass-globbing
```

Note: May remove some of these dependencies later, for example just dropping zurb's sass directly into the project. At this point, ruby will remain a dependency due to sass.

Windows users: you may need to install ruby devkit to install native implementations of gems. Else you may end up with different output.

### Apache vhost

If you want to run it through port 80, use apache as a reverse-proxy:

```
<VirtualHost *:80>
    DocumentRoot "/path/to/bcass/public"
    ServerName bcass.local
    ServerAdmin scott@maclure.com.au
    SetEnv APPLICATION_ENV "development"
    <Directory /path/to/bcass/public>
        DirectoryIndex index.html
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
```

Don't forget to add an entry to `/etc/hosts`:

`127.0.0.1 bcass.local`

## Grunt

To build css and js in "dev mode" (typically uncompressed css, with line comments), and finish in "watch" mode:

`grunt dev`

To minify/compress for production:

`grunt prod`

## Deployment

QnD way of re-deploying the app on a server:

`./deploy.sh`

* Pulls (ff) the latest from git
* Runs Grunt
* Restarts node app using forever

## Fire it up!

Directly through node:

http://localhost:3000/

Or through apache:

http://bcass.local/
