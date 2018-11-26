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
//   { multiple: 1, money: 1.8, index: 1 },              // 每一把收益: 4.73
//   { multiple: 1, money: 1.8, index: 2 },              // 每一把收益: 2.92
//   { multiple: 2, money: 3.6, index: 3 },              // 每一把收益: 5.85
//   { multiple: 3, money: 5.4, index: 4 },              // 每一把收益: 6.98
//   { multiple: 5, money: 9.0, index: 5 },              // 每一把收益: 11.04
//   { multiple: 7, money: 12.6, index: 6 },             // 每一把收益: 11.50
//   { multiple: 10, money: 18.0, index: 7 },            // 每一把收益: 13.08
//   { multiple: 14, money: 25.2, index: 8 },            // 每一把收益: 14.00
//   { multiple: 20, money: 36.0, index: 9 },            // 每一把收益: 17.17
//   { multiple: 27, money: 48.6, index: 10 },           // 每一把收益: 14.27
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
// 用两个账户同时操作，可以盈利翻倍，也不至于把单个倍数弄的很大，引起平台关注
// 新疆、黑龙江、重庆都可以分开完，不一定非要一起玩，也就是不一定都必须从10点开始玩，也可以晚上2点结束
/*
黑龙江最多有1个到28把中，从14把开始就剩它一个了
重庆最多有1个到25把中，从12把开始就剩它一个了
新疆最多有1个到21把中，从14把开始就剩它一个了
*/


// 组六玩法
// var BET_LIST = [
//   { index: 1, multiple: 1, money: 2.4 },
//   { index: 2, multiple: 4, money: 9.6 },
//   { index: 3, multiple: 16, money: 38.4 },
//   { index: 4, multiple: 60, money: 144.0 },
//   { index: 5, multiple: 228, money: 547.2 }
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
//   { index: 18, multiple: 218, money: 392.4 }   // 每一把收益: 0.97
// ];


// var BET_LIST = [
//   { index: 1, multiple: 10, money: 18.0 },      // 收益: 47.28
//   { index: 2, multiple: 20, money: 36.0 },      // 收益: 76.57
//   { index: 3, multiple: 30, money: 54.0 },      // 收益: 87.85
//   { index: 4, multiple: 40, money: 72.0 },      // 收益: 81.14
//   { index: 5, multiple: 50, money: 90.0 }      // 收益: 56.43
// ];

var BET_LIST = [
  { index: 1, multiple: 20, money: 36.0 },      // 收益: 94.57        成本：36.0
  { index: 2, multiple: 27, money: 48.6 },      // 收益: 91.67        成本：84.6
  { index: 3, multiple: 38, money: 68.4 },      // 收益: 95.08        成本：153.0
  { index: 4, multiple: 54, money: 97.2 },      // 收益: 102.34       成本：250.2
  { index: 5, multiple: 75, money: 135.0 }      // 收益: 104.44       成本：385.2
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
  },
  // hasSame: function(lotteryArr, way) {
  //   // 组六
  //   var index1 = 0;
  //   var index2 = 0;
  //   var index3 = 0;
  //   if (way === 'qian') {
  //     index1 = 0;
  //     index2 = 1;
  //     index3 = 2;
  //   } else if (way === 'zhong') {
  //     index1 = 1;
  //     index2 = 2;
  //     index3 = 3;
  //   } else if (way === 'hou') {
  //     index1 = 2;
  //     index2 = 3;
  //     index3 = 4;
  //   }
  //   if (lotteryArr[index1] !== lotteryArr[index2] && lotteryArr[index2] !== lotteryArr[index3] && lotteryArr[index1] !== lotteryArr[index3]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
};