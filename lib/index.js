// Module dependencies
var output = require('./output');
var request = require('request');

var basicUrl = 'http://train.qunar.com/qunar/checiInfo.jsp?format=json&q=';

exports.schedule = function (number) {
  request(basicUrl + number, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      output.scheduleOutput(number, JSON.parse(body));
    }
  });
};
