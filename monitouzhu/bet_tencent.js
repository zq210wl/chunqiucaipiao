
var fs = require('fs');
var common = require('./common.js');
var BET_LIST = common.BET_LIST;
var getNextDataByMultiple = common.getNextDataByMultiple;
var hasSame = common.hasSame;

var beginBackData = BET_LIST[11]; // 开始返回的数据
var backToData = BET_LIST[0]; // 返回哪一个数据
var backDetail = [ //  返回详情
  // { index, city, pos } 第几把
];
var allBets = {
  index: 1, // 当前是第几把
  curProfit: 0, // 当前这9把的总盈亏
  profit: 0 // 当前所有总的盈亏额
};
var defaultCity = {
  win: false, // 当前是否中奖
  cost: 0, // 当前这一把的花费成本
  reward: 0, // 当前这一把中奖后的奖金
  profit: 0, // 当前这一把的盈亏额
  multiple: 0 // 当前跟到第几倍了
};
var preBets = { // 上一把投注
  tencent: {
    qian: Object.assign({}, defaultCity),
    zhong: Object.assign({}, defaultCity),
    hou: Object.assign({}, defaultCity)
  }
}; 
var curBets = {
  tencent: {
    qian: Object.assign({}, defaultCity),
    zhong: Object.assign({}, defaultCity),
    hou: Object.assign({}, defaultCity)
  }
};

var CITY_ENGLISH_TO_CHINESE = {
  tencent: '腾讯'
};

var POS_ENGLISH_TO_CHINESE = {
  qian: '前',
  zhong: '中',
  hou: '后'
};

// 目录
var DIRS = [ 'tencent' ];
// 数据
var allDatas = {
  tencent: []
};
var exportFilename = '';
var exportCount = 0;
// 读取数据
DIRS.forEach(function(dir){
  var dataArr = [];
  var dirsFiles = fs.readdirSync(`./${dir}/data`);
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
    exportFilename = fileName.split('.')[0];
    dataArr = dataArr.concat(JSON.parse(fs.readFileSync(`./${dir}/data/${fileName}`, 'utf8')).data.original_data);
  });
  dataArr.reverse(); // 倒序排列数据
  allDatas[dir] = dataArr;
});

// 如果文件已经存在就先删除
if (fs.existsSync(`./tencent/moniresult/${exportFilename}.txt`)) {
  fs.unlinkSync(`./tencent/moniresult/${exportFilename}.txt`);
}

var dataLen = allDatas.tencent.length;

for (var i = 0; i < dataLen; i++) {
  allBets.curProfit = 0; // 重置
  for (var key1 in curBets) {
    var curData = allDatas[key1][i]; // 当前一个城市对应的的一条数据
    var curCity = curBets[key1]; // 当前城市对象
    var preCity = preBets[key1]; // 上一把对应的当前城市对象
    for (var key2 in curCity) {
      var curPos = curCity[key2]; // 当前城市中的某一个位置(前中后)对象
      var prePos = preCity[key2]; // 上一把对应的当前城市中的某一个位置(前中后)对象
      var curNextBet = null; // 当前将要投注的数据
      if (!prePos.win && prePos.multiple === beginBackData.multiple) { // 需要返回
        curNextBet = backToData;
        backDetail.push({ index: i + 1, city: CITY_ENGLISH_TO_CHINESE[key1], pos: POS_ENGLISH_TO_CHINESE[key2] });
      } else if (prePos.multiple === 0 || prePos.win){ // 第一把或上一把中奖了
        curNextBet = backToData;
      } else { // 上一把没中奖
        curNextBet = getNextDataByMultiple(prePos.multiple);
      }
      curPos.win = hasSame(curData.lottery, key2);
      curPos.cost = curNextBet.money;
      curPos.reward = curPos.win ? Number((curPos.cost * 3.62).toFixed(2)) : 0;
      curPos.profit = Number((curPos.reward - curPos.cost).toFixed(2));
      curPos.multiple = curNextBet.multiple;
      // all
      allBets.index = i + 1;
      allBets.curProfit = Number((allBets.curProfit + curPos.profit).toFixed(2));
      allBets.profit = Number((allBets.profit + curPos.profit).toFixed(2));
    }
  }
  preBets = JSON.parse(JSON.stringify(curBets));
  printData();
}

// 输出
function printData() {
  var backDetailStr = '';
  backDetail.forEach(function(data){
    backDetailStr += `${data.index}-${data.city}-${data.pos}; `;
  });
  backDetailStr = backDetailStr.substring(0, backDetailStr.length - 1);
  var printStr = `----- 当前是第[ ${allBets.index} ]把, 回归过[ ${backDetail.length} ]次[ ${backDetailStr} ]，盈亏[ ${allBets.curProfit} ], 总盈亏[ ${allBets.profit} ] -----\n`;
  for (var key1 in curBets) {
    var cityData = curBets[key1];
    var cityName = CITY_ENGLISH_TO_CHINESE[key1];
    for (var key2 in cityData) {
      var posData = cityData[key2];
      var posName = POS_ENGLISH_TO_CHINESE[key2];
      printStr += `${cityName + posName}: 中奖状态[ ${Number(posData.win)} ], 倍数[ ${posData.multiple} ], 成本[ ${posData.cost} ], 奖金[ ${posData.reward} ], 盈亏额[ ${posData.profit} ];\n`;
    }
  }
  fs.appendFile(`./tencent/moniresult/${exportFilename}.txt`, printStr, function () {
    console.log(`追加完成${++exportCount}`);
  });
}



// 目前发现的规律：盈利大于100就停止，第12把也就是76倍的时候不中就返回。