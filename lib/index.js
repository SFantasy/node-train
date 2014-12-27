// Module dependencies
var request = require('request');

var basicUrl = 'http://train.qunar.com/qunar/checiInfo.jsp?format=json&q=';

exports.schedule = function (number) {
  request(basicUrl + number, function (err, res, body) {
    var data;

    if (!err && res.statusCode === 200) {
      data = JSON.parse(body);
      console.log(data);
    }
  });
};