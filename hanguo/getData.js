var request = require('request');
var fs = require('fs');

function getFileName() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  month = (month > 9 ? month : '0' + month);
  day = (day > 9 ? day : '0' + day);
  return '' + year + '' + month + '' + day;
}

request({
  url: 'https://api.chunqiu3.com/trends',
  method: 'POST',
  headers: {
    Accept: 'application/vnd.chunqiu.v1+json'
  },
  body: {
    lottery_id: 66,
    count: "3000" // 4.1天
  },
  json: true
}, function(error, response, body){
  if (!error && response.statusCode == 200) {
    console.log('抓取数据成功');
  } else {
    console.log(error);
  }
}).pipe(fs.createWriteStream('./hanguo/originData/' + getFileName() + '.json'));