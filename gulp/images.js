const gulp = require(`gulp`);
const imagemin = require(`gulp-imagemin`);

// npx gulp images
module.exports = function images() {
  return gulp.src(`src/img/**/*.{png,jph,svg}`)
      .pipe(imagemin([
        imagemin.optipng({
          optimizationLevel: 3
        }),
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.svgo()
      ]))
      .pipe(gulp.dest(`src/img`));
};
