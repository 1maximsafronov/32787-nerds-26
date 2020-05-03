const gulp = require(`gulp`);
const csso = require(`gulp-csso`);
const sass = require(`gulp-sass`);
const rename = require(`gulp-rename`);
const server = require(`browser-sync`).create();
const plumber = require(`gulp-plumber`);
const postcss = require(`gulp-postcss`);
const sourcemaps = require(`gulp-sourcemaps`);
const autoprefixer = require(`autoprefixer`);
const normalize = require(`node-normalize-scss`);


module.exports = function css() {
  return gulp.src(`src/sass/style.scss`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: normalize.includePaths
    }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename(`style.min.css`))
    .pipe(sourcemaps.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
};
