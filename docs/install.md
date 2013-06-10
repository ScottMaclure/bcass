# Installation

Setup the project `git clone git@github.com:ScottMaclure/feTest.git`.

Note: May be renamed to something more generic later.

## Recommended git config

Make sure you have your name + email set:
`user.email=you@email.com`
`user.name=Your Name`

Don't do fast-forward merges, means my standard update is: git pull --ff -r (or git fetch && git rebase)
`merge.ff=false`

Only push the current branch:
`push.default=simple`

Normalise to LF when committing:
`core.autocrlf=input`

## Ruby Gems

```
[sudo] gem install sass compass zurb-foundation sass-globbing
```

Note: May remove some of these dependencies later, for example just dropping zurb's sass directly into the project. At this point, ruby will remain a dependency due to sass.

Windows users: you may need to install ruby devkit to install native implementations of gems. Else you may end up with different output.

## NPM dependencies

`npm install` does the trick. No sudo should be required there.

## Apache vhost

If you want to run it through port 80, use apache as a reverse-proxy. You'll need to enable modules:

* proxy_module
* proxy_http

And the vhost config:

```
<VirtualHost *:80>

    DocumentRoot "/path/to/feTest/public"
    ServerName feTest.local
    ServerAdmin scott@maclure.com.au

    # For future use. Define the "mode" the app will run in on this server.
    SetEnv APPLICATION_ENV "development"

    <Directory /path/to/feTest/public>
        DirectoryIndex index.html
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>

    # Pass the Host: line from the incoming request to the proxied host. Useful where where the original Host header needs to be evaluated by the backend server.
    ProxyPreserveHost On

    # Serve certain static assets / content via apache
    ProxyPass /public !
    ProxyPass /fonts !
    ProxyPass /images !
    ProxyPass /javascripts !
    ProxyPass /stylesheets !
    ProxyPass /robots.txt !

    # All other requests get routed to the node.js app
    ProxyPass / http://localhost:3000/ retry=5
    ProxyPassReverse / http://localhost:3000/ retry=5

</VirtualHost>
```

Don't forget to add an entry to `/etc/hosts`:

`127.0.0.1 feTest.local`

To test if your request is being served by apache only, or node, check the response header for:

```
X-Powered-By:Express
```

## Grunt

To build css and js in "dev mode" (typically uncompressed css, with line comments), and finish in "watch" mode:

`grunt dev`

To minify/compress for production:

`grunt prod`

## Deployment

QnD way of re-deploying the app on a server:

`./deploy.sh`

* Pulls (ff) the latest from git
* Runs Grunt prod
* Restarts node app using forever

## Fire it up!

Directly through node:

http://localhost:3000/

Or through apache:

http://fetest.local/
