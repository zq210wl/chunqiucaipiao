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
var readDir = './chongqing/data';
// var readDir = './xinjiang/data';
// var readDir = './heilongjiang/data';

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

var hackDayNum = arg1 ? 0 : 4;

console.log('一共处理了' + (dirsFiles.length + hackDayNum) + '天' + dataArr.length + '条数据');

// var firstIndex = 1;
// var pauseNum = 5;
// var spaceNum = 2;
// var pauseStartNum = 2;
// var maxNum = 15;
// var failStartNum = 1;

// var objs = [
//   {
//     name: '前',
//     key: 1,
//     nextIndex: firstIndex,
//     curBetNum: 0,
//     betCount: 0,
//     winCount: 0,
//     failCount: 0,
//     hasPause: false
//   },
//   {
//     name: '中',
//     key: 2,
//     nextIndex: firstIndex,
//     curBetNum: 0,
//     betCount: 0,
//     winCount: 0,
//     failCount: 0,
//     hasPause: false
//   },
//   {
//     name: '后',
//     key: 3,
//     nextIndex: firstIndex,
//     curBetNum: 0,
//     betCount: 0,
//     winCount: 0,
//     failCount: 0,
//     hasPause: false
//   }
// ];

// function isPause(curIndex, key) {
//   if (curIndex < pauseNum) {
//     return false;
//   }
//   for (var i = (curIndex - 1); i >= (curIndex - pauseNum); i--) {
//     if (hasSame(dataArr[i].lottery, key)) {
//       return false;
//     }
//   }
//   return true;
// }

// for (var m = 0; m < objs.length; m++) {
//   var curObj = objs[m];
//   for (var i = 0; i < dataArr.length; i++) {
//     var isWin = hasSame(dataArr[i].lottery, curObj.key);
//     if (curObj.hasPause) {
//       if (isWin) {
//         curObj.nextIndex = (i + pauseStartNum);
//         curObj.hasPause = false;
//       }
//       continue;
//     }
//     if (i === curObj.nextIndex) {
//       if (isPause(i, curObj.key)) {
//         curObj.hasPause = true;
//       } else {
//         curObj.curBetNum++;
//         if (isWin) {
//           curObj.winCount++;
//           curObj.nextIndex++;
//           curObj.curBetNum = 0;
//         } else {
//           if (curObj.curBetNum < maxNum) {
//             curObj.nextIndex += spaceNum;
//           } else {
//             curObj.failCount++;
//             curObj.nextIndex = (i + failStartNum);
//             curObj.curBetNum = 0;
//           }
//         }
//         curObj.betCount++;
//       }
//     }
//   }

//   console.log(`=========== ${curObj.name} ===========`);
//   console.log(`一共投了 ${curObj.betCount} 次`);
//   console.log(`一共中了 ${curObj.winCount} 次`);
//   console.log(`一共败了 ${curObj.failCount} 次`);
// }



var firstIndex = 0;
var pauseNum = 5;
var spaceNum = 2;
var pauseStartNum = 2;
var maxNum = 17;
var failStartNum = 0;

var objs = [
  {
    name: '前',
    key: 1,
    nextIndex: firstIndex,
    curBetNum: 0,
    betCount: 0,
    winCount: 0,
    failCount: 0,
    hasPause: false
  },
  {
    name: '中',
    key: 2,
    nextIndex: firstIndex,
    curBetNum: 0,
    betCount: 0,
    winCount: 0,
    failCount: 0,
    hasPause: false
  },
  {
    name: '后',
    key: 3,
    nextIndex: firstIndex,
    curBetNum: 0,
    betCount: 0,
    winCount: 0,
    failCount: 0,
    hasPause: false
  }
];

function isPause(curIndex, key) {
  if (curIndex < pauseNum) {
    return false;
  }
  for (var i = (curIndex - 1); i >= (curIndex - pauseNum); i--) {
    if (hasSame(dataArr[i].lottery, key)) {
      return false;
    }
  }
  return true;
}

for (var m = 0; m < objs.length; m++) {
  var curObj = objs[m];
  for (var i = 0; i < dataArr.length; i++) {
    var isWin = hasSame(dataArr[i].lottery, curObj.key);
    if (curObj.hasPause) {
      if (isWin) {
        curObj.nextIndex = (i + pauseStartNum);
        curObj.hasPause = false;
      }
      continue;
    }
    if (i === curObj.nextIndex) {
      if (isPause(i, curObj.key)) {
        curObj.hasPause = true;
      } else {
        curObj.curBetNum++;
        if (isWin) {
          curObj.winCount++;
          curObj.nextIndex++;
          curObj.curBetNum = 0;
        } else {
          if (curObj.curBetNum < maxNum) {
            curObj.nextIndex += spaceNum;
            // if (curObj.curBetNum % 2 === 0) {
            //   curObj.nextIndex += 1;
            // }
          } else {
            curObj.failCount++;
            curObj.nextIndex = (i + failStartNum);
            curObj.curBetNum = 0;
          }
        }
        curObj.betCount++;
      }
    }
  }

  console.log(`=========== ${curObj.name} ===========`);
  console.log(`一共投了 ${curObj.betCount} 次`);
  console.log(`一共中了 ${curObj.winCount} 次`);
  console.log(`投到第 ${curObj.curBetNum} 次`);
  console.log(`一共败了 ${curObj.failCount} 次`);
}
