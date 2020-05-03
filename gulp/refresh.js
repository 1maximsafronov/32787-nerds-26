const server = require(`browser-sync`).create();

module.exports = function refresh(done) {
  server.reload();
  done();
};
