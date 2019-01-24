var fs = require('fs');

function isWinFn(lotteryArr, way) {
  var index1 = 3;
  var index2 = 4;

  // 小大||偶奇
  // if (
  //   ((lotteryArr[index1] < 5) && (lotteryArr[index2] > 4))
  //   || ((lotteryArr[index1] % 2 === 0) && (lotteryArr[index2] % 2 === 1))
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 小大||奇偶
  // if (
  //   ((lotteryArr[index1] < 5) && (lotteryArr[index2] > 4))
  //   || ((lotteryArr[index1] % 2 === 1) && (lotteryArr[index2] % 2 === 0))
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 奇偶 (36)
  // if (lotteryArr[index1] % 2 === 1 && lotteryArr[index2] % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 奇奇 (41)
  // if (lotteryArr[index1] % 2 === 1 && lotteryArr[index2] % 2 === 1) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 偶偶 (27)
  // if (lotteryArr[index1] % 2 === 0 && lotteryArr[index2] % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 偶奇 (32)
  // if (lotteryArr[index1] % 2 === 0 && lotteryArr[index2] % 2 === 1) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 小大 (25)
  // if (lotteryArr[index1] < 5 && lotteryArr[index2] > 4) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 小小 (40)
  // if (lotteryArr[index1] < 5 && lotteryArr[index2] < 5) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 大小 (34)
  // if (lotteryArr[index1] > 4 && lotteryArr[index2] < 5) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 大大 (32)
  // if (lotteryArr[index1] > 4 && lotteryArr[index2] > 4) {
  //   return true;
  // } else {
  //   return false;
  // }


  // 小大||偶奇||偶偶 (13)
  // if (
  //   ((lotteryArr[index1] < 5) && (lotteryArr[index2] > 4))
  //   || ((lotteryArr[index1] % 2 === 0) && (lotteryArr[index2] % 2 === 1))
  //   || ((lotteryArr[index1] % 2 === 0) && (lotteryArr[index2] % 2 === 0))
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 小大||奇偶||奇奇 (9)
  if (
    ((lotteryArr[index1] < 5) && (lotteryArr[index2] > 4))
    || ((lotteryArr[index1] % 2 === 1) && (lotteryArr[index2] % 2 === 0))
    || ((lotteryArr[index1] % 2 === 1) && (lotteryArr[index2] % 2 === 1))
  ) {
    return true;
  } else {
    return false;
  }

  // 小大||大小||奇偶 (10)
  // if (
  //   ((lotteryArr[index1] < 5) && (lotteryArr[index2] > 4))
  //   || ((lotteryArr[index1] > 4) && (lotteryArr[index2] < 5))
  //   || ((lotteryArr[index1] % 2 === 1) && (lotteryArr[index2] % 2 === 0))
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
}

var dataArr = [];
var dirsFiles = fs.readdirSync('./tencent/cleanedData');
if (dirsFiles.indexOf('.DS_Store') !== -1) {
  dirsFiles = dirsFiles.slice(1);
}
// 参数说明：如果不带参数就统计所有的数据
var arg1 = process.argv[2]; // 从倒数第几条开始看
var arg2 = process.argv[3]; // 一共看几条
var lastFromNum = arg1 ? (arg1 - 1) : 0;
var acountNum = arg1 && arg2 ? arg2 : dirsFiles.length;
var idx1 = dirsFiles.length - lastFromNum - acountNum;
var idx2 = dirsFiles.length - lastFromNum;
dirsFiles = dirsFiles.slice(idx1, idx2);
console.log(dirsFiles);

dirsFiles.forEach(function(fileName){
  dataArr = dataArr.concat(JSON.parse(fs.readFileSync('./tencent/cleanedData/' + fileName, 'utf8')).data.original_data);
});

var hackDayNum = arg1 ? 0 : 4;

console.log('一共处理了' + (dirsFiles.length + hackDayNum) + '天' + dataArr.length + '条数据');

// x 表示*超过*第几把没中
for (var x = 0; x < 30; x++) {
  console.log('-----' + x + '-----');
  (function(){
    var index1 = -1;
    var index2 = -1;
    var acount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (isWinFn(dataArr[i].lottery, 3)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        }
        index2 = i;
        if ((index2 - index1) > x) {
          acount++;
        }
        index1 = index2;
      }
    }
    console.log('后:', acount);
  })();
}