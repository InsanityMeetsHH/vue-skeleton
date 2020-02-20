# Vue Skeleton - InsanityMeetsHH

[**Demo page**](http://vue.insanitymeetshh.net)

## Included
* [jQuery 3](http://jquery.com)
* [Bootstrap 4](https://getbootstrap.com)
* [Font Awesome 5](https://fontawesome.com)
* [Slick Carousel 1](http://kenwheeler.github.io/slick/)
* [LazyLoad 8](https://www.andreaverlicchi.eu/lazyload/)
* [CSS User Agent 2](https://www.npmjs.com/package/cssuseragent)
* [Cookieconsent 3](https://github.com/insites/cookieconsent)
* [Vue 2](https://vuejs.org/)
* [Vue Router 3](https://router.vuejs.org/)
* [Vue i18n 8](https://kazupon.github.io/vue-i18n/)
* [Vue SFC 1](https://github.com/nfplee/gulp-vue-single-file-component)

## Required
* [Node.js](http://nodejs.org/en/download/)
* [npm](http://www.npmjs.com/get-npm) `$ npm i npm@latest -g`
* [gulp-cli](https://www.npmjs.com/package/gulp-cli) `$ npm i gulp-cli@latest -g`
* PHP => 5.3
* [Docker](https://www.docker.com/) ([for installation with Docker](https://github.com/InsanityMeetsHH/vue-skeleton#installation-with-docker))

## Installation (Recommended)
```bash
$ git clone https://github.com/InsanityMeetsHH/vue-skeleton.git [project-name]
$ cd [project-name]
$ rm -rf .git
$ npm i
$ gulp build
$ gulp browserSyncInit (in production)
$ gulp (in development)
```
Change `browserSyncInit` task in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js), if you want to use Docker as server.

## Project Commands
|                     | Description                                                                                                     |
|---------------------|-----------------------------------------------------------------------------------------------------------------|
| gulp                | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync)                                 |
| gulp build          | executes following tasks: cleanUp, scss, js, scssLint, jsLint, img, font, svg                                   |
| gulp cleanUp        | clean up public folder                                                                                          |
| gulp font           | copy font                                                                                                       |
| gulp img            | compress and copy img                                                                                           |
| gulp js             | uglify, minify and concat js                                                                                    |
| gulp jsLint         | checks js follows [lint rules](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/js-lint.json)        |
| gulp jsRequire      | copy, uglify and rename files for requirejs                                                                     |
| gulp scss           | compile/minify/concat scss                                                                                      |
| gulp scssLint       | checks scss follows [lint rules](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/scss-lint.json)    |
| gulp svg            | compress and copy svg                                                                                           |
| gulp vue            | transpile vue file                                                                                              |
| gulp vueJs          | transpile vue js file                                                                                           |
| gulp watch          | watch scss, js, img, font and svg files                                                                         |

## Installation with [Docker](https://www.docker.com/)
* Get project via `$ git clone https://github.com/InsanityMeetsHH/vue-skeleton.git` or [zip download](https://github.com/InsanityMeetsHH/vue-skeleton/archive/master.zip)
* Open a command prompt on your OS (if not already open) and navigate to the project folder
* `$ npm i`
* `$ gulp build`
* `$ docker-compose up -d`
* Open [localhost:3050](http://localhost:3050) for website
* If you want to remove the container `$ docker rm vue-skeleton -f`
* If you want to remove the volume `$ docker volume rm DIRNAME_logs` (first remove matching container)

## Links
* [ESLint Rules](https://eslint.org/docs/rules/)
* [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
* [Vue SFC](https://github.com/nfplee/gulp-vue-single-file-component)
