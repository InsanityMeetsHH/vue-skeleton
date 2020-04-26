# Vue Skeleton - InsanityMeetsHH

[**Demo page**](http://vue.insanitymeetshh.net)

## Included
* [jQuery 3](http://jquery.com)
* [Bootstrap 4](https://getbootstrap.com)
* [Font Awesome 5](https://fontawesome.com)
* [Slick Carousel 1](http://kenwheeler.github.io/slick/)
* [LazyLoad 15](https://www.andreaverlicchi.eu/lazyload/)
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
* [Docker](https://www.docker.com/) ([for installation with Docker](https://github.com/InsanityMeetsHH/vue-skeleton#installation-with-docker))

## Installation (Recommended)
```bash
$ git clone https://github.com/InsanityMeetsHH/vue-skeleton.git [app-name]
$ cd [app-name]
$ rm -rf .git (unix) / rmdir .git /s (windows)
$ npm i
$ gulp build
$ gulp (in development)
```
Change `browserSyncInit` task in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js), if you want to use Docker as server.

## Project Commands
|                     | Description                                                                                                                |
|---------------------|----------------------------------------------------------------------------------------------------------------------------|
| gulp                | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync)                                            |
| gulp build          | executes following tasks: cleanUp, scss, scssLint, js, jsLint, jsRequire, json, img, font, svg, vue, vueJs, vueLint        |
| gulp lintAll        | executes following tasks: scssLint, jsLint, vueJsLint, vueLint                                                             |
| gulp cleanUp        | clean up public folder                                                                                                     |
| gulp font           | copy font files                                                                                                            |
| gulp img            | copy and compress images                                                                                                   |
| gulp js             | uglify, minify and concat js files                                                                                         |
| gulp jsLint         | checks js follows [lint rules](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/js-lint.json)           | 
| gulp jsRequire      | copy, uglify and rename files for requirejs                                                                                |
| gulp json           | copy and minify json files                                                                                                 |
| gulp scss           | compile, minify and concat scss files                                                                                      |
| gulp scssLint       | checks scss follows [lint rules](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/scss-lint.json)       |
| gulp svg            | copy and compress svg files                                                                                                |
| gulp vue            | transpile vue files                                                                                                        |
| gulp vueJs          | transpile vue js files                                                                                                     |
| gulp vueJsLint      | checks vue js follows [lint rules](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/import-lint.json)   |
| gulp vueLint        | checks vue follows [lint rules](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/vue-lint.json)         |
| gulp watch          | watch scss, js, json, vue, img, font and svg files                                                                         |

## Localization
- [`i18n-locales.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/app/i18n-locales.js)
- [`langswitch.vue`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/component/partial/langswitch.vue)

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
* [ESLint Js Rules](https://eslint.org/docs/rules/)
* [ESLint Vue Rules](https://vuejs.github.io/eslint-plugin-vue/rules/)
* [ESLint Import Rules](https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules)
* [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
* [Vue SFC](https://github.com/nfplee/gulp-vue-single-file-component)
* [Path to RegExp](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
