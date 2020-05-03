const ghpages = require(`gh-pages`);

module.exports = function publish() {
  return ghpages.publish(`build`, function () {});
};
