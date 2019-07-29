var browserSync = require('browser-sync').create();
var del         = require('del');
var gulp        = require('gulp');
var prefixer    = require('gulp-autoprefixer');
var babel       = require('gulp-babel');
var browserify  = require('gulp-browserify');
var minifyCss   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var eslint      = require('gulp-eslint');
var imagemin    = require('gulp-imagemin');
var minifyJson  = require('gulp-jsonminify');
var plumber     = require('gulp-plumber');
var rename      = require('gulp-rename');
var sass        = require('gulp-sass');
var sassLint    = require('gulp-sass-lint');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify-es').default;
var vueSfc      = require('gulp-vue-single-file-component');
var vueify      = require('gulp-vueify2');

var config      = require('./gulpfile-config.json');

function browserifyCustom() {
    return gulp.src('src/js/vue/app.js')
        .pipe(plumber())
        .pipe(browserify({
            debug: true,
            transform: [['vueify'], {sourceType: "module"}]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/vue2/'));
}

gulp.task('vueify', function () {
  return gulp.src('src/js/vue/components/**/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('public/js/vue2/'));
});

// processing scss to css and minify result
function scss() {
    return gulp.src(config.sourcePath + 'scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(config.systemPath + 'css/'))
        .pipe(gulp.dest(config.publicPath + 'css/'));
}

// lint scss files
function scssLint() {
    return gulp.src([
            config.sourcePath + 'scss/**/*.scss'
        ])
        .pipe(sassLint(require('./scss-lint.json')))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
}

// concatinate and uglify js files
function js() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
//            'node_modules/requirejs/require.js',
//            'node_modules/vue/dist/vue.js', // for DEV
//            'node_modules/vue/dist/vue.min.js', // for PROD
//            'node_modules/@fortawesome/fontawesome-free/js/all.js',
            config.sourcePath + 'js/lib/**/*.js',
//            'node_modules/vue-router/dist/vue-router.js', // for DEV
//            'node_modules/vue-router/dist/vue-router.min.js', // for PROD
//            'node_modules/vue-i18n/dist/vue-i18n.js',
//            'node_modules/@fortawesome/fontawesome-svg-core/index.js',
//            'node_modules/@fortawesome/free-brands-svg-icons/index.js',
//            'node_modules/@fortawesome/free-regular-svg-icons/index.js',
//            'node_modules/@fortawesome/free-solid-svg-icons/index.js',
//            'node_modules/@fortawesome/vue-fontawesome/index.js',
            'node_modules/slick-carousel/slick/slick.js',
            'node_modules/cssuseragent/cssua.js',
            'node_modules/vanilla-lazyload/dist/lazyload.js',
            'node_modules/cookieconsent/src/cookieconsent.js',
            config.sourcePath + 'js/plugin/**/*.js',
            config.sourcePath + 'js/module/**/*.js',
//            config.sourcePath + 'js/vue/**/*.js',
            config.sourcePath + 'js/scripts.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest(config.systemPath + 'js/'))
        .pipe(gulp.dest(config.publicPath + 'js/'));
}

// lint js files
function jsLint() {
    return gulp.src([
            config.sourcePath + 'js/{lib,module,plugin}/*.js',
            config.sourcePath + 'js/scripts.js'
        ])
        .pipe(eslint(require('./js-lint.json')))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

// copy all json files and minify
function json() {
    return gulp.src([
            config.sourcePath + 'json/**/*.json'
        ])
        .pipe(minifyJson())
        .pipe(gulp.dest(config.publicPath + 'json/'));
}

// compress images
function img() {
    return gulp.src(config.sourcePath + 'img/**/*.{png,gif,jpg,jpeg,ico,xml,json,svg}')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
//        .pipe(gulp.dest(config.systemPath + 'img/'))
        .pipe(gulp.dest(config.publicPath + 'img/'));
}

// copy font files
function font() {
    return gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/webfonts/**',
            'node_modules/slick-carousel/slick/fonts/**',
            config.sourcePath + 'font/**'
        ])
//        .pipe(gulp.dest(config.systemPath + 'font/'))
        .pipe(gulp.dest(config.publicPath + 'font/'));
}

// compress and copy svg files
function svg() {
    return gulp.src([
//            'node_modules/@fortawesome/fontawesome-free/svgs/**',
//            'node_modules/@fortawesome/fontawesome-free/sprites/**',
            config.sourcePath + 'svg/**/*.svg'
        ])
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
//        .pipe(gulp.dest(config.systemPath + 'svg/'))
        .pipe(gulp.dest(config.publicPath + 'svg/'));
}

// transpile vue js files
function vueJs() {
    return gulp.src(config.sourcePath + 'js/vue/**/*.js')
        .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
        .pipe(gulp.dest(config.publicPath + 'js/vue/'));
}

// transpile vue files
function vue() {
    return gulp.src(config.sourcePath + 'js/vue/components/**/*.vue')
        .pipe(vueSfc({ debug: false, loadCssMethod: 'loadCss' }))
        .pipe(babel({ plugins: ['@babel/plugin-transform-modules-amd'] }))
        .pipe(rename({ extname: '.js' }))
        .pipe(gulp.dest(config.publicPath + 'js/vue/components/'));
}

// clean up folders
function cleanUp() {
//    del([
//            config.systemPath + 'css/**/*',
//            config.systemPath + 'js/**/*',
//            config.systemPath + 'img/**/*',
//            config.systemPath + 'json/**/*',
//            config.systemPath + 'font/**/*',
//            config.systemPath + 'svg/**/*'
//        ], {force: true});
        
    return del([
            config.publicPath + 'css/**/*',
            config.publicPath + 'js/**/*',
            '!' + config.publicPath + 'js/require.js',
            '!' + config.publicPath + 'js/vue.js',
            '!' + config.publicPath + 'js/vue-router.js',
            '!' + config.publicPath + 'js/vue-i18n.js',
            '!' + config.publicPath + 'js/fontawesome-svg-core.js',
            '!' + config.publicPath + 'js/free-brands-svg-icons.js',
            '!' + config.publicPath + 'js/free-regular-svg-icons.js',
            '!' + config.publicPath + 'js/free-solid-svg-icons.js',
            '!' + config.publicPath + 'js/vue-fontawesome.js',
            config.publicPath + 'img/**/*',
            config.publicPath + 'json/**/*',
            config.publicPath + 'font/**/*',
            config.publicPath + 'svg/**/*'
        ]);
}

// initialize BrowserSync
function browserSyncInit(done) {
    // start browsersync
    browserSync.init({
        proxy: config.localServer
    });
    done();
}

// reload browser
function browserSyncReload(done) {
    browserSync.reload();
    done();
}

// watch files
function watch() {
    // watch scss files
    gulp.watch(config.sourcePath + 'scss/**', gulp.series(scss, scssLint));
    // watch js files
    gulp.watch([
        config.sourcePath + 'js/{lib,module,plugin}/*.js',
        config.sourcePath + 'js/scripts.js'
    ], gulp.series(js, jsLint));
    // watch vue files
    gulp.watch(config.sourcePath + 'js/vue/**', gulp.series(vue, vueJs));
    // watch images
    gulp.watch(config.sourcePath + 'img/**', img);
    // watch json files
    gulp.watch(config.sourcePath + 'json/**', json);
    // watch fonts
    gulp.watch(config.sourcePath + 'font/**', font);
    // watch svg
    gulp.watch(config.sourcePath + 'svg/**', svg);
}

// watch files and reload browser on file change
function watchAndReload() {
    // watch scss files
    gulp.watch(config.sourcePath + 'scss/**', gulp.series(scss, scssLint));
    // watch js files
    gulp.watch([
        config.sourcePath + 'js/{lib,module,plugin}/*.js',
        config.sourcePath + 'js/scripts.js'
    ], gulp.series(js, jsLint));
    // watch vue files
    gulp.watch(config.sourcePath + 'js/vue/**', gulp.series(vue, vueJs));
    // watch images
    gulp.watch(config.sourcePath + 'img/**', img);
    // watch json files
    gulp.watch(config.sourcePath + 'json/**', json);
    // watch fonts
    gulp.watch(config.sourcePath + 'font/**', font);
    // watch svg
    gulp.watch(config.sourcePath + 'svg/**', svg);
    
    gulp.watch(config.publicPath + '**/*.{css,eot,ico,js,jpg,otf,png,svg,ttf,woff,woff2}', browserSyncReload);
    gulp.watch('templates/**/*.{php,html,phtml}', browserSyncReload);
}

exports.browserifyCustom = browserifyCustom;
exports.scss = scss;
exports.scssLint = scssLint;
exports.js = js;
exports.jsLint = jsLint;
exports.json = json;
exports.img = img;
exports.font = font;
exports.svg = svg;
exports.vueJs = vueJs;
exports.vue = vue;
exports.cleanUp = cleanUp;
exports.watch = watch;
exports.watchAndReload = watchAndReload;
exports.browserSyncInit = browserSyncInit;
exports.browserSyncReload = browserSyncReload;

// build task
gulp.task('build', gulp.series(cleanUp, scss, js, scssLint, jsLint, json, img, font, svg, vue, vueJs));

// default task if just called gulp
gulp.task('default', gulp.parallel(watchAndReload, browserSyncInit));