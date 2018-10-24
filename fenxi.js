// 腾讯分分彩的第三方开奖结果查询：http://off0.com/index.php
/* 
  腾讯分分彩的官方人数接口：https://mma.qq.com/cgi-bin/im/online
  开奖结果计算规则：在线人数253830109 拆分成2+5+3+8+3+0+1+0+9=31
      取31的各位数1作为万位，0109作为千百十个位，计算结果为10109
  奖期计算方法：比如 2018.10.24 13:45 的奖期为：20181024 + (13*60 + 45) = 201810240825 
      ()中计算的数字不足四位数，在前面补充0
*/


var allDataArr = require('./data/tencent.js');

// http('POST', 'https://api.chunqiu1.com/trends', {
//   lottery_id: 64,
//   count: "2880"
// }).then(function(res){

// }).catch(function(err){

// });

function hasSame(lotteryArr, way) {
  // ["7","0","6","8","2"]
  var index1 = 0;
  var index2 = 0;
  var index3 = 0;
  if (way === 1) {
    index1 = 0;
    index2 = 1;
    index3 = 2;
  } else if (way === 2) {
    index1 = 1;
    index2 = 2;
    index3 = 3;
  } else if (way === 3) {
    index1 = 2;
    index2 = 3;
    index3 = 4;
  }
  if ((lotteryArr[index1] === lotteryArr[index2] || lotteryArr[index1] === lotteryArr[index3] || lotteryArr[index2] === lotteryArr[index3]) 
  && !(lotteryArr[index1] === lotteryArr[index2] && lotteryArr[index2] === lotteryArr[index3])) {
    return true;
  } else {
    return false;
  }
}

var dataArr = [];

//allDataArr = [allDataArr[allDataArr.length - 1]];

allDataArr.forEach(function(d){
  dataArr = dataArr.concat(d.data.original_data);
});
console.log('一共抓了' + dataArr.length + '条数据');
// dataArr = [
//   { lottery: [2,2,3,4,5] },
//   { lottery: [1,2,3,4,5] },
//   { lottery: [1,2,3,4,5] },
//   { lottery: [2,2,2,4,3] }
// ];

// x 表示*超过*第几把没中
for (var x = 8; x < 35; x++) {
  console.log('-----' + x + '-----');
  (function(){
    var index1 = -1;
    var index2 = -1;
    var qiansanAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 1)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        } else {
          index2 = i;
        }
        if (index1 !== -1 && index2 !== -1 && (index2 - index1) > (x + 1)) {
          qiansanAcount++;
        }
        index1 = index2;
      }
    }
    console.log('前:', qiansanAcount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var qiansanAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 2)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        } else {
          index2 = i;
        }
        if (index1 !== -1 && index2 !== -1 && (index2 - index1) > (x + 1)) {
          qiansanAcount++;
        }
        index1 = index2;
      }
    }
    console.log('中:', qiansanAcount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var qiansanAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 3)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        } else {
          index2 = i;
        }
        if (index1 !== -1 && index2 !== -1 && (index2 - index1) > (x + 1)) {
          qiansanAcount++;
        }
        index1 = index2;
      }
    }
    console.log('后:', qiansanAcount);
  })();
}
