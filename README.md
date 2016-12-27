# bernedef.github.io

This repository contains the source code of my [GitHub Pages website][2] &raquo; be curious about it! This is also my HTML boilerplate.

All my open-source projects are available on my [GitHub user page][1].

[1]: https://github.com/bernedef
[2]: https://bernedef.github.io/

## Possible improvements

Here's a non-exhaustive list of possible improvents for this HTML boilerplate.

### Make fewer HTTP requests

JS and CSS files should be respectively combined into a unique file in order to limit the number of HTTP requests on page load.

Also, when images have to be used for the design of the website, they can be combined into a one bigger file by using [CSS sprites](https://www.giftofspeed.com/sprite-generator).

More information at https://www.giftofspeed.com/fewer-http-requests

### Fallback method to keep libraries loading even though CDN is not available

Download a copy of each libraries to a local script assets directory (e.g. `assets/js`).

Then, right after each `<script>` that loads a library from CDN, insert this line:

```html
<script>window.{object} || document.write('<script src="{file}"><\/script>')}</script>
```

and replace `{file}` with the local library file path and `{object}` with the library main object.

For instance:

```html
<script>window.Modernizr || document.write('<script src="assets/js/modernizr.min.js"><\/script>')}</script>

<script>window.html5 || document.write('<script src="assets/js/html5shiv.min.js"><\/script>')}</script>

<script>window.respond || document.write('<script src="assets/js/respond.min.js"><\/script>')}</script>
```

### Needed changes to get started with Angular.js and Angular Material

Add a `ng-app` attribute to the `html` tag, for instance:

```html
<html ng-app="WebApp">
```

Add the follwing rules to the main web app CSS:

```css
[ng-cloak] {
   display: none !important;
}
```

Add the following `script` tag to the HTML document to load Angular.js:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular.min.js"></script>
```

Add the `ng-cloak` attribute to any element that must be hidden until the web app becomes operational.

To get started with Angular.js: https://docs.angularjs.org/misc/started

To get started with Angular Material: https://material.angularjs.org/latest/getting-started

### Remove text shadow and change color of selection highlight

Here's an example of a text shadow glitch as it could happen during a selection :

[![...](http://bit.ly/cKNAd8)](https://twitter.com/miketaylr/status/12228805301)

To fix that, add the following rules to the main web app CSS:

```css
::-moz-selection {
   background: {color};
   text-shadow: none;
}

::selection {
   background: {color};
   text-shadow: none;
}
```

and replace `{color}` with the desired selection highlight color (tip: *also change text color*).

### Edit the Adobe cross-domain policy file (a.k.a. crossdomain.xml)

The Adobe cross-domain policy is currently set as the most restrictive one (disallow all cross-domain requests):

```xml
<site-control permitted-cross-domain-policies="none" />
```

Configuration for the least restrictive cross-domain policy (allow all kinds of request from all origins):

```xml
<site-control permitted-cross-domain-policies="all" />
<allow-access-from domain="*" to-ports="*" secure="false" />
<allow-http-request-headers-from domain="*" headers="*" secure="false" />
```

More information at http://adobe.com/devnet/articles/crossdomain_policy_file_spec.html

### `{display: table*}` polyfill for Internet Explorer 6 and 7

All details about this polyfill at http://tanalin.com/en/projects/display-table-htc

**_How to use an HTC (HTML Component) polyfill?_**

An HTC script is generally included in a CSS block using the `behavior` property where the polyfill it carries must take place. The URL to the HTC file must be relative to the HTML document, not relative to the CSS. As advice, use absolute path:

```css
selector {
	behavior: url(/example.htc);
}
```

Make sure to also check the HTTP server configuration and update it to use the correct content-type if needed. For instance, on a Apache server, add the following rule in the website's .htaccess file: `AddType text/x-component .htc`

### Note about the unsupported HTML5 tags in Firefox 2 *and older*

Firefox 2 (or any other Gecko-based browser with a Gecko version pre 1.9b5) has a parsing bug where it will close an unknown element when it sees the start tag of a "block" element like `p`, `h1`, `div`, and so forth.

Here are the fixes: https://remysharp.com/2009/04/14/html5-and-firefox2#the-fixes

### Note about the minimum error page size in Internet Explorer

Internet Explorer requires custom error pages to be at least 512 bytes in size to be properly displayed:

http://blogs.msdn.com/b/ieinternals/archive/2010/08/19/http-error-pages-in-internet-explorer.aspx

## Useful Git/GitHub tips

Here's a collection of some useful Git/GitHub tips and commands.

### Restart a Git repository from scratch

In the local repository, to restart it from scratch (delete all Git data), execute:

```sh
rm -rf .git
git init
```

and to commit all the files contained in the repository's directory, execute:

```sh
git add .
git status
git commit -m "Initial commit"
```

Then, to push the new local repository on GitHub (warning: the remote repository will be overwritten), execute:

```sh
git remote add origin https://github.com/{username}/{repository}.git
git push --force --set-upstream origin master
```

where `{username}` and `{repository}` have to be replaced to match the target GitHub repository.

### Use syntax highlighting in Markdown code blocks

In order to syntax highlight code blocks in a Markdown file on GitHub, an optional language identifier must be used. For instance, to syntax highlight Ruby code:

```
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
`` `
```

Which renders:

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

The list of all supported languages (valid keywords) for syntax highlighting is available [here](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).
