var DataTypes = require("sequelize").DataTypes;
var _X_shops = require("./X_shops");
var _test = require("./test");

function initModels(sequelize) {
  var X_shops = _X_shops(sequelize, DataTypes);
  var test = _test(sequelize, DataTypes);


  return {
    X_shops,
    test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
