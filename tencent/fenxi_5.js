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

function notSame(lotteryArr, way) {
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
  if (lotteryArr[index1] === lotteryArr[index2] && lotteryArr[index2] === lotteryArr[index3]) {
    return true;
  } else {
    return false;
  }
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
dataArr = dataArr.reverse();

var hackDayNum = arg1 ? 0 : 4;

console.log('一共处理了' + (dirsFiles.length + hackDayNum) + '天' + dataArr.length + '条数据');

var qianObj = {
  preChecked: 0,
  checkdObj: {}
};
var zhongObj = {
  preChecked: 0,
  checkdObj: {}
};
var houObj = {
  preChecked: 0,
  checkdObj: {}
};
for (var i = 0; i < dataArr.length; i++) {
  if (hasSame(dataArr[i].lottery, 1)) { 
    qianObj.preChecked++;
  } else {
    if (qianObj.preChecked !== 0) {
      if (qianObj.checkdObj[qianObj.preChecked]) {
        qianObj.checkdObj[qianObj.preChecked]++;
      } else {
        qianObj.checkdObj[qianObj.preChecked] = 1;
      }
      qianObj.preChecked = 0;
    }
  }

  if (hasSame(dataArr[i].lottery, 2)) { 
    zhongObj.preChecked++;
  } else {
    if (zhongObj.preChecked !== 0) {
      if (zhongObj.checkdObj[zhongObj.preChecked]) {
        zhongObj.checkdObj[zhongObj.preChecked]++;
      } else {
        zhongObj.checkdObj[zhongObj.preChecked] = 1;
      }
      zhongObj.preChecked = 0;
    }
  }

  if (hasSame(dataArr[i].lottery, 3)) { 
    houObj.preChecked++;
  } else {
    if (houObj.preChecked !== 0) {
      if (houObj.checkdObj[houObj.preChecked]) {
        houObj.checkdObj[houObj.preChecked]++;
      } else {
        houObj.checkdObj[houObj.preChecked] = 1;
      }
      houObj.preChecked = 0;
    }
  }
}

console.log(`=========== 前 ===========`);
Object.keys(qianObj.checkdObj).forEach(function(key){
  console.log(`--${key}--`, qianObj.checkdObj[key]);
});

console.log(`=========== 中 ===========`);
Object.keys(zhongObj.checkdObj).forEach(function(key){
  console.log(`--${key}--`, zhongObj.checkdObj[key]);
});

console.log(`=========== 后 ===========`);
Object.keys(houObj.checkdObj).forEach(function(key){
  console.log(`--${key}--`, houObj.checkdObj[key]);
});


var qianNotObj = {
  preChecked: 0,
  checkdObj: {}
};
var zhongNotObj = {
  preChecked: 0,
  checkdObj: {}
};
var houNotObj = {
  preChecked: 0,
  checkdObj: {}
};

for (var i = 0; i < dataArr.length; i++) {
  if (hasSame(dataArr[i].lottery, 1)) { 
    qianNotObj.preChecked++;
  } else {
    if (qianNotObj.preChecked !== 0) {
      if (notSame(dataArr[i].lottery, 1)) {
        if (qianNotObj.checkdObj[qianNotObj.preChecked]) {
          qianNotObj.checkdObj[qianNotObj.preChecked]++;
        } else {
          qianNotObj.checkdObj[qianNotObj.preChecked] = 1;
        }
      }
      qianNotObj.preChecked = 0;
    }
  }

  if (hasSame(dataArr[i].lottery, 2)) { 
    zhongNotObj.preChecked++;
  } else {
    if (zhongNotObj.preChecked !== 0) {
      if (notSame(dataArr[i].lottery, 2)) {
        if (zhongNotObj.checkdObj[zhongNotObj.preChecked]) {
          zhongNotObj.checkdObj[zhongNotObj.preChecked]++;
        } else {
          zhongNotObj.checkdObj[zhongNotObj.preChecked] = 1;
        }
      }
      zhongNotObj.preChecked = 0;
    }
  }

  if (hasSame(dataArr[i].lottery, 3)) { 
    houNotObj.preChecked++;
  } else {
    if (houNotObj.preChecked !== 0) {
      if (notSame(dataArr[i].lottery, 2)) {
        if (houNotObj.checkdObj[houNotObj.preChecked]) {
          houNotObj.checkdObj[houNotObj.preChecked]++;
        } else {
          houNotObj.checkdObj[houNotObj.preChecked] = 1;
        }
      }
      houNotObj.preChecked = 0;
    }
  }
}

console.log(`=========== 前not ===========`);
Object.keys(qianNotObj.checkdObj).forEach(function(key){
  console.log(`--${key}--`, qianNotObj.checkdObj[key]);
});

console.log(`=========== 中not ===========`);
Object.keys(zhongNotObj.checkdObj).forEach(function(key){
  console.log(`--${key}--`, zhongNotObj.checkdObj[key]);
});

console.log(`=========== 后not ===========`);
Object.keys(houNotObj.checkdObj).forEach(function(key){
  console.log(`--${key}--`, houNotObj.checkdObj[key]);
});