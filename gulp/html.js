const gulp = require(`gulp`);
const posthtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);
const htmlmin = require(`gulp-htmlmin`);

module.exports = function html() {
  return gulp.src(`src/*.html`)
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(`build`));
};
