const gulp = require(`gulp`);
const server = require(`browser-sync`).create();
const css = require(`./css`);
const html = require(`./html`);
const refresh = require(`./refresh`);
const copy = require(`./copy`);

module.exports = function localserver() {
  server.init({
    server: `build`,
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch(`src/*.html`, gulp.series(html, refresh));
  gulp.watch(`src/img/icon-*.svg`, gulp.series(html, refresh));
  gulp.watch(`src/sass/**/*.{scss,sass}`, gulp.series(css, refresh));
  gulp.watch(`src/js/*.js`, gulp.series(copy, refresh));
};
