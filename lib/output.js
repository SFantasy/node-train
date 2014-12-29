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
  console.log('\n  列车时刻表：\n');

  console.log('  站次  站名  出发时间  到达时间'.bold);

  data.trainScheduleBody.forEach(function (item, i) {
    var content = item.content;
    console.log('  ' + content[0] + '  ' + content[1] + '  ' + content[3] + '  ' + content[4]);
  });
};