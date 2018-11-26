var fs = require('fs');

function hasSame(lotteryArr, way) {
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
var dirsFiles = fs.readdirSync('./feilvbin/originData');
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
  dataArr = dataArr.concat(JSON.parse(fs.readFileSync('./feilvbin/originData/' + fileName, 'utf8')).data.original_data);
});

var hackDayNum = arg1 ? 0 : 4;

console.log('一共处理了' + (dirsFiles.length + hackDayNum) + '天' + dataArr.length + '条数据');

// x 表示*超过*第几把没中
for (var x = 10; x < 40; x++) {
  console.log('-----' + x + '-----');
  (function(){
    var index1 = -1;
    var index2 = -1;
    var acount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 1)) { 
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
    console.log('前:', acount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var acount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 2)) { 
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
    console.log('中:', acount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var acount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 3)) { 
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