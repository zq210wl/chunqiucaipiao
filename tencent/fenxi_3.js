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
var dirsFiles = fs.readdirSync('./tencent/data');
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
  dataArr = dataArr.concat(JSON.parse(fs.readFileSync('./tencent/data/' + fileName, 'utf8')).data.original_data);
});

var hackDayNum = arg1 ? 0 : 4;

console.log('一共处理了' + (dirsFiles.length + hackDayNum) + '天' + dataArr.length + '条数据');

// dataArr = [
//   {lottery: ["1","1","2","2","5"]},
//   {lottery: ["1","6","2","9","5"]},
//   {lottery: ["6","2","6","6","5"]},
//   {lottery: ["7","6","2","9","5"]},
//   {lottery: ["6","6","2","5","1"]},
//   {lottery: ["2","6","2","2","5"]},
//   {lottery: ["7","6","2","9","5"]},
//   {lottery: ["7","6","2","9","5"]},
//   {lottery: ["7","6","2","9","5"]},
//   {lottery: ["7","6","2","9","5"]},
//   {lottery: ["7","6","2","9","5"]},
//   {lottery: ["2","6","2","2","5"]}
// ];

// x 表示第几把未中
for (var x = 1; x < 40; x++) {
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
    console.log('{一}前在第[' + x + ']把未中的数量:', acount);
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
    console.log('{一}中在第[' + x + ']把未中的数量:', acount);
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
    console.log('{一}后在第[' + x + ']把未中的数量:', acount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var findData = [];
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 1) && hasSame(dataArr[i].lottery, 2)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        }
        index2 = i;
        if ((index2 - index1) > x) {
          findData.push([
            {
              idx: index1,
              data: dataArr[index1].lottery
            },
            {
              idx: index2,
              data: dataArr[index2].lottery
            }
          ]);
        }
        index1 = index2;
      }
    }
    var acount = 0;
    for (var j = 0; j < findData.length; j++) {
      var isFind = false;
      for (var m = (findData[j][0].idx + 1); m < findData[j][1].idx; m++) {
        if (hasSame(dataArr[m].lottery, 1) || hasSame(dataArr[m].lottery, 2)) {
          isFind = true;
        }
      }
      if (!isFind) {
        acount++;
      }
    }
    console.log('{二}前中同时在第[' + x + ']把未中的数量:', acount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var findData = [];
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 1) && hasSame(dataArr[i].lottery, 3)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        }
        index2 = i;
        if ((index2 - index1) > x) {
          findData.push([
            {
              idx: index1,
              data: dataArr[index1].lottery
            },
            {
              idx: index2,
              data: dataArr[index2].lottery
            }
          ]);
        }
        index1 = index2;
      }
    }
    var acount = 0;
    for (var j = 0; j < findData.length; j++) {
      var isFind = false;
      for (var m = (findData[j][0].idx + 1); m < findData[j][1].idx; m++) {
        if (hasSame(dataArr[m].lottery, 1) || hasSame(dataArr[m].lottery, 3)) {
          isFind = true;
        }
      }
      if (!isFind) {
        acount++;
      }
    }
    console.log('{二}前后同时在第[' + x + ']把未中的数量:', acount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var findData = [];
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 2) && hasSame(dataArr[i].lottery, 3)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        }
        index2 = i;
        if ((index2 - index1) > x) {
          findData.push([
            {
              idx: index1,
              data: dataArr[index1].lottery
            },
            {
              idx: index2,
              data: dataArr[index2].lottery
            }
          ]);
        }
        index1 = index2;
      }
    }
    var acount = 0;
    for (var j = 0; j < findData.length; j++) {
      var isFind = false;
      for (var m = (findData[j][0].idx + 1); m < findData[j][1].idx; m++) {
        if (hasSame(dataArr[m].lottery, 2) || hasSame(dataArr[m].lottery, 3)) {
          isFind = true;
        }
      }
      if (!isFind) {
        acount++;
      }
    }
    console.log('{二}中后同时在第[' + x + ']把未中的数量:', acount);
  })();

  (function(){
    var index1 = -1;
    var index2 = -1;
    var findData = [];
    for (var i = 0; i < dataArr.length; i++) {
      if (hasSame(dataArr[i].lottery, 1) && hasSame(dataArr[i].lottery, 2) && hasSame(dataArr[i].lottery, 3)) { 
        if (index1 === -1) {
          index1 = i;
          continue;
        }
        index2 = i;
        if ((index2 - index1) > x) {
          findData.push([
            {
              idx: index1,
              data: dataArr[index1].lottery
            },
            {
              idx: index2,
              data: dataArr[index2].lottery
            }
          ]);
        }
        index1 = index2;
      }
    }
    var acount = 0;
    for (var j = 0; j < findData.length; j++) {
      var isFind = false;
      for (var m = (findData[j][0].idx + 1); m < findData[j][1].idx; m++) {
        if (hasSame(dataArr[m].lottery, 1) || hasSame(dataArr[m].lottery, 2) || hasSame(dataArr[m].lottery, 3)) {
          isFind = true;
        }
      }
      if (!isFind) {
        acount++;
      }
    }
    console.log('{三}前中后同时在第[' + x + ']把未中的数量:', acount);
  })();
}