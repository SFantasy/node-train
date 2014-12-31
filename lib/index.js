// Module dependencies
var output = require('./output');
var config = require('./config');

var Chepiao = require('chepiao-sdk');
var chepiao = new Chepiao(config);

exports.schedule = function (number) {
  chepiao.schedule(number, function (res) {
    if (res.success) {
      output.scheduleOutput(number, res.data);
    } else {
      console.log('Request ERROR');
    }
  });
};

exports.queryTickets = function (date, from, to) {
  chepiao.leftTickets(date, from, to, function (res) {
    if (res.success) {
      output.leftTicketsOutput(date, from, to, res.data);
    } else {
      console.log('Request ERROR');
    }
  });
};
