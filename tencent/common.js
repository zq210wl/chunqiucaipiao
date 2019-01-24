// var BET_LIST = [
//   { multiple: 1, money: 1.8, index: 1 },         // 每一把总收益：4.72
//   { multiple: 2, money: 3.6, index: 2 },         // 每一把总收益：7.65
//   { multiple: 3, money: 5.4, index: 3 },         // 每一把总收益：8.78
//   { multiple: 4, money: 7.2, index: 4 },         // 每一把总收益：8.11
//   { multiple: 6, money: 10.8, index: 5 },        // 每一把总收益：10.37
//   { multiple: 8, money: 14.4, index: 6 },        // 每一把总收益：9.02
//   { multiple: 12, money: 21.6, index: 7 },       // 每一把总收益：13.54
//   { multiple: 18, money: 32.4, index: 8 },       // 每一把总收益：20.31
//   { multiple: 26, money: 46.8, index: 9 },       // 每一把总收益：25.74        // 成本 144.0
//   { multiple: 38, money: 68.4, index: 10 },      // 每一把总收益：35.68         // 成本 212.4
//   { multiple: 54, money: 97.2, index: 11 },               // 成本 309.6
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
//   { multiple: 1, money: 1.8, index: 1 },              // 每一把总收益: 4.73    4.73
//   { multiple: 1, money: 1.8, index: 2 },              // 每一把总收益: 2.92    1.46
//   { multiple: 2, money: 3.6, index: 3 },              // 每一把总收益: 5.85    1.95
//   { multiple: 3, money: 5.4, index: 4 },              // 每一把总收益: 6.98    1.35
//   { multiple: 5, money: 9.0, index: 5 },              // 每一把总收益: 11.04   2.28
//   { multiple: 7, money: 12.6, index: 6 },             // 每一把总收益: 11.50   1.91
//   { multiple: 10, money: 18.0, index: 7 },            // 每一把总收益: 13.08   1.86
//   { multiple: 14, money: 25.2, index: 8 },            // 每一把总收益: 14.00   1.80
//   { multiple: 20, money: 36.0, index: 9 },            // 每一把总收益: 17.17   1.90
//   { multiple: 27, money: 48.6, index: 10 },           // 每一把总收益: 14.27   1.42
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

// var BET_LIST = [
//   { index: 1, multiple: 20, money: 36.0 },      // 收益: 94.57        成本：36.0
//   { index: 2, multiple: 27, money: 48.6 },      // 收益: 91.67        成本：84.6
//   { index: 3, multiple: 38, money: 68.4 },      // 收益: 95.08        成本：153.0
//   { index: 4, multiple: 54, money: 97.2 },      // 收益: 102.34       成本：250.2
//   { index: 5, multiple: 75, money: 135.0 }      // 收益: 104.44       成本：385.2
// ];


// var BET_LIST = [
//   { index: 1, multiple: 1, money: 0.02 },      // 收益: 0.06   成本：0.02
//   { index: 2, multiple: 2, money: 0.04 },      // 收益: 0.10   成本：0.06
//   { index: 3, multiple: 3, money: 0.06 },      // 收益: 0.11   成本：0.12
//   { index: 4, multiple: 4, money: 0.08 },      // 收益: 0.11   成本：0.20
//   { index: 5, multiple: 5, money: 0.10 },      // 收益: 0.09   成本：0.30
//   { index: 6, multiple: 6, money: 0.12 },      // 收益: 0.05   成本：0.42
//   { index: 7, multiple: 8, money: 0.16 },      // 收益: 0.05   成本：0.58
//   { index: 8, multiple: 11, money: 0.22 },     // 收益: 0.06   成本：0.80
//   { index: 9, multiple: 15, money: 0.30 },      // 收益: 0.07   成本：1.10
//   { index: 10, multiple: 20, money: 0.40 },     // 收益: 0.06   成本：1.50
//   { index: 11, multiple: 27, money: 0.54 },     // 收益: 0.07   成本：2.04
//   { index: 12, multiple: 36, money: 0.72 },     // 收益: 0.06   成本：2.76
//   { index: 13, multiple: 49, money: 0.98 },     // 收益: 0.09   成本：3.74
//   { index: 14, multiple: 66, money: 1.32 },     // 收益: 0.10   成本：5.06
//   { index: 15, multiple: 88, money: 1.76 },     // 收益: 0.06   成本：6.82
//   { index: 16, multiple: 119, money: 2.38 },     // 收益: 0.11   成本：9.20
//   { index: 17, multiple: 159, money: 3.18 },     // 收益: 0.05   成本：12.38
//   { index: 18, multiple: 214, money: 4.28 },     // 收益: 0.07   成本：16.66
//   { index: 19, multiple: 288, money: 5.76 },     // 收益: 0.10   成本：22.42
//   { index: 20, multiple: 387, money: 7.74 },     // 收益: 0.10   成本：30.16
//   { index: 21, multiple: 520, money: 10.40 },    // 收益: 0.10   成本：40.56
//   { index: 22, multiple: 698, money: 13.96 },    // 收益: 0.06   成本：54.52
//   { index: 23, multiple: 938, money: 18.76 },    // 收益: 0.07   成本：73.28
//   { index: 24, multiple: 1261, money: 25.22 },   // 收益: 0.11   成本：98.50
//   { index: 25, multiple: 1694, money: 33.88 },   // 收益: 0.09   成本：132.38
//   { index: 26, multiple: 2276, money: 45.52 },   // 收益: 0.08   成本：177.90
//   { index: 27, multiple: 3058, money: 61.16 },   // 收益: 0.08   成本：239.06
//   { index: 28, multiple: 4109, money: 82.18 }    // 收益: 0.08   成本：321.24
// ];

var BET_LIST = [
  { index: 1, multiple: 3, multipleMoney: 0.06, money: 0.18 },      // 收益: 0.05   成本：0.18
  { index: 2, multiple: 13, multipleMoney: 0.26, money: 0.78 },      // 收益: 0.06   成本：0.96
  { index: 3, multiple: 58, multipleMoney: 1.16, money: 3.48 },      // 收益: 0.10   成本：4.44
  { index: 4, multiple: 250, multipleMoney: 5.0, money: 15.0 },      // 收益: 0.11   成本：19.44
  { index: 5, multiple: 1100, multipleMoney: 5.0, money: 15.0 },      // 收益: 0.11   成本：19.44
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