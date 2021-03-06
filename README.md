# Vue Skeleton - InsanityMeetsHH

[**Demo page**](http://vue.insanitymeetshh.net)

## Table of contents
- [Included Third Party Code](#included)
- Install Guides
    - [Install Production Build (Recommended)](#install-production-build-recommended)
    - [Install Master/ Develop Build](#install-master-develop-build)
    - [Install PHP (optional)](#install-php-optional)
- [Project Commands](#project-commands)
- [`gulpfile.json`](#gulpfilejson)
- [Localization](#localization)
- [Links](#links)

## Included
* [jQuery 3](http://jquery.com)
* [Bootstrap 4](https://getbootstrap.com)
* [Font Awesome 5](https://fontawesome.com)
* [Slick Carousel 1](http://kenwheeler.github.io/slick/)
* [LazyLoad 17](https://www.andreaverlicchi.eu/vanilla-lazyload/)
* [CSS User Agent 2](https://www.npmjs.com/package/cssuseragent)
* [Cookieconsent 3](https://github.com/insites/cookieconsent)
* [Vue 2](https://vuejs.org/)
* [Vue Router 3](https://router.vuejs.org/)
* [Vue i18n 8](https://kazupon.github.io/vue-i18n/)
* [Vue SFC 1](https://github.com/nfplee/gulp-vue-single-file-component)

## Install Production Build (Recommended)

[Download zip](https://github.com/InsanityMeetsHH/vue-skeleton/archive/production.zip) if you don't have git on your OS.
Open console on your OS and navigate to your project folder.
```bash
$ (optional) php composer create-project insanitymeetshh/vue-skeleton vue-skeleton "dev-production"
$ git clone https://github.com/InsanityMeetsHH/vue-skeleton.git
$ cd vue-skeleton
$ git checkout production
$ (optional on unix) rm -rf .git
$ (optional on windows) rmdir .git /s
```
If you need PHP, you have to go to [Install PHP](#install-php-optional).

## Install Master/ Develop Build
### Required
- [Node.js](http://nodejs.org/en/download/)
- [npm](http://www.npmjs.com/get-npm) `$ npm i npm@latest -g`
- [gulp-cli](https://www.npmjs.com/package/gulp-cli) `$ npm i gulp-cli@latest -g`

[Download zip](https://github.com/InsanityMeetsHH/vue-skeleton/archive/master.zip) if you don't have git on your OS.
Open console on your OS and navigate to your project folder.
```bash
$ (optional) php composer create-project insanitymeetshh/vue-skeleton
$ git clone https://github.com/InsanityMeetsHH/vue-skeleton.git
$ cd vue-skeleton
$ (optional) git checkout develop
$ (optional on unix) rm -rf .git
$ (optional on windows) rmdir .git /s
$ npm i
$ gulp build
$ gulp
```
Open [localhost:3000](http://localhost:3000) for Website.

## Install PHP (optional)
### Required
- [Docker](https://www.docker.com/)

Open console on your OS and navigate to the unziped/ cloned app folder.
```bash
$ (unix) systemctl docker start
$ (windows) "c:\path\to\Docker Desktop.exe"
$ docker-compose up -d
```
Open [localhost:3050](http://localhost:3050) for Website.

## Project Commands
|                     | Description                                                                                                                |
|---------------------|----------------------------------------------------------------------------------------------------------------------------|
| gulp                | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync)                                            |
| gulp build          | executes following tasks: cleanUp, favicon, font, img, js, jsLint, jsRequire, json, scss, scssLint, svg, vue, vueJs, vueJsLint, vueLint |
| gulp lintAll        | executes following tasks: jsLint, scssLint, vueJsLint, vueLint                                                             |
| gulp cleanUp        | clean up public folder                                                                                                     |
| gulp favicon        | generate favicons                                                                                                          |
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

## [`gulpfile.json`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/gulpfile.dist.json)
|                     | Description                                                                                                                      |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------|
| browserSyncConfig   | Required - Defines which config is used for [BrowserSync](https://www.npmjs.com/package/browser-sync) (default: browserSyncDev)  |
| sourcePath          | Required - Path to raw files (default: src/)                                                                                     |
| publicPath          | Required - Path to transpiled files (default: public/)                                                                           |
| systemPath          | Optional - Alternative Path to transpiled files on CMS, ECS, PHP Framework, ... (default: path/to/system/)                       |
| env                 | Required - Environment dev, test or prod (default: dev)                                                                          |

## Links
* [ESLint Js Rules](https://eslint.org/docs/rules/)
* [ESLint Vue Rules](https://vuejs.github.io/eslint-plugin-vue/rules/)
* [ESLint Import Rules](https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules)
* [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
* [Vue SFC](https://github.com/nfplee/gulp-vue-single-file-component)
* [Path to RegExp](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters)
