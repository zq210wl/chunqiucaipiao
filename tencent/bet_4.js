
var fs = require('fs');
var common = require('./common.js');
var BET_LIST = common.BET_LIST;
var getNextDataByMultipleIndex = common.getNextDataByMultipleIndex;
var hasSame = common.hasSame;

var beginBackData = BET_LIST[4]; // 开始返回的数据

var allBets = {
  failTimes: 0,
  failArr: [],
  profit: 0 // 当前所有总的盈亏额
};
var defaultData = {
  win: false, // 当前是否中奖
  cost: 0, // 当前这一把的花费成本
  reward: 0, // 当前这一把中奖后的奖金
  profit: 0, // 当前这一把的盈亏额
  multiple: 0, // 当前跟到第几倍了
  multipleIndex: 0 // 倍数跟到第几把了
};

// 读取数据
var dirsFiles = fs.readdirSync(`./tencent/cleanedData`);
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


console.log('一共处理文件个数-=-=-=-=-=-：', dirsFiles.length);

dirsFiles.forEach(function(fileName){
  var exportFilename = fileName.split('.')[0];
  console.log('正在处理文件-----------:', exportFilename);
  var dataArr = JSON.parse(fs.readFileSync(`./tencent/cleanedData/${fileName}`, 'utf8')).data.original_data;
  dataArr = dataArr.reverse(); // 倒序排列数据
  for (var i = 1; i <=3; i++) {
    console.log('正在处理数据下标==========:', i);
    bet(i, dataArr, exportFilename);
  }
  console.log('目前盈利：', allBets.profit);
});
console.log('回归数据：', allBets.failArr);
console.log('回归次数：', allBets.failTimes);
console.log('最终盈利：', allBets.profit);

function bet(i, dataArr, exportFilename) {
  var preBet = JSON.parse(JSON.stringify(defaultData));
  var curBet = JSON.parse(JSON.stringify(defaultData));
  var canBetNum = 20;
  var notWinNum = 0;
  var beginI = i;
  var tempNum = 3;
  for (; i < dataArr.length; i+=tempNum) {
    if (notWinNum === canBetNum) {
      if (preBet.win) {
        return;
      }
      if (preBet.multipleIndex === beginBackData.index) {
        allBets.failTimes++;
        allBets.failArr.push(`${exportFilename}---${beginI}`);
        return;
      }
      var curBetData = null; // 当前将要投注的数据
      if (preBet.multiple === 0){
        curBetData = BET_LIST[0];
      } else {
        curBetData = getNextDataByMultipleIndex(preBet.multipleIndex);
      }

      curBet.win = hasSame(dataArr[i].lottery, 'qian');
      curBet.cost = curBetData.money;
      curBet.reward = curBet.win ? Number((curBet.cost * 3.625).toFixed(2)) : 0;
      curBet.profit = Number((curBet.reward - curBet.cost).toFixed(2));
      curBet.multiple = curBetData.multiple;
      curBet.multipleIndex = curBetData.index;

      // all
      allBets.profit = Number((allBets.profit + curBet.profit).toFixed(2));

      preBet = JSON.parse(JSON.stringify(curBet));
    } else {
      if (!hasSame(dataArr[i].lottery, 'qian')) {
        notWinNum++;
      } else {
        notWinNum = 0;
      }
    }
  }
}

// 目前发现的规律：前3把不中就开始投