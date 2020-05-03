const gulp = require(`gulp`);

module.exports = function copy() {
  return gulp.src([
    `src/fonts/**/*.{woff,woff2}`,
    `src/img/**`,
    `src/js/**/*.{js,json}`,
    `src/*.ico`
  ], {
    base: `src`
  })
  .pipe(gulp.dest(`build`));
};
