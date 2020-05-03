const gulp = require(`gulp`);

const clean = require(`./clean`);
const copy = require(`./copy`);
const css = require(`./css`);
const html = require(`./html`);

const build = gulp.series(clean, copy, css, html);
module.exports = build;
