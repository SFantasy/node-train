/**
 *
 * output.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-28
 * @update 2014-12-28
 */

var colors = require('colors');
var Table = require('cli-table');

exports.scheduleOutput = function (number, data) {
  var info = data.info;
  var table = new Table({
    head: data.head
  });

  console.log('');
  console.log('  车次：'.bold + number);
  console.log('\n  里程：' + info.mileage + '    耗时：' + info.takeTime);
  console.log('\n  列车时刻表：\n');

  data.item.forEach(function (item, i) {
    table.push(item);
  });

  console.log(table.toString());
};

exports.leftTicketsOutput = function (date, from, to, data) {

  console.log('\n查询 ' + date + ' 从 ' + from + ' 到 ' + to + ' 的车票结果');

  var table = new Table({
    head: ['No', 'Train Code', 'Start', 'End', 'Duartion', 'One seat', 'Two seat']
  });

  data.forEach(function (item, i) {
    table.push([
      i,
      item.trainCode,
      item.startTime,
      item.endTime,
      item.takeTime,
      item['one-seat'],
      item['two-seat']
    ]);
  });

  console.log(table.toString());
};