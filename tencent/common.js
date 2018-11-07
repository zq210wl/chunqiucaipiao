// var BET_LIST = [
//   { multiple: 1, money: 1.8, index: 1 },
//   { multiple: 2, money: 3.6, index: 2 },
//   { multiple: 3, money: 5.4, index: 3 },
//   { multiple: 4, money: 7.2, index: 4 },
//   { multiple: 6, money: 10.8, index: 5 },
//   { multiple: 8, money: 14.4, index: 6 },
//   { multiple: 12, money: 21.6, index: 7 },
//   { multiple: 18, money: 32.4, index: 8 },
//   { multiple: 26, money: 46.8, index: 9 },
//   { multiple: 38, money: 68.4, index: 10 },
//   { multiple: 54, money: 97.2, index: 11 },
//   { multiple: 76, money: 136.8, index: 12 },
//   { multiple: 109, money: 196.2, index: 13 },
//   { multiple: 159, money: 286.2, index: 14 },
//   { multiple: 234, money: 421.2, index: 15 },
//   { multiple: 346, money: 622.8, index: 16 },
//   { multiple: 515, money: 927, index: 17 },
//   { multiple: 768, money: 1382.4, index: 18 },
//   { multiple: 1145, money: 2061, index: 19 },
//   { multiple: 1710, money: 3078, index: 20 },
//   { multiple: 2556, money: 4600.8, index: 21 },
//   { multiple: 3827, money: 6888.6, index: 22 }
// ];

// var BET_LIST = [
//   { multiple: 1, money: 1.8, index: 1 },
//   { multiple: 1, money: 1.8, index: 2 },
//   { multiple: 2, money: 3.6, index: 3 },
//   { multiple: 3, money: 5.4, index: 4 },
//   { multiple: 5, money: 9.0, index: 5 },
//   { multiple: 7, money: 12.6, index: 6 },
//   { multiple: 10, money: 18.0, index: 7 },
//   { multiple: 14, money: 25.2, index: 8 },
//   { multiple: 20, money: 36.0, index: 9 },
//   { multiple: 27, money: 48.6, index: 10 },
//   { multiple: 38, money: 68.4, index: 11 },
//   { multiple: 53, money: 95.4, index: 12 },
//   { multiple: 73, money: 131.4, index: 13 },
//   { multiple: 102, money: 183.6, index: 14 },
//   { multiple: 142, money: 255.6, index: 15 },
//   { multiple: 195, money: 351.0, index: 16 },
//   { multiple: 270, money: 486.0, index: 17 }
// ];

// var BET_LIST = [
//   { index: 1, multiple: 1, money: 1.8 },      // 每一把收益: 4.73
//   { index: 2, multiple: 1, money: 1.8 },      // 每一把收益: 1.46
//   { index: 3, multiple: 2, money: 3.6 },      // 每一把收益: 1.95
//   { index: 4, multiple: 2, money: 3.6 },      // 每一把收益: 0.56
//   { index: 5, multiple: 3, money: 5.4 },      // 每一把收益: 0.68
//   { index: 6, multiple: 4, money: 7.2 },      // 每一把收益: 0.45
//   { index: 7, multiple: 6, money: 10.8 },     // 每一把收益: 0.71
//   { index: 8, multiple: 8, money: 14.4 },     // 每一把收益: 0.45
//   { index: 9, multiple: 12, money: 21.6 },    // 每一把收益: 0.90
//   { index: 10, multiple: 16, money: 28.8 },   // 每一把收益: 0.55
//   { index: 11, multiple: 22, money: 39.6 },   // 每一把收益: 0.46
//   { index: 12, multiple: 31, money: 55.8 },   // 每一把收益: 0.67
//   { index: 13, multiple: 43, money: 77.4 },   // 每一把收益: 0.69
//   { index: 14, multiple: 59, money: 106.2 },   // 每一把收益: 0.51
//   { index: 15, multiple: 82, money: 147.6 },   // 每一把收益: 0.65
//   { index: 16, multiple: 114, money: 205.2 },   // 每一把收益: 0.84
//   { index: 17, multiple: 157, money: 282.6 },   // 每一把收益: 0.68
//   { index: 18, multiple: 218, money: 392.4 },   // 每一把收益: 0.97
//   { index: 19, multiple: 300, money: 540.0 },   // 每一把收益: 0.67
//   { index: 20, multiple: 414, money: 745.2 }   // 每一把收益: 0.59
// ];

// 如果到第20把还不中，那就开始止损，回归到第10把重新开始，总共覆盖30把
var BET_LIST = [
  { index: 1, multiple: 1, money: 1.8 },      // 每一把收益: 4.73
  { index: 2, multiple: 1, money: 1.8 },      // 每一把收益: 1.46
  { index: 3, multiple: 1, money: 1.8 },      // 每一把收益: 0.38
  { index: 4, multiple: 2, money: 3.6 },      // 每一把收益: 1.00
  { index: 5, multiple: 2, money: 3.6 },      // 每一把收益: 0.09
  { index: 6, multiple: 3, money: 5.4 },      // 每一把收益: 0.36
  { index: 7, multiple: 4, money: 7.2 },      // 每一把收益: 0.13
  { index: 8, multiple: 6, money: 10.8 },      // 每一把收益: 0.39
  { index: 9, multiple: 8, money: 14.4 },      // 每一把收益: 0.2
  { index: 10, multiple: 11, money: 19.8 },      // 每一把收益: 0.16
  { index: 11, multiple: 15, money: 27.0 },      // 每一把收益: 0.12
  { index: 12, multiple: 21, money: 37.8 },      // 每一把收益: 0.17
  { index: 13, multiple: 29, money: 52.2 },      // 每一把收益: 0.16
  { index: 14, multiple: 40, money: 72.0 },      // 每一把收益: 0.13
  { index: 15, multiple: 56, money: 100.8 },      // 每一把收益: 0.37
  { index: 16, multiple: 77, money: 138.6 },      // 每一把收益: 0.25
  { index: 17, multiple: 106, money: 190.8 },      // 每一把收益: 0.15
  { index: 18, multiple: 147, money: 264.6 },      // 每一把收益: 0.31
  { index: 19, multiple: 202, money: 363.6 },      // 每一把收益: 0.31
  { index: 20, multiple: 280, money: 504.0 },      // 每一把收益: 0.32
];

module.exports = {
  BET_LIST: BET_LIST,
  getNextDataByMultipleIndex: function(multipleIndex) {
    for (var i = 0; i < BET_LIST.length; i++) {
      if (BET_LIST[i].index === multipleIndex && BET_LIST[i+1]) {
        return BET_LIST[i+1];
      }
    }
  },
  getNextDataByMultiple: function(multiple) {
    for (var i = 0; i < BET_LIST.length; i++) {
      if (BET_LIST[i].multiple === multiple && BET_LIST[i+1]) {
        return BET_LIST[i+1];
      }
    }
  },
  hasSame: function(lotteryArr, way) {
    var index1 = 0;
    var index2 = 0;
    var index3 = 0;
    if (way === 'qian') {
      index1 = 0;
      index2 = 1;
      index3 = 2;
    } else if (way === 'zhong') {
      index1 = 1;
      index2 = 2;
      index3 = 3;
    } else if (way === 'hou') {
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
};