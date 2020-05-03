const gulp = require(`gulp`);
const localserver = require(`./gulp/localserver`);
const build = require(`./gulp/build`);
const publish = require(`./gulp/publish`);

module.exports.start = gulp.series(build, localserver);
module.exports.build = build;
module.exports.publish = publish;
