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

var BET_LIST = [
  { multiple: 1, money: 1.8, index: 1 },
  { multiple: 1, money: 1.8, index: 2 },
  { multiple: 2, money: 3.6, index: 3 },
  { multiple: 3, money: 5.4, index: 4 },
  { multiple: 5, money: 9.0, index: 5 },
  { multiple: 7, money: 12.6, index: 6 },
  { multiple: 10, money: 18.0, index: 7 },
  { multiple: 14, money: 25.2, index: 8 },
  { multiple: 20, money: 36.0, index: 9 },
  { multiple: 27, money: 48.6, index: 10 },
  { multiple: 38, money: 68.4, index: 11 },
  { multiple: 53, money: 95.4, index: 12 },
  { multiple: 73, money: 131.4, index: 13 },
  { multiple: 102, money: 183.6, index: 14 },
  { multiple: 142, money: 255.6, index: 15 },
  { multiple: 195, money: 351.0, index: 16 },
  { multiple: 270, money: 486.0, index: 17 }
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