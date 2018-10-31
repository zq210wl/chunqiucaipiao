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
var dirsFiles = fs.readdirSync('./xinjiang/data');
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

dirsFiles.forEach(function(fileName){
  dataArr = dataArr.concat(JSON.parse(fs.readFileSync('./xinjiang/data/' + fileName, 'utf8')).data.original_data);
});
dataArr.reverse();

console.log('一共处理了' + dirsFiles.length + '天' + dataArr.length + '条数据');

var preQianIndex = -1;
var preZhongIndex = -1;
var preHouIndex = -1;
var lastQianIndex = -1;
var lastZhongIndex = -1;
var lastHouIndex = -1;
// x 表示第几把中的
for (var x = 1; x < 40; x++) {
  console.log('----- 第' + x + '把中奖的数据 -----');
  (function(){
    var index1 = -1;
    var index2 = -1;
    var acount = 0;
    var indexArr = [];
    var exceedAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 1)) { 
        if (index1 === -1) {
          index1 = i;
          preQianIndex = i;
          continue;
        }
        index2 = i;
        lastQianIndex = i;
        if ((index2 - index1) === x) {
          acount++;
          indexArr.push(`${index1+1},${i+1}`);
        }
        if ((index2 - index1) > x) {
          exceedAcount++;
        }
        index1 = index2;
      }
    }
    console.log('前:', acount, exceedAcount, indexArr);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var acount = 0;
    var indexArr = [];
    var exceedAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 2)) { 
        if (index1 === -1) {
          index1 = i;
          preZhongIndex = i;
          continue;
        }
        index2 = i;
        lastZhongIndex = i;
        if ((index2 - index1) === x) {
          acount++;
          indexArr.push(`${index1+1},${i+1}`);
        }
        if ((index2 - index1) > x) {
          exceedAcount++;
        }
        index1 = index2;
      }
    }
    console.log('中:', acount, exceedAcount, indexArr);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var acount = 0;
    var indexArr = [];
    var exceedAcount = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 3)) { 
        if (index1 === -1) {
          index1 = i;
          preHouIndex = i;
          continue;
        }
        index2 = i;
        lastHouIndex = i;
        if ((index2 - index1) === x) {
          acount++;
          indexArr.push(`${index1+1},${i+1}`);
        }
        if ((index2 - index1) > x) {
          exceedAcount++;
        }
        index1 = index2;
      }
    }
    console.log('后:', acount, exceedAcount, indexArr);
  })();
}

console.log('前三最[前]面未中的个数:', preQianIndex);
console.log('前三最[后]面未中的个数:', dataArr.length - lastQianIndex - 1);

console.log('中三最[前]面未中的个数:', preZhongIndex);
console.log('中三最[后]面未中的个数:', dataArr.length - lastZhongIndex - 1);

console.log('后三最[前]面未中的个数:', preHouIndex);
console.log('后三最[后]面未中的个数:', dataArr.length - lastHouIndex - 1);