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

exports.scheduleOutput = function (number, data) {
  var extInfo = data.extInfo;

  console.log('');
  console.log('  车次：'.bold + number);
  console.log('\n  里程：' + extInfo.allMileage + '    耗时：' + extInfo.allTime);

};