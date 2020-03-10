/**
 * Lint given files
 *
 * @param gulp mixed
 * @param module mixed
 * @param paths array
 * @param lintFile string
 * @return gulp signal
 */
function lint(gulp, module, paths, lintFile) {
    return gulp.src(paths)
        .pipe(module(require('./' + lintFile + '-lint.json')))
        .pipe(module.format())
        .pipe(module.failOnError());
}

module.exports = lint;
