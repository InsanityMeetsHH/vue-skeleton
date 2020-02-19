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
$ node server.js
```
Change `localServer` in [`gulpfile-config.json`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile-config.dist.json) to your local server.

Possible local servers (examples): http://imhh-vue.localhost/ or http://localhost/imhh-vue/public/.

## Project Commands
|               | Description                                                                                                     |
|---------------|-----------------------------------------------------------------------------------------------------------------|
| gulp          | watch files and start [BrowserSync](https://www.npmjs.com/package/browser-sync)                                 |
| gulp build    | executes following tasks: cleanUp, scss, js, scssLint, jsLint, img, font, svg                                   |
| gulp cleanUp  | clean up public folder                                                                                          |
| gulp font     | copy font                                                                                                       |
| gulp img      | compress/copy img                                                                                               |
| gulp js       | uglify/minify/concat js                                                                                         |
| gulp jsLint   | checks js follows [lint rules](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/js-lint.json)        |
| gulp scss     | compile/minify/concat scss                                                                                      |
| gulp scssLint | checks scss follows [lint rules](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/scss-lint.json)    |
| gulp svg      | compress/copy svg                                                                                               |
| gulp vue      | transpile vue file                                                                                              |
| gulp vueJs    | transpile vue js file                                                                                           |
| gulp watch    | watch scss, js, img, font and svg files                                                                         |

## Installation with [Docker](https://www.docker.com/)
* Get this project via `$ git clone` or zip download
* Open a command prompt on your OS (if not already open) and navigate to the project folder
* `$ npm i`
* `$ gulp build`
* `$ docker-compose up -d`
* Open [localhost:8080](http://localhost:8080) for website
* If you want to remove a container `$ docker rm [container-name] -f` e.g. `$ docker rm vue-skeleton -f`
* If you want to remove a volume `$ docker volume rm [volume-name]` e.g. `$ docker volume rm imhh-vue_logs` (first remove matching container)
* If you want to remove all container `$ docker rm $(docker ps -a -q) -f`
* If you want to remove all volumes `$ docker volume prune` (first remove all container)

## Links
* [ESLint Rules](https://eslint.org/docs/rules/)
* [Sass Lint Rules](https://github.com/sasstools/sass-lint/tree/develop/docs/rules)
* [Vue SFC](https://github.com/nfplee/gulp-vue-single-file-component)
