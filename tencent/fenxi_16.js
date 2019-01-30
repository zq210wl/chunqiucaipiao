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

// var readDir = './tencent/cleanedData';
// var readDir = './tencent/originData';

// var readDir = './chongqing/data';
// var readDir = './xinjiang/data';
// var readDir = './heilongjiang/data';

var readDir = './chunqiu/originData';


var dataArr = [];
var dirsFiles = fs.readdirSync(readDir);
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
  dataArr = dataArr.concat(JSON.parse(fs.readFileSync(readDir + '/' + fileName, 'utf8')).data.original_data);
});
dataArr = dataArr.reverse();


// dataArr = [
//   { "lottery": ["0","1","2","3","4"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["0","1","2","3","4"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["0","1","2","3","4"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["0","1","2","3","4"] },
//   { "lottery": ["0","1","2","3","4"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["0","1","2","3","4"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["9","9","1","2","3"] },
//   { "lottery": ["0","1","2","3","4"] },
// ];


var hackDayNum = arg1 ? 0 : 4;

console.log('一共处理了' + (dirsFiles.length + hackDayNum) + '天' + dataArr.length + '条数据');

// 腾讯，春秋，韩国：三把连中，投第四把也中     
var maxNum = 15; // 最大投几次

var objs = [
  {
    name: '前',
    key: 1,
    curBetNum: 0,
    betCount: 0,
    winCount: 0,
    failCount: 0,
    touIndexArr: [],
    base: 0
  },
  {
    name: '中',
    key: 2,
    curBetNum: 0,
    betCount: 0,
    winCount: 0,
    failCount: 0,
    touIndexArr: [],
    base: 0
  },
  {
    name: '后',
    key: 3,
    curBetNum: 0,
    betCount: 0,
    winCount: 0,
    failCount: 0,
    touIndexArr: [],
    base: 0
  }
];

for (var m = 0; m < objs.length; m++) {
  var curObj = objs[m];
  for (var i = 0; i < dataArr.length; i++) {
    var curData = dataArr[i];
    var preData1 = dataArr[i - 1];
    var preData2 = dataArr[i - 2];
    var preData3 = dataArr[i - 3];
    var preData4 = dataArr[i - 4];

    var curIsWin = false;
    var preIsWin1 = false;
    var preIsWin2 = false;
    var preIsWin3 = false;
    var preIsWin4 = false;
    
    if (curData) {
      curIsWin = hasSame(curData.lottery, curObj.key);
    }
    if (preData1) {
      preIsWin1 = hasSame(preData1.lottery, curObj.key);
    }
    if (preData2) {
      preIsWin2 = hasSame(preData2.lottery, curObj.key);
    }
    if (preData3) {
      preIsWin3 = hasSame(preData3.lottery, curObj.key);
    }
    if (preData4) {
      preIsWin4 = hasSame(preData4.lottery, curObj.key);
    }

    if (preIsWin1 && preIsWin2 && preIsWin3 && !preIsWin4) {
      curObj.curBetNum++;
      if (curIsWin) {
        curObj.winCount++;
        curObj.curBetNum = 0;
      } else {
        if (curObj.curBetNum >= maxNum) {
          curObj.failCount++;
          curObj.curBetNum = 0;
        }
      }
      curObj.betCount++;
    }
  }

  console.log(`=========== ${curObj.name} ===========`);
  console.log(`一共投了 ${curObj.betCount} 次`);
  console.log(`一共中了 ${curObj.winCount} 次`);
  console.log(`投到第 ${curObj.curBetNum} 次`);
  console.log(`一共败了 ${curObj.failCount} 次`);
  //console.log(curObj.touIndexArr.toString());
}
