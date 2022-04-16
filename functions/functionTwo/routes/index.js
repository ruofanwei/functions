/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { map } = require('lodash');
const fs = require('fs');
const path = require('path');

const routers = [];
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const router = require(path.join(__dirname, file));
    routers.push(router);
  });

module.exports = (app) => {
  map(routers, (route) => {
    app.use('/', route);
  });
  return app
};
