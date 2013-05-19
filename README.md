# Big Commerce - Senior FE Assignment

## Assignment

Your challenge is to replicate the attached screenshots of the homepage of a mocked store front
template. You are free to build the interface as you deem appropriate (front end frameworks; JS libs;
web standards; OOCSS).

Think of this page as part of a much larger site (i.e. don’t treat this as just the one page), and think about
how components (for example, the sidebar widget) can be easily re-used in other parts of the page and
site. 

We are expecting that your code will be ‘production like’, so take care.

Browser support: IE7+, latest Firefox, Chrome and Safari

## Core Tech

* Foundation v4: this allows me to get up and running very quickly with a grid and some decent css, rather than hand-crafting everything from scratch.
* Git + Bitbucket: The VCS of choice, coupled with Bitbucket for a (free) private repo.

## Other choices and notes

* Compass: What Foundation uses for compiling its SCSS.
* Zepto, with jQuery fallback for IE. Since conditional comments are not supported in IE10, we use document.write instead. This is a Foundation4 decision.

## Installation

### Apache vhost

```
<VirtualHost *:80>
    DocumentRoot "/home/scottm/dev/projects/bcass/public"
    ServerName bcass.local
    ServerAdmin scott@maclure.com.au
    SetEnv APPLICATION_ENV "development"
    <Directory /home/scottm/dev/projects/bcass/public>
        DirectoryIndex index.html
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
```

### Building the project

To compile sass:

`compass compile`

To run the background:

`compass watch`

### Running

http://bcass.local/