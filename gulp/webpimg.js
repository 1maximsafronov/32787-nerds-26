const gulp = require(`gulp`);
const webp = require(`gulp-webp`);

// npx gulp webpimg
module.exports = function webpimg() {
  return gulp.src(`src/img/**/*.{png,jpg}`)
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest(`src/img`));
};
