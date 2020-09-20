# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0]
### Added
- [`partial/naviagation.vue`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/component/partial/naviagation.vue)
- CSS lazy class in [`page/home.vue`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/component/page/home.vue)

### Changed
- [`app/filters.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/app/filters.js) comments
- [`layout/default.vue`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/component/layout/default.vue)
- [`partial/langswitch.vue`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/component/partial/langswitch.vue)
- order in cleanUp task and how to remove files from js/css folder in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js)
- favicon task in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js)
- @babel/core 7.10.1 to 7.11.6
- @babel/plugin-transform-modules-amd 7.10.1 to 7.10.5
- @fortawesome/fontawesome-free 5.13.0 to 5.14.0
- @fortawesome/fontawesome-svg-core 1.2.28 to 1.2.30
- @fortawesome/free-brands-svg-icons 5.13.0 to 5.14.0
- @fortawesome/free-regular-svg-icons 5.13.0 to 5.14.0
- @fortawesome/free-solid-svg-icons 5.13.0 to 5.14.0
- @fortawesome/vue-fontawesome 0.1.9 to 2.0.0
- bootstrap 4.5.0 to 4.5.2
- browser-sync 2.26.7 to 2.26.12
- eslint-plugin-import 2.20.2 to 2.22.0
- moment 2.26.0 to 2.28.0
- vanilla-lazyload 15.2.0 to 17.1.2
- vue 2.6.11 to 2.6.12
- vue-i18n 8.18.1 to 8.21.1
- vue-router 3.3.2 to 3.4.3

### Removed
- partial/header.vue
- partial/footer.vue

## [1.2.0] - 2020-05-30
### Added
- gulp-favicons 2.4.0
- `require-config.js` watcher in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js)
- favicon task in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js)
- [`favicon.png`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/img/favicon.png)

### Changed
- order of tasks in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js)
- favicon html in [`index.html`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/public/index.html)
- [`require-config.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/module/require-config.js)
- [`README.md`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/README.md)
- @babel/core 7.9.0 to 7.10.1
- @babel/plugin-transform-modules-amd 7.9.0 to 7.10.1
- bootstrap 4.4.1 to 4.5.0
- jquery 3.4.1 to 3.5.1
- moment 2.24.0 to 2.26.0
- vanilla-lazyload 15.1.1 to 15.2.0
- vue-i18n 8.17.3 to 8.18.1
- vue-router 3.1.6 to 3.3.2

### Removed
- `src/img/favicons` folder
- browserSyncInit() config in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js) and moved in [`gulpfile.json`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/gulpfile.dist.json)

## [1.1.0] - 2020-04-26
### Added
- [`filters.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/app/filters.js)
- filters in [`app.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/app.js)
- `window.app` in [`app.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/app.js)
- moment and lintAll task in [`gulpfile.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/gulpfile.js)
- [`npm-postinstall.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/npm-postinstall.js)
- moment 2.24.0

### Changed
- all bg-info to bg-primary
- [`import-lint.json`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/import-lint.json)
- [`js-lint.json`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/js-lint.json)
- [`vue-lint.json`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/app/vue-lint.json)
- Date time fomats in [`i18n-locales.js`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/src/js/vue/app/i18n-locales.js)
- [`README.md`](https://github.com/InsanityMeetsHH/vue-skeleton/blob/master/README.md)
- @babel/core 7.8.7 to 7.9.0
- @babel/plugin-transform-modules-amd 7.8.3 to 7.9.0
- eslint-plugin-import 2.20.1 to 2.20.2
- gulp-clean-css 4.2.0 to 4.3.0
- gulp-sass 4.0.2 to 4.1.0
- fontawesome 5.12.1 to 5.13.0
- vanilla-lazyload 13.0.1 to 15.1.1
- vue-i18n 8.15.5 to 8.17.3

### Removed
- `src/php/npm-postinstall.php`