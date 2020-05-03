const gulp = require(`gulp`);
const sourcemaps = require(`gulp-sourcemaps`);
const rollup = require(`gulp-better-rollup`);
const babel = require(`rollup-plugin-babel`);
const rename = require(`gulp-rename`);
// const terser = require('gulp-terser');

module.exports = function js() {
  return gulp.src(`src/js/main.js`)
    .pipe(sourcemaps.init())
    .pipe(rollup({plugins: [babel()]}, `iife`))
    // .pipe(terser())
    .pipe(rename(`main.min.js`))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`build/js`));
};
