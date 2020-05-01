const del = require("del");
const gulp = require("gulp");
const csso = require("gulp-csso");
const sass = require("gulp-sass");
const webp = require("gulp-webp");
const rename = require("gulp-rename");
const server = require("browser-sync").create();
const uglify = require("gulp-uglify");
const ghpages = require("gh-pages");
const htmlmin = require("gulp-htmlmin");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const include = require("posthtml-include");
const imagemin = require("gulp-imagemin");
const posthtml = require("gulp-posthtml");
const svgstore = require("gulp-svgstore");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");

const buildFolder = "build";


gulp.task("publish", function () {
  return ghpages.publish(buildFolder, function(err) {});
});

// npx gulp images
gulp.task("images", function () {
  return gulp.src("src/img/**/*.{png,jph,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("src/img"));
});
// npx gulp webp
gulp.task("webp", function () {
  return gulp.src("src/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("src/img"));
});

gulp.task("sprite", function () {
  return gulp.src("src/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest(build + "/img"));
});

gulp.task("html", function () {
  return gulp.src("src/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(buildFolder));
});

gulp.task("css", function () {
  return gulp.src("src/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(buildFolder + "/css"))
    .pipe(server.stream());
});

gulp.task("jsmin", function () {
  return gulp.src("src/js/script.js")
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest(buildFolder + "/js"));
});

gulp.task("copy", function () {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2}",
    "src/img/**",
    "src/js/**",
    "src/*.ico"
  ], {
    base: "src"
  })
  .pipe(gulp.dest(buildFolder));
});

gulp.task("clean", function () {
  return del(buildFolder);
});

gulp.task("server", function () {
  server.init({
    server: buildFolder + "/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("src/*.html", gulp.series("html", "refresh"));
  gulp.watch("src/img/icon-*.svg", gulp.series("html", "refresh"));
  gulp.watch("src/sass/**/*.{scss,sass}", gulp.series("css", "refresh"));
  gulp.watch("src/js/**/*.js}", gulp.series("jsmin"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});




gulp.task("build", gulp.series("clean", "html", "css", "jsmin", "copy"));
gulp.task("start", gulp.series("build", "server"));
