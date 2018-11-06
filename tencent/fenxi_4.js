/*
格式：

*/

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
var dirsFiles = fs.readdirSync('./tencent/originData');
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
  dataArr = dataArr.concat(JSON.parse(fs.readFileSync('./tencent/originData/' + fileName, 'utf8')).data.original_data);
});
dataArr.reverse();

console.log('一共处理了' + dirsFiles.length + '天' + dataArr.length + '条数据');

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

var doubleWinArr = [];
dataArr.forEach(function(data, index){
  var qianWin = hasSame(data.lottery, 1);
  var zhongWin = hasSame(data.lottery, 2);
  var houWin = hasSame(data.lottery, 3);
  if ((qianWin && zhongWin) || (qianWin && houWin) || (zhongWin && houWin)) {
    doubleWinArr.push({
      idx: index,
      issue: data.issue,
      lottery: data.lottery,
      winDetai: `${qianWin}, ${zhongWin}, ${houWin}`
    });
  }
});

var resultObj = {
  // 2: [ [preObj, curObj], [preObj, curObj] ]
};
doubleWinArr.forEach(function(data, index){
  var preObj = doubleWinArr[index - 1];
  var curObj = data;
  if (preObj && curObj) {
    var num = curObj.idx - preObj.idx - 1; // 上一把中奖到这一把中奖中间有几把
    if (resultObj[num]) {
      resultObj[num].push([preObj, curObj]);
    } else {
      resultObj[num] = [
        [preObj, curObj]
      ];
    }
  }
});

for (var key in resultObj) {
  var numObjArr = resultObj[key];
  console.log(`------- 两个同时中奖中间隔了[ ${key} ]把的有[ ${numObjArr.length} ]个 -------`);
  numObjArr.forEach(function(numObj, index){
    var preObj = numObj[0];
    var curObj = numObj[1];
    console.log(`奖期号[ ${preObj.issue} -- ${curObj.issue} ]`);
    console.log(`开奖号[ ${preObj.lottery.join(',')} -- ${curObj.lottery.join(',')} ]`);
    console.log(`中奖情况[ ${preObj.winDetai} -- ${curObj.winDetai} ]`);
    console.log(' ');
  });
}