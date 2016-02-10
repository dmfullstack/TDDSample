var Item = require('./model');
var mongoose = require('mongoose');

exports.index = function(req, res, next) {
  Item.find(function (err, items) {
      res.status(200).json(items);
      next();
  });
};
